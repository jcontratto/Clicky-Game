import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";

import './App.css';

class App extends Component {

    state = {
        characters,
        charactersClicked: [],
        score: 0,
    };

    // imageClick = event => {
    //     const charcterImage = event.target.alt;
    //     const clickedImages = this.state.charactersClicked.indexOf(characterImage) > -1;
    // }

    // if(clickedImages) {
    //     this.setState({
    //         characters: this.state.characters
    //     })
    // }

    handleCounter = () => {
        const score = this.state.
            this.setState({ count: this.state.score + 1 });
    };

    render() {
        return (
            <div>
                <Navbar>
                    score={this.state.score}
                </Navbar>
                <Wrapper>
                    <Header>Futurama Clicky Game</Header>
                    {this.state.characters.map(character => (
                        <Card
                            imageClick={this.imageClick}
                            id={character.id}
                            key={character.id}
                            name={character.name}
                            image={character.image}
                        />
                    ))}
                </Wrapper>
            </div>
        );
    }
}

export default App;

