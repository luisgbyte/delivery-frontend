import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Form = styled(Unform)`
    padding: 48px 40px;
    display: flex;
    flex-direction: column;

    h1 {
        font-weight: 600;
        font-size: 3.6rem;
        line-height: 3.6rem;
        margin-bottom: 4rem;
    }

    button {
        margin-top: 48px;
        align-self: flex-end;
    }

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
            font-size: 1.2rem;
            padding: 1.6rem 2.4rem;
        }

        .icon {
            display: flex;
            padding: 16px 16px;
            background: #41c900;
            border-radius: 0 8px 8px 0;
            margin: 0 auto;
        }
    }
`;
