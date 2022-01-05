import axios from "../../services/api";
import { useState } from 'react';
import { Link} from 'react-router-dom';
import './cadastro.css';
import Swal from "sweetalert2";

export default function Form() {

    var inputs = document.querySelectorAll('input');
    const [form, setForm] = useState({
        titulo: "",
        editora: "",
        foto: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
        console.log(form)
    }

    function handleSubmit(event) {
        event.preventDefault();
            if(verification()){
                axios.post('/obra', form);
                Swal.fire({
                    title: 'Cadastro realizado com sucesso!',
                    text: 'Você será redirecionado para a página de login',
                    icon: 'success'
                })
                resetInputs();
            }
    }

    const verification = () => {
        if (form.titulo === '' || form.editora === '' || form.foto === ''){
            Swal.fire({
                title: 'Prencha os campos corretamente',
                icon: 'error'
            })
            return false
        }else{
            return true
        }
    }

    const resetInputs = () => {
        inputs.forEach(input => {
            input.value = '';
        });
    }



    return (
        <>
            <Link to="/obras">Ver obras cadastradas</Link>
            <div className="form-container">
                <form className="form" onSubmit={handleSubmit}>
                    <label htmlFor="titulo">Titulo: </label>
                    <input id="titulo" type="text" name="titulo" onChange={handleChange} /><br />
                    <label htmlFor="editora">Editora: </label>
                    <input id="editora" type="text" name="editora" onChange={handleChange} /><br />
                    <label htmlFor="foto">Foto: </label>
                    <input id="foto" type="text" name="foto" onChange={handleChange} /><br />
                    <button >submit dados</button>
                </form>
                <section>
                    <h1>Biblio-tech</h1>
                    <h3>A biblioteca mais tech do Brasil</h3>
                </section>
            </div>
        </>
    )
}