import React from 'react';
import './ScoreBoard.css';

const Scoreboard = ({ playerScore, botScore, draws }) => {
    return (
        <div className="scoreboard">
            <table className="score-table">
                <tbody>
                    <tr>
                        <td>YOU</td>
                        <td className="spacer-column"></td> {/* Spacer column */}
                        <td>{playerScore}</td>
                    </tr>
                    <tr>
                        <td>BOT</td>
                        <td className="spacer-column"></td> {/* Spacer column */}
                        <td>{botScore}</td>
                    </tr>
                    <tr>
                        <td>DRAWS</td>
                        <td className="spacer-column"></td> {/* Spacer column */}
                        <td>{draws}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Scoreboard;
