import "../index.css"
import { useState, useEffect } from "react"
import axios  from "axios"

export default function PageContent(){
    <div>Veiculos</div>
    const [marca, setmarca] = useState('')
    const [modelo, setmodelo] = useState('')
    const [ano, setano] = useState('')
    const [prop, setprop] = useState('')
    const [cor, setcor] = useState('')

    useEffect (()  => {
    console.log(marca, modelo, ano, prop, cor)
    }, [marca, modelo, ano, prop, cor])

    async function registerVehicle(){
        await axios.post("http://localhost:3000/add",
        {marca, modelo, ano, prop, cor})
    }

    function handleSubmit(e){
        e.preventDefault()
        registerVehicle()
    }

    return(
        <>
          <div className="card">
            <form>
                <label htmlFor="marca">Marca</label>
                <input type="text" id="marca" onChange={(e) => {setmarca(e.target.value)}}/>
                <br />
                <label htmlFor="modelo">Modelo</label>
                <input type="text" id="modelo" onChange={(e) => {setmodelo(e.target.value)}}/>
                <br />
                <label htmlFor="ano">Ano</label>
                <input type="text" id="ano" onChange={(e) => {setano(e.target.value)}}/>
                <br />
                <label htmlFor="prop">Proprietario</label>
                <input type="text" id="prop" onChange={(e) => {setprop(e.target.value)}}/>
                <br />
                <label htmlFor="cor">Cor</label>
                <input type="text" id="cor" onChange={(e) => {setcor(e.target.value)}}/>
                <br />
                <button type="submit" onClick={handleSubmit}>Enviar carro</button>
            </form>
          </div>
        </>
    )
}