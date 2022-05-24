import "./App.css";
import React from "react";
import { Landing } from "./components/Landing";
import { BrowserRouter, Route, Router, Routes, Switch } from "react-router-dom";
import { PostView } from "./components/PostView";
import AddPost from "./components/AddPost";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/postview" element={<PostView />} exact />
          <Route path="/" element={<Landing className="landing" />} exact />
          <Route path="/post/add" element={<AddPost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
