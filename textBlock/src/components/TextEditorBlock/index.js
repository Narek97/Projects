import React, { useState, useMemo } from "react";
import "./textEditorBlock.css";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { DeleteOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { deleteTextBlock } from "../../redux/textBlock/textBlockAction";
import { Tag } from "antd";

const TextEditorBlock = ({ item, blockId }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(item.title || initialValue);
  const editor = useMemo(() => withReact(createEditor()), []);
  const { blocks } = useSelector((state) => state.textBlock);

  const deleteBlock = () => {
    blocks.forEach((el, i) => {
      if (el.id === blockId && el.items.length === 1) {
        blocks.splice(i, 1);
      } else if (el.id === blockId && el.items.length > 1) {
        console.log(blocks[i]);
        blocks[i].items = blocks[i].items.filter((el) => el.id !== item.id);
      }
      return el;
    });

    dispatch(deleteTextBlock(blocks));
  };
  return (
    <>
      <Tag color="magenta">
        <Slate
          editor={editor}
          value={value}
          onChange={(value) => setValue(value)}
        >
          <Editable readOnly />
        </Slate>
        <DeleteOutlined onClick={deleteBlock} className="delete-block" />
      </Tag>
    </>
  );
};

const initialValue = [
  {
    type: "paragraph",
    children: [
      {
        text: "",
      },
    ],
  },
];

export default TextEditorBlock;
