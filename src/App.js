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
        score: 0,
        counter: 0,
        charactersClicked: []
    };

    handleClick = () => {
        this.setState(({ count }) => ({
            count: count + 1
        }));
    };

    render() {
        return (
            <div>
                <Navbar score={this.state.score} />
                <Wrapper>
                    <Header>Futurama Clicky Game</Header>
                    {this.state.characters.map(character => (
                        <Card
                            charactersClicked={this.imageClick}
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

