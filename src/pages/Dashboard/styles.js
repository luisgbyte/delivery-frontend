import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
`;

export const OrderBox = styled.div`
    width: 100%;
    margin-top: 20px;
    border-radius: 15px;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
export const RemoveOrder = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    /* padding: 5px; */
    button {
        border: none;
        background: none;
        font-size: 18px;
        color: #0b2031;
    }
`;

export const HeaderBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 10px;
    p {
        font-size: 15px;
    }
    p:nth-child(2n) {
        color: #96949e;
        font-size: 14px;
        margin: 5px 0;
    }
`;

export const OrderDetails = styled.div`
    flex-direction: column;
    h3 {
        color: #39b100;
    }
    p {
        font-weight: bold;
    }
`;

export const AdressBox = styled.div`
    flex-direction: column;
    border-left: 1px solid #d3d3d3;
    width: 427px;
    padding-left: 10px;
    font-weight: bold;
    p {
        font-size: 13px;
        color: #96949e;
    }
`;

export const Border = styled.div`
    border-right: 1px solid #696969;
    height: 32px;
    margin: 0 18px;
`;

export const OrdersContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 700px;
    margin: auto;
    margin-top: 30px;
    justify-content: space-between;
`;

export const OrderItems = styled.div`
    width: 100%;
    margin-top: 5px;
    padding: 10px 20px;
    border-top: 1px solid #d3d3d3;
    border-bottom: 1px solid #d3d3d3;
`;

export const Item = styled.div`
    display: inline-block;
    align-items: center;
    width: 290px;
    height: 100px;
    border-radius: 15px;
    padding: 20px;
    margin: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    div {
        display: flex;
        align-items: left;
        div {
            display: flex;
            flex-direction: column;
            margin-left: 10px;
        }
        img {
            height: 70px;
            width: 70px;
            border-radius: 50%;
        }
        p {
            font-size: 15px;
        }
        p:nth-child(2n) {
            color: #96949e;
            font-size: 14px;
            margin: 5px 0;
        }
    }
`;

export const OrderFooter = styled.div`
    height: 100%;
    padding-top: 20px;
    color: #96949e;
    p {
        font-size: 15px;
    }
`;

export const NoOrders = styled.div`
    width: 400px;
    height: 50px;
    color: #96949e;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
`;
