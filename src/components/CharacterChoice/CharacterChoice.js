import React from 'react';
import './CharacterChoice.css';
import rockImg from '../../assets/rock.png';
import paperImg from '../../assets/paper.png';
import scissorsImg from '../../assets/scissors.png';

const CharacterChoice = ({ characterName, choice, characterImg }) => {
    let choiceImg;
    switch (choice) {
        case 'R':
            choiceImg = rockImg;
            break;
        case 'P':
            choiceImg = paperImg;
            break;
        case 'S':
            choiceImg = scissorsImg;
            break;
        default:
            choiceImg = '';
    }

    const backgroundColor = characterName === 'YOU' ? '#31992f' : '#ad0009';


    return (
        <div className="character-choice" style={{ backgroundColor }}>
            <div className="character-info">
                <img src={characterImg} alt={`${characterName} head`} className="character-head" />
                <h3>{characterName}</h3>
            </div>
            <div className="choice-display" style={{ backgroundColor }}>
                {choiceImg ? <img src={choiceImg} alt={`Choice: ${choice}`} className="choice-image2" /> : <p></p>}
            </div>
        </div>
    );
};

export default CharacterChoice;
