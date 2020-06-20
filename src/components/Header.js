import React from "react";

import "./Header.css";

const Header = (props) => (
  <header>
    <h1>Meme Generator</h1>
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        name="topTxt"
        placeholder="Top text..."
        onChange={props.handleChange}
      />
      <input
        type="text"
        name="bottomTxt"
        placeholder="Bottom text..."
        onChange={props.handleChange}
      />

      <button>Submit</button>
    </form>
  </header>
);

export default Header;
