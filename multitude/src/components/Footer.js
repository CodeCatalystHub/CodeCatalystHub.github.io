import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} Text Utility App. All Rights Reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#f1f1f1",
    color: "#333",
    padding: "10px",
    textAlign: "center",
    position: "fixed",
    bottom: "0",
    width: "100%",
  },
};

export default Footer;
