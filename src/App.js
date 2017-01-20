import React from "react";

import TweetBox from "./TweetBox";
import Feed from "./Feed";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };

    this.postTweet = this.postTweet.bind(this);
  };

  postTweet(tweet) {
    this.setState({
      tweets: this.state.tweets.concat(tweet)
    });
  }

  render() {
    return (
      <div>
        <TweetBox placeholder="What're you thinking?" postTweet={this.postTweet} />
        <Feed tweets={this.state.tweets} />
      </div>
    );
  };
}

export default App;
