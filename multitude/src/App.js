import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import TextDiffPage from "./pages/TextDiffPage";
import TextCasePage from "./pages/TextCasePage";

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <div style={styles.container}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/text-diff" element={<TextDiffPage />} />
          <Route path="/text-case" element={<TextCasePage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

const styles = {
  container: {
    minHeight: "80vh",
    padding: "20px",
    textAlign: "center",
  },
};

export default App;
