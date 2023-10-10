import React from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { PostAuthor } from "./postAuthor";
import { TimeAgo } from "./TimeAgo";
import { ReactionButtons } from "./ReactionButtons";

export const PostList = () => {
  const posts = useSelector((state) => state.posts);

  const orderedPost = posts.slice().sort((a, b) => {
    return b.date.localeCompare(a.date);
  });
  const renderPosts = orderedPost.map((post) => {
    return (
      <article className="post-excerpt" key={post.id}>
        <h3>{post.title}</h3>
        <div>
          <PostAuthor userId={post.user} />
          <TimeAgo timestamp={post.date} />
        </div>
        <p className="post-content">{post.content.substring(0, 100)}</p>
        <div>
        <ReactionButtons post={post} />
        </div>
        <Link to={`/posts/${post.id}`} className="button mutted-button">
          View Post
        </Link>
      </article>
    );
  });

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderPosts}
    </section>
  );
};
