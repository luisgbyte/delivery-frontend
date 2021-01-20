import styled from 'styled-components';

export const Content = styled.div`
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
`;

export const ButtonContainer = styled.div`
    padding: 25px 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    button {
        font-weight: 600;
        border-radius: 8px;
        border: 0;
        background: #39b100;
        color: #fff;

        display: flex;
        flex-direction: row;
        align-items: center;

        .text {
            padding: 8px 12px;
        }

        .icon {
            display: flex;
            padding: 10px 10px;
            background: #41c900;
            border-radius: 0 8px 8px 0;
            margin: 0 auto;
        }
    }
`;

export const ProductsContainer = styled.div`
    padding: 5px 0;

    display: grid;

    grid-template-columns: repeat(3, 1fr);
    grid-gap: 32px;
`;
