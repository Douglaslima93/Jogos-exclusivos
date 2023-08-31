import './style.css';
import ItemJogos from "../ItemJogos";
import { useState } from 'react';
import { filtrarJogo, buscarJogo, retornarJogos } from '../../servico';
import Lupa from '../../assets/img/lupa.png'

const ListaDeJogosExclusivos = () => {
    
    const [listaJogos, setListaJogos] = useState(retornarJogos());
    const [textoBusca, setTextoBusca] = useState("");

    const handleFiltrarJogosPlataforma = (plataforma) => {
        setListaJogos(filtrarJogo(plataforma));
        setTextoBusca("");
    };

    const handleLimparFiltro = () => {
        setListaJogos(retornarJogos());
        setTextoBusca("");
    };

    const handleBuscarJogo = (textoDigitado) => {
        setTextoBusca(textoDigitado);
        setListaJogos(buscarJogo(textoDigitado));
    };

    return (
        <div className='container-principal'>
            <h2>Lista de Jogos Exclusivos</h2>
            <div className='container-btns'>
                <button onClick={() => handleFiltrarJogosPlataforma("xbox")}>XBOX</button>
                <button onClick={() => handleFiltrarJogosPlataforma("playstation")}>PLAYSTATION</button>
                <button onClick={() => handleFiltrarJogosPlataforma("nintendo")}>NINTENDO</button>
                <button onClick={() => handleLimparFiltro()}>Limpar Filtro</button>
            </div>

            <div className='container-input'>
                <img src={Lupa} alt='icone'/>
                <input
                type='text'
                value={textoBusca}
                onChange={(event) => handleBuscarJogo(event.target.value)}
                placeholder='Pesquise um jogo ou plataforma'
                />
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
