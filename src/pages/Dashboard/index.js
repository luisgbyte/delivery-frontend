import React, { useEffect } from 'react';

import { FiX } from 'react-icons/fi';

import { useDispatch, useSelector } from 'react-redux';

import {
    Container,
    OrdersContainer,
    OrderBox,
    HeaderBox,
    OrderItems,
    Item,
    OrderFooter,
    // NoOrders,
    OrderDetails,
    AdressBox,
    RemoveOrder,
} from './styles';

import { orderRequest } from '~/store/modules/order/actions';

function Dashboard() {
    const dispatch = useDispatch();
    const { orders } = useSelector((state) => state.order);

    useEffect(() => {
        if (!orders) {
            dispatch(orderRequest());
        }
    }, []);

    return (
        <Container>
            <OrdersContainer>
                <h2>Últimos pedidos</h2>
                {orders &&
                    orders.map((order) => (
                        <OrderBox key={order.id}>
                            <RemoveOrder>
                                <button type="button" onClick={() => {}}>
                                    <FiX />
                                </button>
                            </RemoveOrder>
                            <HeaderBox>
                                <OrderDetails>
                                    <p>
                                        Pedido #{order.id} - {order.client.name}
                                    </p>
                                    <p>15/02/2020</p>
                                    <h3>R$ {order.total}</h3>
                                </OrderDetails>
                                <AdressBox>
                                    <p>Rua: {order.client.address.street}</p>
                                    <p>Número: {order.client.address.number}</p>
                                    <p>CEP: {order.client.address.cep}</p>
                                    <p>
                                        Bairro:{' '}
                                        {order.client.address.neighborhood}
                                    </p>
                                </AdressBox>
                            </HeaderBox>
                            <OrderItems>
                                {order.product.map((item) => (
                                    <Item key={item.id}>
                                        <div>
                                            <img
                                                src={item.file?.url}
                                                alt={item.name}
                                            />
                                            <div>
                                                <p>{item.name}</p>
                                                <p>Tamanho: grande</p>
                                            </div>
                                        </div>
                                    </Item>
                                ))}
                            </OrderItems>
                            <OrderFooter>
                                <p>Observações: nenhuma</p>
                            </OrderFooter>
                        </OrderBox>
                    ))}
            </OrdersContainer>
        </Container>
    );
}

export default Dashboard;
