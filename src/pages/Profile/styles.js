import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    max-width: 600px;
    margin: 50px auto;

    form {
        display: flex;
        flex-direction: column;
        margin-top: 30px;

        input {
            background: rgba(0, 0, 0, 0.1);
            border: 0;
            border-radius: 4px;
            height: 44px;
            padding: 0 15px;
            color: #fff;
            margin: 0 0 10px;

            &::placeholder {
                color: rgba(255, 255, 255, 0.7);
            }
        }

        span {
            color: #dfebea;
            align-self: flex-start;
            margin: 0 0 10px;
            font-weight: bold;
            font-size: 1.3rem;
        }

        hr {
            border: 0;
            height: 1px;
            background: rgba(255, 255, 255, 0.2);
            margin: 10px 0 20px;
        }

        button {
            margin: 5px 0 0;
            height: 44px;
            background: #39b100;
            font-weight: bold;
            color: #fff;
            border: 0;
            border-radius: 4px;
            font-size: 1.6rem;
            transition: background 0.2s;

            &:hover {
                background: ${darken(0.03, '#39b100')};
            }
        }
    }

    > button {
        width: 100%;
        margin: 10px 0 0;
        height: 44px;
        background: #fb8b24;
        font-weight: bold;
        color: #fff;
        border: 0;
        border-radius: 4px;
        font-size: 1.6rem;
        transition: background 0.2s;

        &:hover {
            background: ${darken(0.09, '#fb8b24')};
        }
    }

    @media (max-width: 770px) {
        width: 90%;
    }
`;
