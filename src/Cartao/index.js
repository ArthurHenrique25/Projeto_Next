import { createGlobalStyle } from 'styled-components';



const Imagem = ''

const CartaoConteiner = createGlobalStyle`
    .movie-card {
        width: 300px;
        height: 400px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        margin: 20px;
        display: flex;
        flex-direction: column;
    }
    
    .movie-image {
        width: 100%;
    height: 45%;
    background-color: #ccc; /* Add a default background color */
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    }
    
    .movie-details {
        padding: 13px;
    }
    
    .movie-title {
        font-size: 25px;
    font-family: Arial, sans-serif;
    margin: 0 auto;
    margin-bottom: 35px;
    text-align: center;
        
    }
    
    .movie-description {
        font-size: 14px;
        line-height: 1.5;
        margin-bottom: 35px;
        font-family: sans-serif;
        
    }
    .movie-details button {
        margin:0 auto;
        display: block; /* Garante que o botão seja tratado como bloco */
        width: 130px;
        height: 30px;
          }
    }
`;

function Cartao({ children, Informacao, Imagem }) {
    return (
        <div className="movie-card">
            <CartaoConteiner />
            <img className="movie-image" style={{ backgroundImage: `url(${Imagem})` }}/>
            <div className="movie-details">
                <h2 className="movie-title">{children}</h2>
                <p className="movie-description">{Informacao}</p>
                <button>Clique aqui</button>
            </div>
            
        </div>
    );
}

export default Cartao;
