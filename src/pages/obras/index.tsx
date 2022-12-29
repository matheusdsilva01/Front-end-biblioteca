import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { book } from "types/Book";
import data from "util/data";
import Card from "components/card";
import "./obra.css";


export default function Dados() {
    const [books, setBooks] = useState<book[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setBooks(data);
        setLoading(false)
    }, []);

    return (
        <div className="container-obra">
            <section className="container" >
                <h1>Lista de Obras</h1>
                {books.length === 0 && !loading ? (
                    <h2>Ops, parece que não temos obras cadastradas, volte a pagina principal e cadastre uma obra!</h2>
                ) : null}
                <Link to="/">
                    <button className="btn-router">
                        Cadastrar uma obra
                    </button>
                </Link>
            </section>
            <section className="container-cards">
                {books && books.map((dados: book, index) => (
                    <Card key={index} titulo={dados.titulo} editora={dados.editora} foto={dados.foto} />
                ))}
            </section>
        </div>
    )
}
