import React, { Component } from 'react';
// import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";
import './App.css';

class App extends Component {

    state = {
        characters
        // score = 0
    };

    render() {
        return (
            <Wrapper>
                <Header>Futurama Clicky Game</Header>
                {this.state.characters.map(character => (
                    <Card
                        id={character.id}
                        key={character.id}
                        name={character.name}
                        image={character.image}
                    />
                ))}
            </Wrapper>
        );
    }
}

export default App;

