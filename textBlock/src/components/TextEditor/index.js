import React, { useState, useMemo } from "react";
import "./textEditor.css";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { withHistory } from "slate-history";
import {
  addNewTextBlock,
  saveDataRequest,
} from "../../redux/textBlock/textBlockAction";

const TextEditor = () => {
  const [value, setValue] = useState(initialValue);
  const { currentUser } = useSelector((state) => state.user);
  const { blocks } = useSelector((state) => state.textBlock);
  const dispatch = useDispatch();

  const addTextBlock = () => {
    dispatch(
      addNewTextBlock({
        id: Date.now(),
        items: [{ id: Date.now() + 1, title: value }],
      })
    );
    setValue(initialValue);
  };

  const saveChange = () => {
    dispatch(saveDataRequest(blocks, currentUser.uid));
  };
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  return (
    <div>
      <div className="slate">
        <Slate
          editor={editor}
          value={value}
          onChange={(value) => setValue(value)}
        >
          <Editable placeholder="Enter some plain text..." />
        </Slate>
      </div>

      <div className="button-container">
        <Button
          className="text-button"
          type="primary"
          onClick={saveChange}
          danger
        >
          Save change
        </Button>

        <Button className="text-button" type="primary" onClick={addTextBlock}>
          Add text block
        </Button>
      </div>
    </div>
  );
};

const initialValue = [
  {
    type: "paragraph",
    children: [{ text: "" }],
  },
];

export default TextEditor;
