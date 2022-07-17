import { useState } from "react";
import "./styles.css";

export default function App() {
  var emojiColor = "blue";
  var emojiDictionary = {
    "😀": "Grinning Face",
    "😉": "Winking Face",
    "🤩": "Star-Struck",
    "😘": "Face Blowing a Kiss",
    "😗": "Kissing Face"
  };
  const [likeCounter, setLikeCounter] = useState(0);

  var [emojiMeaning, setEmojiMeaning] = useState("");

  function clickLikeHandler() {
    var newLikeCounter = likeCounter + 1;
    setLikeCounter(newLikeCounter);
  }

  function resetCount() {
    setLikeCounter(0);
  }

  function emojiHandler(event) {
    var inputValue = event.target.value;
    var meaning = emojiDictionary[inputValue];
    setEmojiMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Hi Parth</h1>
      <p>The Count is: {likeCounter}</p>
      <button className="likeButton" onClick={clickLikeHandler}>
        Click me to Increase the Count
      </button>
      <button onClick={resetCount} className="likeButton">
        Reset Count
      </button>

      <div className="inputBlock">
        <p>
          {" "}
          Select from the following Emoji:{" "}
          <span role="img" aria-label="emojis">
            😀 😉 🤩 😘 😗
          </span>
        </p>
        <input onChange={emojiHandler} />

        <p>
          Meaning Of emoji is :{" "}
          <span style={{ color: emojiColor }}> {emojiMeaning}</span>
        </p>
      </div>
    </div>
  );
}
