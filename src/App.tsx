import React from "react";
import "./App.scss";
import { ApiProvider } from "./api/apiContext";
import Hero from "./components/HeroSection/Hero";

const App = () => {
  return (
    <>
      <ApiProvider>
        <Hero />
      </ApiProvider>
    </>
  );
};

export default App;
