import React from 'react';
import './Outcome.css';

const Outcome = ({ outcome, playerMove, botMove }) => {
    const outcomes ={'W': 'YOU WIN !!!', 'L': 'YOU LOSE :(', 'D': 'DRAW...'};

    return (
        <div className={`outcome ${outcome.toLowerCase()}`}>
            <h2>{outcomes[outcome]}</h2>
        </div>
    );
};

export default Outcome;
