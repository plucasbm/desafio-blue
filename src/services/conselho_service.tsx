import axios from 'axios';

export interface ConselhoResponse {
    slip: {
        advice: string
    };
}

export const getConselho = async (): Promise<string> => {
    try {
        const response = await axios.get<ConselhoResponse>('https://api.adviceslip.com/advice');

        return response.data.slip.advice;
    } catch (error) {
        console.log(error)
        throw new Error('Erro ao buscar conselho');
    }
};