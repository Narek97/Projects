import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter } from "react-router-dom";
import { useWindowSize } from "./hooks/useWindowSize";
import Navbar from "./components/Navbar";
import Routing from "./routes/Routing";
import MobileNavBar from "./components/MobileNavBar";
import background from "./assetes/images/bg.jpg";

const App = () => {
  const [x] = useWindowSize();

  return (
    <BrowserRouter>
      <div className={"app"} style={{ backgroundImage: `url(${background})` }}>
        {x > 1000 ? (
          <Navbar />
        ) : (
          <MobileNavBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
        )}
        <Routing />
      </div>
    </BrowserRouter>
  );
};

export default App;
