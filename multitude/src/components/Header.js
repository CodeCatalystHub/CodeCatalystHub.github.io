import React from "react";

function Header() {
  return (
    <header style={styles.header}>
      <h1>Text Utility App</h1>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: "#007bff",
    color: "white",
    padding: "15px",
    textAlign: "center",
    fontSize: "24px",
  },
};

export default Header;
