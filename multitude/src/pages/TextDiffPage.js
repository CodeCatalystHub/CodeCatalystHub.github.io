import React, { useState } from "react";

function TextDiffPage() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [difference, setDifference] = useState("");

  const findDifference = () => {
    let diff = "";
    const maxLength = Math.max(text1.length, text2.length);
    for (let i = 0; i < maxLength; i++) {
      if (text1[i] !== text2[i]) {
        diff += text2[i] || "";
      }
    }
    setDifference(diff || "No difference found!");
  };

  return (
    <div style={styles.container}>
      <h2>Text Difference Checker</h2>
      <textarea
        placeholder="Enter first text"
        value={text1}
        onChange={(e) => setText1(e.target.value)}
        style={styles.textarea}
      ></textarea>
      <textarea
        placeholder="Enter second text"
        value={text2}
        onChange={(e) => setText2(e.target.value)}
        style={styles.textarea}
      ></textarea>
      <button onClick={findDifference} style={styles.button}>Find Difference</button>
      <p>Difference: <strong>{difference}</strong></p>
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
  button: {
    padding: "10px 15px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default TextDiffPage;
