import React from "react";
import "./App.scss";
import { ApiProvider } from "./api/apiContext";
import Search from "./components/SearchBar/Search";

const App: React.FC = () => {
  return (
    <>
      <ApiProvider>
        <div>
          <Search/>
        </div>
      </ApiProvider>
    </>
  );
};

export default App;
