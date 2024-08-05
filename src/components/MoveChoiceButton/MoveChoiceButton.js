import React from 'react';
import './MoveChoiceButton.css'; // Importing the CSS file for the component
import rockImg from '../../assets/rock.png';
import paperImg from '../../assets/paper.png';
import scissorsImg from '../../assets/scissors.png';

const MoveChoiceButton = ({ name, onClick }) => {
    let imgSrc;
    switch (name) {
        case 'R':
            imgSrc = rockImg;
            break;
        case 'P':
            imgSrc = paperImg;
            break;
        case 'S':
            imgSrc = scissorsImg;
            break;
        default:
            imgSrc = '';
    }

    return (
        <button className="custom-button" onClick={onClick}>
            <img src={imgSrc} alt={name} className="choice-image" />
        </button>
    );
};

export default MoveChoiceButton;
