function Card(props) {
    const chooseCard = (pokemon) => {
        if(!props.chosenPokemon.includes(pokemon)) {
            if(props.chosenPokemon.length + 1 === props.currentPokemon.length) {
                props.setCurrentPokemon(props.allPokemon.slice(0, props.currentPokemon.length + 3));
                props.setChosenPokemon([]);
                props.setLevel(props.level + 1);
            } else {
                props.setChosenPokemon(current => [...current, pokemon]);
            }
            props.setCurrentScore(props.currentScore + 1);
        } else {
            if(props.highScore < props.currentScore) {
                props.setHighScore(props.currentScore);
            }
            props.setLevel(1);
            props.setCurrentScore(0);
            props.setCurrentPokemon(props.allPokemon.slice(0,3));
            props.setChosenPokemon([]);
        }
    }
    
    return (
        <div className='fade-in' onClick={() => chooseCard(props.image)}>
            <img alt='pokemon' src={props.image} />
        </div>
    );
}
  
export default Card;