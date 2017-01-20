import React from "react";

const Feed = (props) => {
  const {tweets} = props;

  return (
    <ul>
      {tweets.map( (tweet) => <li>{tweet}</li> )}
    </ul>
  );
};

export default Feed;
