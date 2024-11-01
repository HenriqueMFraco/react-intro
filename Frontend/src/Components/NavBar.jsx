import "../index.css"
import { Link } from "react-router-dom"
import Home from "../pages/App"


export default function NavBar(){
    return(
        <div>
            <nav  className="w-full h-48 bg-sky-600 flex items-center justify-around">
            <Link to={'/'}className="text-white">Home</Link>
            <Link to={'/Config'} className="text-white">Configurações</Link>

            </nav>

        </div>
    )
}