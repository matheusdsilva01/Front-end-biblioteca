import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import List from '../../components/list';
import './obra.css';

export default function Dados() {
    const [form, setForm] = useState([]);

    useEffect(() => {
        async function loadDados() {
            try {
                var response = await api.get('/obra')
                setForm(response.data);
            } catch (error) {
                alert(error)
            }
        }
        loadDados();
    }, []);

    function mostrarDados() {
        return form.map(dados => (
            <List key={dados.id} id={dados.id} titulo={dados.titulo} editora={dados.editora} foto={dados.foto} />
        ))
    }
    

    return (
        <>
            <h1>Lista de Obra</h1>
            <Link to="/">Cadastre uma obra</Link>
            <div className="container-cards">
                {form && mostrarDados()}
            </div>

        </>
    )
}
