import { jogosExclusivos } from "../dados";

export const retornaJogos = () => {
    return jogosExclusivos;
}

export const buscarJogo = () => {
    return jogosExclusivos.filter((jogo) =>
    jogo.nome.toLowerCase().includes(textoDigitado.toLowerCase())  || 
    jogo.plataforma.toLowerCase().includes(textoDigitado.toLowerCase())
    );
}

export const filtarJogo = () => {
    return jogosExclusivos.filter((jogo) => jogo.plataforma === plataforma);
}