import React from "react";
import "./App.css";
import Header from "./features/Header/Header";
import Home from "./features/Home/Home";
import Subreddits from "./features/Subreddits/Subreddits";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
      </main>
      <aside>
        <Subreddits />{" "}
      </aside>
    </div>
  );
}

export default App;
