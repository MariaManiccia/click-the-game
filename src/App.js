/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */

import "./App.css";
import React, { Component } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Navbar from "./components/Nav/Navbar";
import tiles from "./components/game.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isGuessCorrect: true,
      tiles: tiles,
      score: 0,
      maxScore: 12,
      topScore: 0,
      message: "Click any image to begin!"
    };
  }

  removeAnimation = () => {
    let element = document.getElementById("card");
    // If incorrect
    if (!this.state.isGuessCorrect) {
      element.classList.remove("w3-grayscale");
    }
  };

  addAnimation = isCorrect => {
    let element = document.getElementById("card");
    // If incorrect
    if (!isCorrect) {
      element.classList.add("w3-grayscale");
    }
  };

  // Toggle
  toggleAnimation = isCorrect => {
    // If correct
    if (isCorrect) {
      // Add animation
      this.addAnimation(true);
      setTimeout(this.removeAnimation, 500);
    }
    // If incorrect
    if (!isCorrect) {
      // Add animation
      this.addAnimation(false);
      setTimeout(this.removeAnimation, 500);
    }
  };


  // Main click handler
  handleSaveClick = id => {
    const tiles = this.state.tiles;
    // Match the one clicked
    const tileClicked = tiles.filter(tile => tile.id === id);

    // If the tile isn't clicked...
    if (!tileClicked[0].clicked) {
      tileClicked[0].clicked = true;
      // If correct
      this.handleCorrectClick();
      // Animation
      this.toggleAnimation(true);

      // Switch the order
      this.randomizePhotos(tiles);

      this.setState({ tiles });
    } else {
      this.handleIncorrectClick();
      this.toggleAnimation(false);
    }
  };

  // Function to switch up the pictures
  randomizePhotos = photos => {
    photos.sort((a, b) => {
      return 0.5 - Math.random();
    });
  };

  // Handler for correct guesses/clicks
  handleCorrectClick = () => {
    // Check the state
    this.setState({ isGuessCorrect: true });
    if (this.state.score + 1 > this.state.topScore) {
      this.setState({ topScore: this.state.topScore + 1 });
    }
    if (this.state.score + 1 >= this.state.maxScore) {
      this.setState({
        score: this.state.score + 1,
        message: "CONGRATS! You won!!",
        messageClass: "correct"
      });
    } else {
      this.setState({
        score: this.state.score + 1,
        message: "Correct!",
        messageClass: "correct"
      });
    }
  };

  // Handler for incorrect guesses/clicks
  handleIncorrectClick = () => {
    this.setState({
      message: "Sorry! You lost. Want to play again?",
      isGuessCorrect: false
    });
    // Reset
    this.resetGame();
  };

  // Function to reset the game
  resetGame = id => {
    const tiles = this.state.tiles;
    for (let i = 0; i < tiles.length; i++) {
      tiles[i].clicked = false;
    }
    this.setState({ score: 0 });
  };

  // Render the App 
  render() {
    const { message, score, tiles, topScore } = this.state;
    return (
      <div className="fluid-container lodge h-100vh">
        <Navbar
          className="row"
          score={score}
          topScore={topScore}
          message={message}
        />
        <Header className="bg-header row" />

        <div className="d-flex justify-content-center main-content mx-auto padding-main flex-wrap row">
          {tiles.map(({ id, image, clicked }) => (
            <Card
              key={id}
              id={id}
              image={image}
              clicked={clicked}
              clickHandler={this.handleSaveClick}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
