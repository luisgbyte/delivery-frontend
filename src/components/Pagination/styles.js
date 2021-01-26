import styled from 'styled-components';

export const Container = styled.div`
    margin: 35px;

    button {
        background: none;
        border: none;
        font-weight: bold;
        font-size: 20px;
        padding: 5px 10px;
        border-radius: 50%;
    }

    ul {
        display: flex;
        justify-content: flex-start;
        list-style: none;
    }

    li + li {
        margin-left: 1rem;
    }

    .pagination__item--ative {
        background: #fff;
        font-weight: bold;
        border: none;
        transition: 0.7s;
    }
`;
