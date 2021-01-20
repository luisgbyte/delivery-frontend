import styled from 'styled-components';

export const Content = styled.div`
    width: 700px;
    min-height: 400px;
    margin: 0 auto;

    background: #fff;

    margin-top: 50px;
    border-radius: 10px;
`;

export const HeadContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 10px;

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

export const CategoryContainer = styled.div`
    max-height: 300px;
    overflow: auto;

    table {
        width: 100%;
        height: 100%;
        border-collapse: collapse;
        margin: 1px 0;
        font-size: 1.5em;
        font-family: sans-serif;
    }
    thead tr {
        background-color: #bdb3bd;
        color: #ffffff;
        text-align: left;
    }

    thead th {
        padding: 15px;
    }

    td {
        padding: 3% 7%;
        font-size: 15px;
        min-width: 70%;

        div {
            display: flex;
            justify-content: space-between;

            button {
                border: 0;
                background: none;
            }
        }
    }

    tbody tr:nth-of-type(even) {
        background-color: #f3f3f3;
    }

    tbody tr:nth-of-type(odd) {
        background-color: #c2c2c2;
    }
`;

export const NoCategory = styled.div`
    width: 600px;
    height: 140px;
    color: black;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
`;
