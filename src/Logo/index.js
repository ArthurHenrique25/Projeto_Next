import { createGlobalStyle } from 'styled-components';

const LogoConteiner = createGlobalStyle`

h1 {
    font-size: 30px; /* Assuming you intended to set the font size */
    color: red;
    margin:10px;
    font-family: sans-serif;
}       
`;

function Logo( {children} ) {
    return (
        
        <h1><LogoConteiner />{children}</h1>
        
    )
}

export default Logo


