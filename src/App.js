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
      .then((res) => {
        const { memes } = res.data;
        console.log(memes);

        this.setState({
          allImgs: memes,
        });
      });
    console.log(this.state.allImgs);
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const randNum = Math.floor(Math.random() * this.state.allImgs.length);
    const randMemeImg = this.state.allImgs[randNum].url;

    //console.log(randImg.url);

    this.setState({
      randomImg: randMemeImg,
    });
  };

  render() {
    return (
      <div className="container">
        <Header
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <MemeContainer
          img={this.state.randomImg}
          top={this.state.topTxt}
          bottom={this.state.bottomTxt}
        />
      </div>
    );
  }
}

export default App;
