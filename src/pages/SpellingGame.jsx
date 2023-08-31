import React, { useState, useEffect } from 'react';

function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}


const wordsAndAnswers = [
    { word: 'CAT', answer: 'C', image: '', sound: '' },
    { word: 'BED', answer: 'D', image: '', sound: '' },
    { word: 'BIRD', answer: 'R', image: '', sound: '' },
    { word: 'SNOW', answer: 'N', image: '', sound: '' },
    { word: 'DOG', answer: 'G', image: '', sound: '' },
    { word: 'SUN', answer: 'U', image: '', sound: '' },
    { word: 'TOY', answer: 'O', image: '', sound: '' },
    { word: 'HAT', answer: 'H', image: '', sound: '' },
    { word: 'MOON', answer: 'M', image: '', sound: '' },
    { word: 'FISH', answer: 'S', image: '', sound: '' },
    { word: 'TREE', answer: 'R', image: '', sound: '' },
    { word: 'BALL', answer: 'A', image: '', sound: '' },
    { word: 'MOP', answer: 'P', image: '', sound: '' },
    { word: 'PIG', answer: 'I', image: '', sound: '' },
    { word: 'BOOK', answer: 'B', image: '', sound: '' },
    { word: 'STAR', answer: 'S', image: '', sound: '' },
    { word: 'COW', answer: 'W', image: '', sound: '' },
    { word: 'BOAT', answer: 'O', image: '', sound: '' },
];
const wordsAndAnswersWithWordD = wordsAndAnswers.map(entry => ({
    ...entry,
    wordD: entry.word.replace(new RegExp(`[${entry.answer}]`, 'gi'), '_')
}));


const SpellingGame = () => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [score, setScore] = useState(0);

    const currentWord = wordsAndAnswersWithWordD[currentWordIndex];

    const checkAnswer = () => {
        if (selectedAnswer === currentWord.answer) {
            setScore(score + 10);
        }
        else{
            setScore(score - 5);
        }

        setSelectedAnswer('');
        setCurrentWordIndex(currentWordIndex + 1);
    };

    useEffect(() => {
        if (currentWordIndex >= wordsAndAnswers.length) {
            // Game over logic, e.g. show score
        }
    }, [currentWordIndex]);

    return (
        <div>
            <h1>Spelling Game</h1>
            <p>Score: {score}</p>
            <div>
               Word:<h3>{currentWord.wordD}</h3>
                <div>
                    <label>
                        Select the missing letter:
                        <select
                            value={selectedAnswer}
                            onChange={(e) => setSelectedAnswer(e.target.value)}
                        >
                            <option value="">Select</option>
                            {shuffleArray(currentWord.word.split('')).map((letter, index) => (
                                <option key={index} value={letter}>
                                    {letter}
                                </option>
                            ))}

                        </select>
                    </label>
                </div>
                <div>
                <button style={{marginTop:"5%"}} onClick={checkAnswer}>Check</button>
                </div>
            </div>
        </div>
    );
};

export default SpellingGame;
