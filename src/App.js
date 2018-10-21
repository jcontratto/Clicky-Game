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
    //Click function 
    handleClick = (id) => {
        this.setState(({ charactersClicked, counter, score, characters }) => {
            if (charactersClicked.indexOf(id) === -1) {
                //Clicking on image adding to the array
                charactersClicked.push(id)
                counter += 1
                console.log("value found");
            }
            //Clicked an image that has already been clicked and resetting counter back to 0
            else {
                charactersClicked = [];
                counter = 0
                console.log("error");
                //Alert when you click image twice and lose
                alert("Your're memory is as good as Fry's!")
            }
            //Counter goes up by 1 everytime a different image is clicked and score goes up by 1 when all 10 are clicked and win
            if (charactersClicked.length === characters.length) {
                score = score + 1
                counter = 0
                charactersClicked = [];
                //Alert when you win game win all 10 images are clicked
                alert("Bite my shiny metal...You're smarter than the Professor!");
            }
            //Shuffles everytime a click happens
            characters = this.shuffle(characters)
            return {
                charactersClicked: charactersClicked,
                counter: counter,
                score: score,
                characters: characters
            }
        });
    };
    //Shuffling characters 
    shuffle = (characters) => {
        //shuffling characters in the array
        let shuffleCharacters = [];
        let copyCharacter = JSON.parse(JSON.stringify(characters))
        while (shuffleCharacters.length < characters.length) {
            let index = Math.floor(Math.random() * copyCharacter.length)
            shuffleCharacters.push(copyCharacter[index])
            copyCharacter.splice(index, 1)
        };

        return shuffleCharacters;
    }
   
    render() {
        return (
            <div>
                <Navbar score={this.state.score} counter={this.state.counter} />
                <Wrapper>
                    <Header>Don't click the same image twice or game over for you!</Header>
                    {this.state.characters.map(character => (
                        <Card
                            charactersClicked={this.handleClick}
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

