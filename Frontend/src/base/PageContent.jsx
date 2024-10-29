import "../index.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function PageContent() {
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [ano, setAno] = useState('');
    const [prop, setProp] = useState('');
    const [cor, setCor] = useState('');
    const [veiculos, setVeiculos] = useState([]);
    const [Id, setId] = useState('');

    useEffect(() => {
        // Carrega a list
        axios.get("http://localhost:3000/visu")
            .then(response => setVeiculos(response.data))
            .catch(error => console.error("Erro ao buscar veículos:", error));
    }, []);

    async function registerVehicle() {
        const anoNumber = Number(ano);
        await axios.post("http://localhost:3000/add", { marca, modelo, ano: anoNumber, prop, cor });
        setVeiculos([...veiculos, { marca, modelo, ano: anoNumber, prop, cor }]);
    }

    async function deleteVehicle(id) {
        await axios.delete(`http://localhost:3000/re/${id}`);
        setVeiculos(veiculos.filter(veiculo => veiculo.id !== id));
    }

    async function updateVehicle() {
        if (!Id) return;
        const anoNumber = Number(ano);
        await axios.put(`http://localhost:3000/upt/${Id}`, { marca, modelo, ano: anoNumber, prop, cor });
        setVeiculos(veiculos.map(veiculo => (veiculo.id === Id ? { ...veiculo, marca, modelo, ano: anoNumber, prop, cor } : veiculo)));
        resetForm();
    }

    function resetForm() { // Limpa
        setId('');
        setMarca('');
        setModelo('');
        setAno('');
        setProp('');
        setCor('');
    }

    function handleSubmit(e) {
        e.preventDefault();
        registerVehicle();
    }

    return (
        <>
            <div className="card">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="marca">Marca</label>
                    <input type="text" id="marca" value={marca} onChange={(e) => setMarca(e.target.value)} />
                    <br />
                    <label htmlFor="modelo">Modelo</label>
                    <input type="text" id="modelo" value={modelo} onChange={(e) => setModelo(e.target.value)} />
                    <br />
                    <label htmlFor="ano">Ano</label>
                    <input type="text" id="ano" value={ano} onChange={(e) => setAno(e.target.value)} />
                    <br />
                    <label htmlFor="prop">Proprietário</label>
                    <input type="text" id="prop" value={prop} onChange={(e) => setProp(e.target.value)} />
                    <br />
                    <label htmlFor="cor">Cor</label>
                    <input type="text" id="cor" value={cor} onChange={(e) => setCor(e.target.value)} />
                    <br />
                    <button type="submit">Adicionar Carro</button>
                    <button type="button" onClick={updateVehicle}>Atualizar Carro</button>
                </form>
            </div>
            <div>
                <h3>Veículos Cadastrados</h3>
                {veiculos.map(veiculo => (
                    <div key={veiculo.id}>
                        <input
                            type="radio"
                            name="vehicleId"
                            value={veiculo.id}
                            onChange={() => {
                                setId(veiculo.id);
                                setMarca(veiculo.marca);
                                setModelo(veiculo.modelo);
                                setAno(veiculo.ano);
                                setProp(veiculo.prop);
                                setCor(veiculo.cor);
                            }}
                        />
                        ID: {veiculo.id}
                        <button type="button" onClick={() => deleteVehicle(veiculo.id)}>Deletar</button>
                    </div>
                ))}
            </div>
        </>
    );
}
