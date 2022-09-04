import { FC, useEffect, useState } from "react";
import "./QuizTab.css";
import { Tabs } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import ChooseCorrectTranslation from "./ChooseCorrectTranslation";
const { TabPane } = Tabs;

const QuizTab: FC = () => {
  const navigate = useNavigate();
  const { pathname, hash } = useLocation();

  const [activeKey, setActiveKey] = useState<string>("0");

  const onChange = (key: string) => {
    navigate({
      pathname,
      hash: key,
    });
    setActiveKey(key);
  };

  useEffect(() => {
    setActiveKey(hash?.substring(1) || "1");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Tabs activeKey={activeKey} onChange={onChange} centered className="custom-tab" >
      <TabPane tab="Choose correct translation" key="1">
        {activeKey === "1" ? <ChooseCorrectTranslation /> : null}
      </TabPane>
      <TabPane tab="Write translation" key="2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="Guess word translation" key="3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
  );
};

export default QuizTab;
