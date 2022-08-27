
function Score(props) {
    
    return (
        <div id='score'>
            <h3>Current Score: {props.currentScore}</h3>
            <h3>High Score: {props.highScore}</h3>
        </div>
    );
}
  
export default Score;