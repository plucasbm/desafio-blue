import {useState, useEffect} from 'react';
import '../styles/Content.css';
import { getConselho } from '../services/conselho_service';

const Content = () => {
    const [conselho, setConselho] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const getConselhoApi = async () => {
        setLoading(true);

        try {
            const novoConselho = await getConselho();
            setConselho(novoConselho);
        } catch {
            setConselho("Não foi possível trazer um novo conselho. Tente novamente.");
        }

        setLoading(false);
    }

    useEffect(() => {
        getConselhoApi();
    }, []);

    return (
        <div className="content-display">
            <div className="content-card">
                {loading ? 
                    (<p className="loading">Carregando...</p>)
                : (<p className="content-text">{`"${conselho}"`}</p>)
            }
            <button onClick={getConselhoApi} className="content-button">Novo Conselho</button>
            </div>
        </div>
    );
}

export default Content;