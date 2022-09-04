import React, { useEffect, useState, Fragment } from "react";
import "./dashboard.css";
import { useDispatch, useSelector } from "react-redux";
import TextEditor from "../TextEditor";
import TextEditorBlock from "./../TextEditorBlock/index";
import { Skeleton } from "antd";
import {
  changeBlockPosition,
  downloadTextBlocksRequest,
} from "../../redux/textBlock/textBlockAction";

function Dashboard() {
  const [currentItem, setCurrentItem] = useState(null);
  const [currentBlock, setCurrentBlock] = useState(null);
  const { currentUser } = useSelector((state) => state.user);
  const { blocks, loading, error } = useSelector((state) => state.textBlock);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(downloadTextBlocksRequest(currentUser.uid));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const update = (block) => {
    return blocks
      .map((b) => {
        if (b.id === block.id) {
          return block;
        }
        if (b.id === currentBlock.id) {
          return currentBlock;
        }
        return b;
      })
      .filter(({ items }) => {
        return items.length !== 0;
      });
  };

  const dragOverHandler = (e) => {
    e.preventDefault();
    if (e.target.className === "bottom" || e.target.className === "right") {
      e.target.style.opacity = "1";
    }
  };
  const dragLeaveHandler = (e) => {
    if (e.target.className === "bottom" || e.target.className === "right") {
      e.target.style.opacity = "0";
    }
  };

  const dragStartHandler = (block, item) => {
    setCurrentItem(item);
    setCurrentBlock(block);
  };
  const dragEndHandler = (e) => {
    if (e.target.className === "bottom" || e.target.className === "right") {
      e.target.style.opacity = "0";
    }
  };
  const dragDropRightHandler = (e, block, item) => {
    e.preventDefault();
    const currentIndex = currentBlock.items.indexOf(currentItem);
    currentBlock.items.splice(currentIndex, 1);
    const dropIndex = block.items.indexOf(item);
    block.items.splice(dropIndex + 1, 0, currentItem);
    e.target.style.opacity = "0";
    dispatch(changeBlockPosition(update(block)));
  };

  const dragDropBottomHandler = (e, block) => {
    e.preventDefault();
    const newBlock = { id: Date.now(), items: [currentItem] };
    const currentIndex = currentBlock.items.indexOf(currentItem);
    currentBlock.items.splice(currentIndex, 1);
    const dropIndex = blocks.indexOf(block);
    blocks.splice(dropIndex + 1, 0, newBlock);
    e.target.style.opacity = "0";
    dispatch(changeBlockPosition(update(block)));
  };

  return (
    <div className="content">
      <div className="container">
        {loading ? (
          <Skeleton />
        ) : blocks.length ? (
          blocks.map((block) => (
            <div key={block.id}>
              <div className="block">
                {block.items.map((item) => (
                  <Fragment key={item.id}>
                    <div
                      onDragOver={(e) => dragOverHandler(e)}
                      onDragLeave={(e) => dragLeaveHandler(e)}
                      onDragStart={() => dragStartHandler(block, item)}
                      onDragEnd={(e) => dragEndHandler(e)}
                      draggable={true}
                      className="item"
                    >
                      <TextEditorBlock item={item} blockId={block.id} />
                    </div>
                    <div
                      className="right"
                      onDragOver={(e) => dragOverHandler(e)}
                      onDragLeave={(e) => dragLeaveHandler(e)}
                      onDragEnd={(e) => dragEndHandler(e)}
                      onDrop={(e) => dragDropRightHandler(e, block, item)}
                    ></div>
                  </Fragment>
                ))}
              </div>
              <div
                className="bottom"
                onDragOver={(e) => dragOverHandler(e)}
                onDragLeave={(e) => dragLeaveHandler(e)}
                onDragEnd={(e) => dragEndHandler(e)}
                onDrop={(e) => dragDropBottomHandler(e, block)}
              ></div>
            </div>
          ))
        ) : error ? (
          <h1 className="warring">{error}</h1>
        ) : (
          <h1 className="warring">No block, create your first text block</h1>
        )}
      </div>

      <TextEditor />
    </div>
  );
}

export default Dashboard;
