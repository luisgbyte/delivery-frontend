import styled, { css } from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;

    background: #fff;
    border-radius: 8px;
    padding: 16px 24px;

    & + div {
        margin-top: 24px;
    }

    h1 {
        margin-bottom: 40px;
        font-weight: 600;
        font-size: 3.6rem;
        line-height: 3.6rem;
    }

    ${(props) =>
        props.isFocused &&
        css`
            color: #ff9000;
            border-color: #ff9000;
        `}
    ${(props) =>
        props.isFilled &&
        css`
            color: #ff9000;
        `}

        input {
        flex: 1;
        background: transparent;
        border: 0;
        color: #b7b7cc;
        font-size: 1.6rem;
        &::placeholder {
            color: #b7b7cc;
        }
    }

    svg {
        margin-right: 16px;
    }
`;
