import './cardgame.css'


function Card(props) {
   
    function handleChoice() {
        if (!props.disabled){
            if(props.turn>=3){
                props.checkwin()
                alert("恭喜獲得5點")
            } else {
                props.handleChoice(props.card);
                // console.log(props);
            }
        
            }
    }


    return (
        <div className="game-card">
            <div className={props.flipped ? "flipped" : ""}>
                <img  className={`front ${props.card.matched ? "matched" : ''}`} src={props.card.src} alt="card front" />
                <img className='back' src="/game-images/card_back.png" alt="card back" onClick={() => handleChoice()} />
            </div>
        </div>
    );
}

export default Card;
