import { useEffect, useState } from 'react';
import './Game.css';
import Card from './Card.js'

const initialCards = [
  { "src": "/game-images/bulbasaur.png", matched: false },
  { "src": "/game-images/butterfree.png", matched: false },
  { "src": "/game-images/charmander.png", matched: false },
  { "src": "/game-images/pidgeotto.png", matched: false },
  { "src": "/game-images/pikachu.png", matched: false },
  { "src": "/game-images/squirtle.png", matched: false },
];

function Game() {
  const [cards, setCards] = useState([]);
  const [turn, setTurn] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(true);
  const [startFlip, setStartFlip] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setStartFlip(false)
    }, 500);
    shuffleCards();
  }, []);

  function shuffleCards() {
    //setCards(null)
    const shuffledCards = [...initialCards, ...initialCards]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffledCards);
    setTurn(0);
    setDisabled(false)
    setStartFlip(true)
    setTimeout(() => {
      setStartFlip(false)
    }, 1000);
  }


  function handleChoice(card) {
    choiceOne ? (
      choiceOne.id !== card.id &&
      setChoiceTwo(card))
      : setChoiceOne(card)
  }

  function resetTurn() {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurn(prevTurn => prevTurn + 1)
    setDisabled(false)
  }

  function checkwin() {
    if (turn >= 3) {
      setTurn(0)  
      shuffleCards()
    }
  }

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true }
            } else {
              return card
            }
          })
        })
        resetTurn();
      } else {
        setTimeout(() => {
          resetTurn();
        }, 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  return (
    <div className="game-container">
      <p className='gametext'>Turns: {turn}</p>
      <div className="game-grid">
        {cards.map(card => (
          <Card
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched || startFlip}
            disabled={disabled}
            matched={card.matched}
            checkwin={checkwin}
            turn={turn}
          />
        ))}
      </div>
      <button onClick={shuffleCards}>New Game</button>
    </div>
  );
}

export default Game;
