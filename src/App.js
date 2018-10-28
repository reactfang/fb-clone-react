import React, { Component } from "react";
import Header from "./Header.js";
import Footer from "./Footer";
import "./Footer.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
