import React, { useState } from 'react';

import './Game.css'

import MoveChoiceButton from '../MoveChoiceButton/MoveChoiceButton';
import Outcome from '../Outcome/Outcome';   
import CharacterChoice from '../CharacterChoice/CharacterChoice';
import Scoreboard from '../ScoreBoard/ScoreBoard';

import playerHead from '../../assets/playerHead.png';
import botHead from '../../assets/botHead.png';

const Game = ({ onWin, onLoss, onDraw }) => {
    const [playerMove, setPlayerMove] = useState(null);
    const [botMove, setBotMove] = useState(null);
    const [outcome, setOutcome] = useState('');


    const moves = ['R', 'P', 'S']; // R = Rock, P = Paper, S = Scissors

    const handlePlayerMove = (choice) => {
        setPlayerMove(choice);
        const botChoice = getBotMove();
        setBotMove(botChoice);
        const gameOutcome = determineWinner(choice, botChoice);
        setOutcome(gameOutcome);

        // Update the scores
        if (gameOutcome === 'W') {
            onWin();
        } else if (gameOutcome === 'L') {
            onLoss();
        } else {
            onDraw();
        }
    };

    const getBotMove = () => {
        return moves[Math.floor(Math.random() * moves.length)];
    };

    const determineWinner = (playerMove, botMove) => {
        if (playerMove === botMove) {
            return 'D';
        } else if (
            (playerMove === 'R' && botMove === 'S') ||
            (playerMove === 'P' && botMove === 'R') ||
            (playerMove === 'S' && botMove === 'P')
        ) {
            return 'W';
        } else {
            return 'L';
        }
    };

    return (
        <div className="game-wrapper">
            <div className="game-container">
                <h1>CHOOSE YOUR MOVE</h1>
                <div className="rps-buttons">
                    {moves.map((choice) => (
                        <MoveChoiceButton key={choice} name={choice} onClick={() => handlePlayerMove(choice)} />
                    ))}
                </div>
                <div className="choices">
                    <CharacterChoice characterName="YOU" choice={playerMove} characterImg={playerHead} />
                    <CharacterChoice characterName="BOT" choice={botMove} characterImg={botHead} />
                </div>
            </div>
        </div>
    );
}

export default Game;
