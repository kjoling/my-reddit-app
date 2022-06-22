import React from "react";
import "./App.css";
import Header from "./features/Header/Header";
import Home from "./features/Home/Home";
import Subreddits from "./features/Subreddits/Subreddits";

function App() {
  return (
    <div className="App">
      <div className="App-Header">
        <Header />
      </div>
      <main className="App-Home">
        <Home />
      </main>
      <aside className="App-Subreddits">
        <Subreddits />
      </aside>
    </div>
  );
}

export default App;
