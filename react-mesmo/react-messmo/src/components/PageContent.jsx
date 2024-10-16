import "../index.css"

export default function PageContent(){

    const lista = [
    {
        nome : "murilo john",
        idade : "38",
        escola : "senai"
    },
    {        
    nome : "mariá",
    idade : "42",
    escola : "barracão do lanche"
    }
    ]

    const MapPessoas = ({pessoas}) =>{
        return pessoas.map((ps, index)=>
        <div key={index}>
            <h1>{ps.nome}</h1>
            <h1>{ps.idade}</h1>
            <h1>{ps.escola}</h1>
        </div>
        )
    }
    return(
        <div>
            <img src="https://pbs.twimg.com/media/ESvauE9WAAAKXAQ.jpg" alt="imagem teste 1" />
            <MapPessoas pessoas={lista} />
        </div>
    )
}