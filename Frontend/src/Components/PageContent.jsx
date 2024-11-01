import { useState, useEffect } from "react";
import axios from "axios";
import "../index.css"

export default function PageContent() {
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [ano, setAno] = useState('');
    const [prop, setProp] = useState('');
    const [cor, setCor] = useState('');
    const [veiculos, setVeiculos] = useState([]);
    const [Id, setId] = useState('');

    useEffect(() => {
        // Carrega a lista
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
            <div className="font-sans bg-gray-200 m-0 p-5 flex justify-center">
                <div className="bg-white rounded-lg shadow-lg p-5 w-72 mb-5">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="marca" className="font-bold block mb-1">Marca</label>
                        <input type="text" id="marca" value={marca} onChange={(e) => setMarca(e.target.value)} 
                               className="w-full p-2 mb-2 border border-gray-300 rounded shadow-inner" />
                        
                        <label htmlFor="modelo" className="font-bold block mb-1">Modelo</label>
                        <input type="text" id="modelo" value={modelo} onChange={(e) => setModelo(e.target.value)} 
                               className="w-full p-2 mb-2 border border-gray-300 rounded shadow-inner" />
                        
                        <label htmlFor="ano" className="font-bold block mb-1">Ano</label>
                        <input type="text" id="ano" value={ano} onChange={(e) => setAno(e.target.value)} 
                               className="w-full p-2 mb-2 border border-gray-300 rounded shadow-inner" />
                        
                        <label htmlFor="prop" className="font-bold block mb-1">Proprietário</label>
                        <input type="text" id="prop" value={prop} onChange={(e) => setProp(e.target.value)} 
                               className="w-full p-2 mb-2 border border-gray-300 rounded shadow-inner" />
                        
                        <label htmlFor="cor" className="font-bold block mb-1">Cor</label>
                        <input type="text" id="cor" value={cor} onChange={(e) => setCor(e.target.value)} 
                               className="w-full p-2 mb-2 border border-gray-300 rounded shadow-inner" />
                        
                        <button type="submit" className="bg-blue-600 text-white rounded p-2 cursor-pointer transition duration-300 w-1/2 hover:bg-blue-700">Adicionar Carro</button>
                        <button type="button" onClick={updateVehicle} className="bg-blue-600 text-white rounded p-2 cursor-pointer transition duration-300 w-1/2 hover:bg-blue-700">Atualizar Carro</button>
                    </form>
                </div>

                <div>
                    <h3 className="text-center mt-5">Veículos Cadastrados</h3>
                    {veiculos.map(veiculo => (
                        <div key={veiculo.id} className="bg-white rounded shadow p-2 mb-1 flex items-center justify-between">
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
                                className="mr-2"
                            />
                            ID: {veiculo.id}
                            <button type="button" onClick={() => deleteVehicle(veiculo.id)} className="text-red-600 hover:text-red-800">Deletar</button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
