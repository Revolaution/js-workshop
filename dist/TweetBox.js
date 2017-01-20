"use strict";

var postTweet = function postTweet(tweet) {
  // 5. The value of the textarea is logged to the console.
  console.log(tweet);
};

/**
  Implementation of a React "Uncontrolled Component." See below for more info.

  The numbered steps outline the flow of the textarea's text value.
*/
var TweetBox = function TweetBox(props) {
  var placeholder = props.placeholder;

  // 1. Declare a constiable that will eventually be assigned the <textarea> DOM element
  var tweetInput;

  var handleClick = function handleClick() {
    // 4. Access the value of the textarea
    postTweet(tweetInput.value);
    tweetInput.value = "";
  };

  return React.createElement(
    "div",
    null,
    React.createElement("textarea", { rows: "5", cols: "60", ref: function ref(textareaElement) {
        tweetInput = textareaElement;
      } }),
    React.createElement("input", { type: "button", value: "Tweet", onClick: handleClick })
  );
};

/*
  React supports a special attribute that you can attach to any component. The "ref"
  attribute takes a callback function, and the callback will be executed immediately after
  the component is mounted or unmounted.

  From the callback, we can get ahold of the actual DOM element being created and
  get/modify its attributes, such as value.

  This is necessary because "tweetText" is a React element, NOT a <textarea> input field.

  React refers to this pattern as an Uncontrolled Component, meaning that React does
  not control the state of the component.

  Using ref is totally acceptable for something small like this, but the advice is
  not to overuse it because it tightly couples you to the DOM. We will see another
  way of doing this later.

  https://facebook.github.io/react/docs/uncontrolled-components.html
  https://facebook.github.io/react/docs/refs-and-the-dom.html
*/

/*
<div>
  <textarea rows=5 cols=60 />
  <input type="button" value="Tweet"/>w
</div>
*/