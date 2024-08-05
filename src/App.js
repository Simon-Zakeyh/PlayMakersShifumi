import React, { useState } from 'react';
import Game from './components/Game/Game';
import Scoreboard from './components/ScoreBoard/ScoreBoard';
import './App.css';

const App = () => {
  const [playerScore, setPlayerScore] = useState(0);
  const [botScore, setBotScore] = useState(0);
  const [draws, setDraws] = useState(0);

  const handleWin = () => setPlayerScore(playerScore + 1);
  const handleLoss = () => setBotScore(botScore + 1);
  const handleDraw = () => setDraws(draws + 1);

  return (
    <div className="app-container">
      <Game onWin={handleWin} onLoss={handleLoss} onDraw={handleDraw} />
      <Scoreboard playerScore={playerScore} botScore={botScore} draws={draws} />
    </div>
  );
};

export default App;
