import './cardgame.css';

function Card(props) {
    const { eggpoints, setEggPoints } = props;

    function handleChoice() {
        if (!props.disabled) {
            if (props.turn >= 10) {
                alert('再接再厲');
                props.checkwin();
            } else {
                props.handleChoice(props.card);
                // console.log(props);
            }
        }
    }

    return (
        <div className="game-card">
            <div className={props.flipped ? 'flipped' : ''}>
                <img
                    className={`front ${props.card.matched ? 'matched' : ''}`}
                    src={props.card.src}
                    alt="card front"
                />
                <img
                    className="back"
                    src="/game-images/card_back.png"
                    alt="card back"
                    onClick={() => handleChoice()}
                />
            </div>
        </div>
    );
}

export default Card;
