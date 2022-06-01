import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import Card from '../../components/card';
import './obra.css';

export default function Dados() {
    const [form, setForm] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get('/obra').then(response => {
            setForm(response.data);
        }).catch(error => (
            alert(error)
        ))
        setLoading(false)
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
                {form.length === 0 & !loading ? (
                    <h2>Ops, parece que não temos obras cadastradas, volte a pagina principal e cadastre uma obra!</h2>
                ) : null}
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
