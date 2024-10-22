import React, { useState } from 'react';
import '../index.css'; 

export default function FormularioRegistro() {
    const [dadosFormulario, setDadosFormulario] = useState({
        nome: '',
        email: '',
        idade: ''
    });
    const [usuarios, setUsuarios] = useState([]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setDadosFormulario({
            ...dadosFormulario,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setUsuarios([...usuarios, dadosFormulario]);
        setDadosFormulario({ nome: '', email: '', idade: '' }); // Limpa 
    };

    return (
        <div className="formulario-registro">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome:</label>
                    <input 
                        type="text" 
                        name="nome" 
                        value={dadosFormulario.nome} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={dadosFormulario.email} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div>
                    <label>Idade:</label>
                    <input 
                        type="number" 
                        name="idade" 
                        value={dadosFormulario.idade} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <button type="submit">Registrar</button>
            </form>

            <h2>Usuários Registrados:</h2>
            <ul>
                {usuarios.map((usuario, index) => (
                    <li key={index}>
                        {usuario.nome}, {usuario.email}, {usuario.idade} anos
                    </li>
                ))}
            </ul>
        </div>
    );
}
