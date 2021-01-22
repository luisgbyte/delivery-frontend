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
    NoOrders,
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
            {orders?.length === 0 ? (
                <NoOrders>
                    <h1>Não há nenhum pedido.</h1>
                </NoOrders>
            ) : (
                <OrdersContainer>
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
                                            Pedido #{order.id} -{' '}
                                            {order.client.name}
                                        </p>
                                        <p>15/02/2020</p>
                                        <h3>
                                            {order.total.toLocaleString(
                                                'pt-BR',
                                                {
                                                    style: 'currency',
                                                    currency: 'BRL',
                                                }
                                            )}
                                        </h3>
                                    </OrderDetails>
                                    <AdressBox>
                                        <p>
                                            Rua: {order.client.address.street}
                                        </p>
                                        <p>
                                            Número:{' '}
                                            {order.client.address.number}
                                        </p>
                                        <p>CEP: {order.client.address.cep}</p>
                                        <p>
                                            Bairro:{' '}
                                            {order.client.address.neighborhood}
                                        </p>
                                    </AdressBox>
                                    <AdressBox>
                                        <p>Pagamento: {order.payment.type}</p>
                                        {order.payment.chance && (
                                            <p>
                                                Troco para:{' '}
                                                {order.payment.chance.toLocaleString(
                                                    'pt-BR',
                                                    {
                                                        style: 'currency',
                                                        currency: 'BRL',
                                                    }
                                                )}{' '}
                                                reais
                                            </p>
                                        )}
                                        {order.payment.card_type && (
                                            <p>
                                                Tipo: {order.payment.card_type}
                                            </p>
                                        )}
                                        {order.payment.card_banner && (
                                            <p>
                                                Bandeira:{' '}
                                                {order.payment.card_banner}
                                            </p>
                                        )}
                                    </AdressBox>
                                </HeaderBox>
                                <OrderItems>
                                    {order.product.map((item) => (
                                        <Item key={item.id}>
                                            <div>
                                                <img
                                                    src={item.file?.url}
                                                    alt="produto"
                                                />
                                                <div>
                                                    <p className="first">
                                                        {item.name}
                                                    </p>
                                                    <p>
                                                        Preço:{' '}
                                                        {item.price.toLocaleString(
                                                            'pt-BR',
                                                            {
                                                                style:
                                                                    'currency',
                                                                currency: 'BRL',
                                                            }
                                                        )}{' '}
                                                    </p>
                                                    <p>
                                                        Quantidade:{' '}
                                                        {
                                                            item.product_orders
                                                                .quantity
                                                        }{' '}
                                                        un.
                                                    </p>
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
            )}
        </Container>
    );
}

export default Dashboard;
