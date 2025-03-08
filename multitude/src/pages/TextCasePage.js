import React, { useState } from "react";

function TextCasePage() {
  const [text, setText] = useState("");
  const [convertedText, setConvertedText] = useState("");

  const convertText = (type) => {
    let result = "";
    switch (type) {
      case "uppercase":
        result = text.toUpperCase();
        break;
      case "lowercase":
        result = text.toLowerCase();
        break;
      case "title_case":
        result = text.replace(/\w\S*/g, (word) =>
          word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        );
        break;
      case "sentence_case":
        result = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
        break;
      default:
        result = text;
    }
    setConvertedText(result);
  };

  return (
    <div style={styles.container}>
      <h2>Text Case Converter</h2>
      <textarea
        placeholder="Enter text here"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={styles.textarea}
      ></textarea>
      <div style={styles.buttonContainer}>
        <button onClick={() => convertText("uppercase")} style={styles.button}>UPPERCASE</button>
        <button onClick={() => convertText("lowercase")} style={styles.button}>lowercase</button>
        <button onClick={() => convertText("title_case")} style={styles.button}>Title Case</button>
        <button onClick={() => convertText("sentence_case")} style={styles.button}>Sentence case</button>
      </div>
      <textarea
        placeholder="Converted text will appear here"
        value={convertedText}
        readOnly
        style={styles.textarea}
      ></textarea>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
  textarea: {
    width: "90%",
    height: "100px",
    marginBottom: "10px",
    padding: "10px",
    fontSize: "16px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "10px",
    marginBottom: "10px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default TextCasePage;
