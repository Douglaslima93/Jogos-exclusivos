import "./style.css"
import xboxLogo from "../../assets/img/xbox.png"
import playstationLogo from "../../assets/img/playstation.jpg"
import nintendoLogo from "../../assets/img/nintendo.jpg"

const ItemJogos = ({nome, plataforma}) => {
    return (
        <div className="card">
            <div>
                <img src={
                    plataforma === "xbox" 
                    ? xboxLogo 
                    : plataforma === "playstation" 
                    ? playstationLogo 
                    : nintendoLogo
                }
                alt="logo"
                />
            </div>
            <div>
                <p>{nome}</p>
            </div>
        </div>
    );
};

export default ItemJogos;