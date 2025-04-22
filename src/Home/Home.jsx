import React, { useState } from 'react';
import './Home.css';
import apiService from '../controller/apiService.jsx';

const Home = () => {
    const [joke, setJoke] = useState(null);
    const [showAnswer, setShowAnswer] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const getRandomJoke = async () => {
        try {
            setIsLoading(true);
            // Ici, on utilise getRandomJoke au lieu de getData
            const data = await apiService.getRandomJoke();
            setJoke(data);
            setShowAnswer(false);
        } catch (error) {
            console.error('Erreur lors de la récupération de la blague:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const toggleDisplay = () => {
        setShowAnswer(!showAnswer);
    };

    return (
        <div>
            <h1>Bienvenue sur notre site Carambar&co</h1>
            <p>Sur ce site vous allez pouvoir générer des blagues aléatoires</p>

            <button
                onClick={getRandomJoke}
                disabled={isLoading}
                className="bouton-nouvelle-blague"
            >
                {isLoading ? 'Chargement...' : 'Nouvelle blague'}
            </button>

            {joke && (
                <div className="blague-container">
                    <div className="blague-content">
                        {showAnswer ? (
                            <p className="reponse">{joke.response}</p>
                        ) : (
                            <p className="question">{joke.question}</p>
                        )}
                    </div>

                    <button
                        onClick={toggleDisplay}
                        className="bouton-toggle"
                    >
                        {showAnswer ? 'Voir la question' : 'Voir la réponse'}
                    </button>
                </div>
            )}
        </div>
    );
};

export default Home;