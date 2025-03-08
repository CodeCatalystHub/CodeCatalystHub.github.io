import React from "react";

function HomePage() {
  return (
    <div style={styles.container}>
      <h2>Welcome to Text Utility App</h2>
      <p>Choose a tool to get started:</p>
      <ul style={styles.list}>
        <li><a href="/text-diff" style={styles.link}>Text Difference Checker</a></li>
        <li><a href="/text-case" style={styles.link}>Text Case Converter</a></li>
      </ul>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
  },
  list: {
    listStyle: "none",
    padding: "0",
  },
  link: {
    textDecoration: "none",
    fontSize: "18px",
    color: "#007bff",
  },
};

export default HomePage;
