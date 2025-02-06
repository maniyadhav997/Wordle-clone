import React, { useState, useEffect } from 'react';
import './App.css';

 import WORDS from './words';

const SMALL_WORDS =WORDS

function computeFeedback(guess, target) {
  let feedback = Array(5)
    .fill(null)
    .map((_, idx) => ({ letter: guess[idx], color: 'gray' }));
  
  const targetArr = target.split('');
  const guessArr = guess.split('');
  const used = Array(5).fill(false);

  // Mark green letters.
  for (let i = 0; i < 5; i++) {
    if (guessArr[i] === targetArr[i]) {
      feedback[i].color = 'green';
      used[i] = true;
    }
  }

  // Mark yellow letters.
  for (let i = 0; i < 5; i++) {
    if (feedback[i].color === 'green') continue;
    for (let j = 0; j < 5; j++) {
      if (!used[j] && guessArr[i] === targetArr[j]) {
        feedback[i].color = 'yellow';
        used[j] = true;
        break;
      }
    }
  }

  return feedback;
}

function App() {
  const WORDS = SMALL_WORDS;
  const [target, setTarget] = useState('');
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [message, setMessage] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    startNewGame();
  }, []);

  // Update the document class based on dark mode state.
  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : '';
  }, [darkMode]);

  const startNewGame = () => {
    const newTarget = WORDS[Math.floor(Math.random() * WORDS.length)];
    setTarget(newTarget);
    setGuesses([]);
    setCurrentGuess('');
    setMessage('');
    setGameOver(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (gameOver) return;

    if (currentGuess.length !== 5) {
      setMessage('Word must be 5 letters.');
      return;
    }

    if (!WORDS.includes(currentGuess.toUpperCase())) {
      setMessage('Invalid word.');
      return;
    }

    const guessUpper = currentGuess.toUpperCase();
    const feedback = computeFeedback(guessUpper, target);
    const newGuess = { word: guessUpper, feedback };
    const newGuesses = [...guesses, newGuess];
    setGuesses(newGuesses);
    setCurrentGuess('');
    setMessage('');

    if (guessUpper === target) {
      setMessage('Congratulations! You guessed the word!');
      setGameOver(true);
    } else if (newGuesses.length >= 6) {
      setMessage(`Game over! The word was ${target}.`);
      setGameOver(true);
    }
  };

  return (
    <div className={`App ${darkMode ? 'app-dark' : ''}`}>
      <h1>Wordle Clone</h1>

      {/* Dark Mode Toggle */}
      <button className="toggle-dark" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
      
      <div className="board">
        {Array.from({ length: 6 }).map((_, rowIndex) => {
          const guessObj = guesses[rowIndex];
          const cells = [];
          if (guessObj) {
            for (let i = 0; i < 5; i++) {
              const letter = guessObj.word[i];
              const color = guessObj.feedback[i].color;
              cells.push(
                <div key={i} className={`cell ${color}`}>
                  {letter}
                </div>
              );
            }
          } else if (rowIndex === guesses.length) {
            for (let i = 0; i < 5; i++) {
              const letter = currentGuess[i] ? currentGuess[i].toUpperCase() : '';
              cells.push(
                <div key={i} className="cell">
                  {letter}
                </div>
              );
            }
          } else {
            for (let i = 0; i < 5; i++) {
              cells.push(<div key={i} className="cell"></div>);
            }
          }
          return (
            <div key={rowIndex} className="row">
              {cells}
            </div>
          );
        })}
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          maxLength="5"
          value={currentGuess}
          onChange={(e) => setCurrentGuess(e.target.value)}
          disabled={gameOver}
          autoFocus
        />
        <button type="submit" disabled={gameOver}>
          Submit
        </button>
      </form>

      {message && <p className="message">{message}</p>}
      <button onClick={startNewGame}>New Game</button>
    </div>
  );
}

export default App;
