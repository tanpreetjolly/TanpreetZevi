import React from "react";
import "./App.scss";
import { ApiProvider } from "./api/apiContext";
import Hero from "./components/Hero";

const App: React.FC = () => {
  return (
    <>
      <ApiProvider>
        <Hero />
      </ApiProvider>
    </>
  );
};

export default App;
