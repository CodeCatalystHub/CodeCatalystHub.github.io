import React from "react";

function Home() {
  return (
    <div style={styles.container}>
      <h2>Welcome to Text Utility App</h2>
      <p>Choose a tool to get started:</p>
      <ul>
        <li><a href="/text-diff">Text Difference Checker</a></li>
        <li><a href="/text-case">Text Case Converter</a></li>
      </ul>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
  },
};

export default Home;
