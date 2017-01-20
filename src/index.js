import ReactDOM from "react-dom";
import React from "react";

import postTweet from "./postTweet";
import TweetBox from "./TweetBox";

ReactDOM.render(
  <TweetBox placeholder="What're you thinking?" postTweet={postTweet} />,
  document.getElementById('root')
);
