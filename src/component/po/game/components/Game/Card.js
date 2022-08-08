import './cardgame.css';

import '../../../../../../node_modules/sweetalert2/dist/sweetalert2';

function Card(props) {
    const { eggpoints, setEggPoints } = props;
    const Swal = require('sweetalert2');
    Swal.fire({
        title: '遊戲說明',
        text: '10秒內翻牌次數類積點數紅利',
        icon: 'info',
        confirmButtonText: '遊戲開始',
    });

    function handleChoice() {
        if (!props.disabled) {
            if (props.turn >= 10) {
                alert('哭哭');
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
