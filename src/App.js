import React from "react";

import Header from "./components/Header";
import MemeContainer from "./components/MemeContainer";

import "./App.css";

class App extends React.Component {
  state = {
    topTxt: "",
    bottomTxt: "",
    randomImg: "https://miro.medium.com/max/1400/1*rIkmavUeqyRySwlQdA9kKg.jpeg",
    allImgs: [],
  };

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          allImgs: data,
        })
      );
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    console.log("The hell!");

    const randImg = Math.floor(Math.random() * this.state.allImgs.length);

    console.log(randImg.url);

    this.setState({
      randomImg: randImg.url,
    });

    e.preventDefault();
  };

  render() {
    return (
      <div className="container">
        <Header
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <MemeContainer img={this.state.randomImg} />
      </div>
    );
  }
}

export default App;
