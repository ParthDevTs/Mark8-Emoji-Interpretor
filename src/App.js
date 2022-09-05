import { useState } from "react";
import "./styles.css";

export default function App() {
  var emojiColor = "blue";
  var emojiDictionary = {
    "😀": "Grinning Face",
    "😉": "Winking Face",
    "🤩": "Star-Struck",
    "😘": "Face Blowing a Kiss",
    "😗": "Kissing Face",
    "🤔": "Thinking Face",
    "❤️": "Red Heart",
    "😭": "Loudly Crying Face",
    "🥺": " Pleading Face",
    "👀": " Eyes",
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
      <footer>
        <div className="footer__title">
          made with{" "}
          <span className="emoji" role="img" aria-label="love emoji">
            ❤️
          </span>{" "}
          by Parth Kathuria
        </div>

        <span class="social__media">
          <a
            target="_blank"
            href="https://www.instagram.com/parth.ts/"
            className="social"
            rel="noreferrer"
          >
            Insta
          </a>
          <a
            target="_blank"
            href="https://github.com/ParthDevTs?tab=repositories"
            className="social"
            rel="noreferrer"
          >
            Github
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/parth-kathuria-4b0856177/"
            className="social"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </span>
      </footer>
    </div>
  );
}
