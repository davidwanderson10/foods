import React, { useEffect, useState } from "react";

export default function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchUsers = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://randomuser.me/api/?results=5')
            const data = await response.json();
            setUsers(data.results);
        } catch (error) {
            console.error("Error fetching users:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUsers(); // CÓDIGO EXECUTADO QUANDO O COMPONENTE É MONTADO, OU SEJA, CHAMA A FUNÇÃO fetchUsers
    }, []); // array de dependências vazio significa que o efeito só roda uma vez, após o primeiro render

    return (
        <div style={{ padding: '20px' }}>
            <h2>Lista de Usuários</h2>
            <button onClick={fetchUsers} disabled={loading}>
                {loading ? 'Carregando...' : 'Carregar Usuários'}
            </button>
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginTop: '20px' }}>
                {users.map((user, index) => (
                    <div key={index} style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '10px', width: '180px', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
                        <img src={user.picture.large} alt={user.name.first} style={{ borderRadius: '50%' }} />
                        <h4>{`${user.name.first} ${user.name.last}`}</h4>
                        <p>{user.location.country}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

   