import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useSelector } from "react-redux";
import { useRouter } from "./router";
import Spinner from "./components/Spinner/index";
import ErrorBoundary from "./components/ErrorBoundary/index";

function App() {
  const { loading } = useSelector((state) => state.user);
  const routes = useRouter();

  return (
    <ErrorBoundary>
      <Router>{loading ? <Spinner /> : <>{routes}</>}</Router>
    </ErrorBoundary>
  );
}

export default App;
