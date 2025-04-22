const BASE_URL = 'http://localhost:3000';

const apiService = {
    async getRandomJoke() {
        try {
            const response = await fetch(`${BASE_URL}/api/jokes/random`); // Ajout de /api/
            if (!response.ok) {
                throw new Error('Erreur lors de la récupération de la blague');
            }
            return await response.json();
        } catch (error) {
            console.error('Erreur:', error);
            throw error;
        }
    }
};

export default apiService;