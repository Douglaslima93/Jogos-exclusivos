import './style.css';
import ItemJogos from "../ItemJogos";
import { useState } from 'react';
import { jogosExclusivos } from '../../dados';

const ListaDeJogosExclusivos = () => {
    
    const [listaJogos, setListaJogos] = useState(jogosExclusivos);

    const handleFiltrarJogosPlataforma = (plataforma) => {
        setListaJogos(
            jogosExclusivos.filter((jogo) => jogo.plataforma === plataforma)
        )
    };

    const handleLimparFiltro = () => {
        setListaJogos(jogosExclusivos);
    }

    return (
        <div className='container-principal'>
            <h2>Lista de Jogos Exclusivos</h2>
            <div className='container-btns'>
                <button onClick={() => handleFiltrarJogosPlataforma("xbox")}>XBOX</button>
                <button onClick={() => handleFiltrarJogosPlataforma("playstation")}>PLAYSTATION</button>
                <button onClick={() => handleFiltrarJogosPlataforma("nintendo")}>NINTENDO</button>
                <button onClick={() => handleLimparFiltro()}>Limpar Filtro</button>
            </div>

            <div className='container-jogos'>
                {listaJogos.map((jogo) => (
                    <ItemJogos
                    key={jogo.id}
                    nome={jogo.nome}
                    plataforma={jogo.plataforma}
                    />
                ))}
            </div>
        </div>
    )
}

export default ListaDeJogosExclusivos;
