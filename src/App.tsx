import React from "react";
import "./App.scss";
import { ApiProvider } from "./api/apiContext";

const App: React.FC = () => {
  return (
    <>
      <ApiProvider>
        <div></div>
      </ApiProvider>
    </>
  );
};

export default App;
