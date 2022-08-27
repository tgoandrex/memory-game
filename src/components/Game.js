import { useState } from 'react';
import Card from './Card';
import Score from './Score';
import { allPokemon } from '../pokemon';

function Game() {
    const [currentPokemon, setCurrentPokemon] = useState(allPokemon.slice(0,3));
    const [chosenPokemon, setChosenPokemon] = useState([]);
    const [currentScore, setCurrentScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    const shuffle = currentPokemon.sort(() => Math.random() - 0.5);
    
    return (
        <div>
            <Score currentScore={currentScore} highScore={highScore} />
            <div id='flex'>
                {shuffle.map((image, i) => {
                    return <Card 
                    key={i} 
                    image={image}
                    allPokemon={allPokemon}
                    currentPokemon={currentPokemon} setCurrentPokemon={setCurrentPokemon}
                    chosenPokemon={chosenPokemon} setChosenPokemon={setChosenPokemon}
                    currentScore={currentScore} setCurrentScore={setCurrentScore}
                    highScore={highScore} setHighScore={setHighScore}
                    />
                })}
            </div>
        </div>
    );
}
  
export default Game;