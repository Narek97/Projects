import React, { FC } from "react";
import "./AddWords.css";
import { Button, Form, Input } from "antd";
import { IAddWord } from "../types";

interface AddWordProps {}

const AddWords: FC<AddWordProps> = () => {
  const onFinish = (values: IAddWord) => {
    console.log("Success:", values);
  };

  return (
    <div className={"add-word"}>
      <div className={"add-word-form"}>
        <h2 className={"add-word--title"}>
          Write the English word and its Armenian meaning
        </h2>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="English word"
            name="english"
            rules={[
              {
                required: true,
                message: "Please input your english word!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Armenian word"
            name="armenian"
            rules={[
              {
                required: true,
                message: "Please input your armenian word!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AddWords;
