import Logo from '../src/Logo/index'
import Cartao from '../src/Cartao/index'
import ComponenteConteiner from '../src/componentes/index'
import styled from 'styled-components';

export default function HomePage(){

    const Conteudo = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

    return (
            
        <div>
            <ComponenteConteiner />
       <Logo>Cinemark</Logo>
       <Conteudo>

       <Cartao Imagem="https://fastcompanybrasil.com/wp-content/uploads/2023/05/Indiana_Jones_IA_generativa.jpg" 
       Informacao="O Filme Indiana Jones foi lançado em 
       2002 com a proposta de trazer uma aventura de exploração" >
        Indiana Jones
        </Cartao>

        <Cartao Imagem="https://media.seudinheiro.com/cdn-cgi/image/fit=contain,width=715&,format=auto/uploads/2022/01/harry-potter-628x353.jpg"
        Informacao="O filme e sobre magia e bruxaria, que fala sobre um
         jovem menino que sobreviveu ao feitiço proibido." >
        Harry Potter
        </Cartao>

        <Cartao Informacao="......." >
        ....
        </Cartao>
        

        </Conteudo>
        </div>
        
        
)
}