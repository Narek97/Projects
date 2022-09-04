import React, { FC } from "react";
import { Button, Carousel } from "antd";
import "./CarouselSlider.css";
import { IChooseCorrectTranslation } from "../types";
import ChooseCorrectTranslationItem from "./ChooseCorrectTranslationItem";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

interface carouselSliderProps {
  data: IChooseCorrectTranslation[];
  type: string;
  isFinish?: boolean;
}

const CarouselSlider: FC<carouselSliderProps> = ({ data, type, isFinish }) => {
  const carouselRef = React.createRef<any>();

  return (
    <div className={"carousel"}>
      <Carousel ref={carouselRef}>
        {type === "quiz1"
          ? data.map((item) => (
              <div className={"carousel--slid"} key={item.id}>
                <ChooseCorrectTranslationItem
                  item={item as IChooseCorrectTranslation}
                  isFinish={isFinish}
                />
              </div>
            ))
          : null}
      </Carousel>
      <Button
        className={"carousel-btn"}
        onClick={() => {
          carouselRef.current.prev();
        }}
      >
        <LeftOutlined />
      </Button>
      <Button
        className={"carousel-btn"}
        onClick={() => {
          carouselRef.current.next();
        }}
      >
        <RightOutlined />
      </Button>
    </div>
  );
};

export default CarouselSlider;
