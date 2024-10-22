import "../index.css"
import SENAI from "./SENAI.jsx"
import Balacobaco from "./Balacobaco.jsx"
import Cont from "./Cont.jsx"
import PostInsta from "./Instagram.jsx"
import CaractReal from "./CaractReal.jsx"
import FormularioRegistro from "./Registro.jsx"

export default function PageContent(){
    <div>exercicios</div>
    return(
        <>
            <SENAI />
            <Balacobaco />
            <h2>Contador</h2>
            <Cont />
            <PostInsta />
            <h2>Contador de Caracteres</h2>
            <CaractReal />
            <h2>Formulário de Registro</h2>
            <FormularioRegistro />
        </>
    )
}