import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import { Navbar } from "./app/Navbar";
import { PostList } from "./features/postList";
import { AddpostForm } from "./features/AddpostForm";
import { SinglePostPage } from "./features/SinglePostPage";
import { EditPostForm } from "./features/EditPostForm";

function App() {
  return (
    <div className="vital-app">
      <BrowserRouter>
        <div className="navbar-wrapper">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" Component={AddpostForm} />
          <Route path="/posts" Component={PostList} />
          <Route exact path="/posts/:postId" Component={SinglePostPage} />
          <Route exact path="/editPost/:postId" Component={EditPostForm} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
