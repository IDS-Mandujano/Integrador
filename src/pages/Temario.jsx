import { useEffect, useState } from 'react';
import { fetchData } from '../utils/fetch';

function Temario() {
    const token = localStorage.getItem('authToken');
    const [temarios, setTemarios] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTemarios = async () => {
            try {
                const response = await fetchData(`${import.meta.env.VITE_LOCAL_API}/temario`, 'GET', token);
                if (response && Array.isArray(response.data)) {
                    setTemarios(response.data);
                    console.log('Fetched temarios:', response.data);
                } else {
                    console.error('Unexpected response format:', response);
                    setError('Unexpected response format');
                    setTemarios([]); // set an empty array if response format is unexpected
                }
            } catch (error) {
                console.error('Error fetching temarios:', error);
                setError('Error fetching temarios');
                setTemarios([]); // set an empty array in case of error
            }
        };

        fetchTemarios();
    }, [token]);

    return (
        <div className="p-6 bg-gray-100">
            <h2 className="text-2xl font-semibold mb-4">Temarios</h2>
            {error && <p className="text-red-500">{error}</p>}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
                {temarios.map((temario) => (
                    <div key={temario.id} className="bg-white rounded-lg shadow-md p-4">
                        <h3 className="text-lg font-semibold">{temario.filename}</h3>
                        <p className="text-gray-600">ID del Grupo: {temario.idGrupo}</p>
                        <a href={temario.path} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Ver archivo</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Temario;
