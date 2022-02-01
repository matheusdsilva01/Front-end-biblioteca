import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import Card from '../../components/card';
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
            <Card key={dados.id} id={dados.id} titulo={dados.titulo} editora={dados.editora} foto={dados.foto} />
        ))
    }


    return (
        <div className="container-obra">
            <section className="container" >
                <h1>Lista de Obras</h1>
                <Link to="/">
                    <button className="btn-router">
                        Cadastrar uma obra
                    </button>
                </Link>
            </section>
            <section className="container-cards">
                {form && mostrarDados()}
            </section>
        </div>
    )
}
