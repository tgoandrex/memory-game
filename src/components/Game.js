import { useState } from 'react';
import Card from './Card';
import Score from './Score';

import venosaur from '../images/Venosaur.png';
import charizard from '../images/Charizard.png';
import blastoise from '../images/Blastoise.png';
import meganium from '../images/Meganium.png';
import typhlosion from '../images/Typhlosion.png';
import feraligatr from '../images/Feraligatr.png';
import sceptile from '../images/Sceptile.png';
import blaziken from '../images/Blaziken.png';
import swampert from '../images/Swampert.png';

function Game() {
    const allPokemon = [venosaur, charizard, blastoise, meganium, typhlosion, feraligatr, sceptile, blaziken, swampert];
    const [currentPokemon, setCurrentPokemon] = useState(allPokemon.slice(0,3));
    const [chosenPokemon, setChosenPokemon] = useState([]);
    const [currentScore, setCurrentScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [level, setLevel] = useState(1);

    const shuffle = currentPokemon.sort(() => Math.random() - 0.5);
    
    return (
        <div>
            <Score currentScore={currentScore} highScore={highScore} chosenPokemon={chosenPokemon} level={level} />
            <div id='pokemon-cards'>
                {shuffle.map((image, i) => {
                    return (
                        <Card
                            key={i}
                            image={image}
                            allPokemon={allPokemon}
                            currentPokemon={currentPokemon} setCurrentPokemon={setCurrentPokemon}
                            chosenPokemon={chosenPokemon} setChosenPokemon={setChosenPokemon}
                            currentScore={currentScore} setCurrentScore={setCurrentScore}
                            highScore={highScore} setHighScore={setHighScore}
                            level={level} setLevel={setLevel}
                        />
                    )
                })}
            </div>
        </div>
    );
}
  
export default Game;