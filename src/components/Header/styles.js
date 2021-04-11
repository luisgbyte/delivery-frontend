import styled from 'styled-components';

export const Container = styled.div`
    background: #fff;
    padding: 0 30px;
`;

export const Content = styled.div`
    height: 64px;
    width: 90%;
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    nav {
        display: flex;
        align-items: center;

        img {
            margin-right: 20px;
            padding-right: 20px;
            border-right: 1px solid #eee;
        }

        a {
            font-weight: bold;
            font-size: 1.6rem;
            margin-right: 20px;
            color: #c72828;
        }
    }
    aside {
        display: flex;
        align-items: center;
    }

    @media (max-width: 530px) {
        nav {
            img {
                display: none;
            }
        }
    }
`;

export const Profile = styled.div`
    display: flex;
    margin-left: 20px;
    padding-left: 20px;
    border-left: 1px solid #eee;
    div {
        text-align: right;
        margin-right: 10px;
        strong {
            display: block;
            color: #333;
        }
        a {
            display: block;
            margin-top: 2px;
            font-size: 1.2rem;
            color: #999;
        }
    }
    img {
        height: 32px;
        border-radius: 50%;
    }

    @media (max-width: 410px) {
        div {
            a,
            strong {
                display: none;
            }
        }
    }
`;
