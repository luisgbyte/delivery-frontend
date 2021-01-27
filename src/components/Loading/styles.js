import styled from 'styled-components';

export const Container = styled.span`
    position: absolute;
    background-color: #121214;
    /* width: 1440px;
    height: 900px; */
    left: 0px;
    top: 0px;
    opacity: 0.4;
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100vh;
    width: 100vw;
`;

export const Spiner = styled.div`
    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
    & {
        border: 8px solid rgba(0, 0, 0, 0.1);
        border-left-color: #495057;
        border-radius: 50%;
        width: 80px;
        height: 80px;
        animation: spin 1.2s linear infinite;
    }
`;
