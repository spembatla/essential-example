import React from "react";
import { useDispatch } from "react-redux";

import { reactionAdded } from "./postSlice";

const reactionEmoji = {
  thumbsUp: "👍",
  hooray: "🎉",
  heart: "❤",
  eyes: "😍",
  rocket: "🚀",
};

export const ReactionButtons = ({ post }) => {
    console.log('prop ==>', post);
  const dispatch = useDispatch();
  const reactionButtons = Object.entries(reactionEmoji).map(
    ([reactionName, emoji]) => {
        console.log('reaction name: ', reactionName, emoji);
      return (
        <button
          key={reactionName}
          type="button"
          className="mutted-button reaction-button"
          onClick={() =>
            dispatch(reactionAdded({ postId: post.id, reaction: reactionName }))
          }
        >
          {emoji} {post.reactions[reactionName]}
        </button>
      );
    }
  );
  return <div>{reactionButtons}</div>;
};
