import { createGlobalStyle } from 'styled-components';

import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
    /* @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'); */

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    *:focus {
        outline: 0;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font: 14px, 'Roboto', sans-serif;
    }

    html {
        /* a cada 1rem será considerado 10px*/
        font-size: 62.5%;
    }

    body {
        font-size: 1.6rem;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    button {
        cursor: pointer;
    }

    //
    @media(max-width: 768px) {
        html{
            font-size: 50%;
        }
        /* body {
            overflow: hidden;
        } */
    }

    @media(max-width: 530px) {
        html{
            font-size: 50%;
        }
        /* body {
            overflow: hidden;
        } */
    }
`;
