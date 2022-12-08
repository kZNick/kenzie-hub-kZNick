import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

*{
    margin: 0;
    box-sizing:border-box;
    padding: 0;
    font-family: 'Inter', sans-serif;
} 
:root{
    --Color-primary: #FF577F;
    --Color-primary-Focus: #FF427F;
    --Color-primary-Negative: #59323F;

     --Grey-0: #F8F9FA;
     --Grey-1: #868E96;
     --Grey-2: #343B41;
     --Grey-3: #212529;
     --Grey-4: #121214;

     --Sucess: #3FE864;
     --Negative: #E83F5B;
;
}
body{
        background-color: var(--Grey-4);
    }
`
export default GlobalStyle;