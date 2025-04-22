const BASE_URL = import.meta.env.PROD
    ? 'https://backend-simplon-carembar.onrender.com' // URL de votre API en production
    : 'http://localhost:3000'; // URL de développement


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