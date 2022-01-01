import axios from "../../services/api";
import { useState } from 'react';
import './form.css';

export default function Form () {

// const initialValues = {
//     titulo: "Mindset: A nova psicologia do sucesso",
//     editora: "Objetiva",
//     foto: "https://images-na.ssl-images-amazon.com/images/I/41suUFbw-eL._SX346_BO1,204,203,200_.jpg"
// }

    const [form, setForm] = useState({
        titulo: "",
        editora: "",
        foto: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setForm({...form,[name]: value });
        console.log(form)
    }

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('/obra', form);
    }

    return (
        <>
        <div className="form-container">

            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="titulo">Titulo: </label>
                <input id="titulo" type="text" name="titulo" onChange={handleChange} /><br />
                <label htmlFor="editora">Editora: </label>
                <input id="editora" type="text" name="editora" onChange={handleChange} /><br />
                <label htmlFor="foto">Foto: </label>
                <input id="foto" type="text" name="foto" onChange={handleChange} /><br />
            <button>submit dados</button>
            </form>
            <section>
            <h1>Biblio-tech</h1>
            <h3>A biblioteca mais tech do Brasil</h3>
            </section>
        </div>
        </>
    )
}