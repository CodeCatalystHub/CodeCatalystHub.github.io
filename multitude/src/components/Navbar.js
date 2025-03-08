import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}><Link to="/" style={styles.navLink}>Home</Link></li>
        <li style={styles.navItem}><Link to="/text-diff" style={styles.navLink}>Text Difference</Link></li>
        <li style={styles.navItem}><Link to="/text-case" style={styles.navLink}>Text Case Converter</Link></li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: "#333",
    padding: "10px",
  },
  navList: {
    listStyle: "none",
    display: "flex",
    justifyContent: "center",
    padding: "0",
    margin: "0",
  },
  navItem: {
    margin: "0 15px",
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
  },
};

export default Navbar;
