
function Score(props) {
    
    return (
        <div id='score'>
            <div id='score-left'>
                Current Score: {props.currentScore}
            </div>
            <div id='score-right'>
                High Score: {props.highScore}
            </div>
            <div id='score-bottom'>
                Level {props.level} ({props.chosenPokemon.length} Pokemon chosen so far)
            </div>
        </div>
    );
}
  
export default Score;