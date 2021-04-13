import React, { useEffect, useState } from 'react';

import { FiX } from 'react-icons/fi';

import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
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
    OrderStatusBox,
    RemoveOrder,
} from './styles';

import Pagination from '~/components/Pagination';

import { orderRequest, orderStatusChange } from '~/store/modules/order/actions';

function Dashboard() {
    const dispatch = useDispatch();

    const { orders, count } = useSelector((state) => state.order);

    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(orderRequest(page));
        const interval = setInterval(() => {
            dispatch(orderRequest(page));
        }, 30000);
        return () => clearInterval(interval);
    }, [page]);

    function ChangeOrderStatus(id, status) {
        Swal.fire({
            title: 'Alterar Status do pedido?',
            text: 'Você não poderá reverter isso!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Alterar',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(orderStatusChange(id, status));
            }
        });
    }

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
                                    <button
                                        type="button"
                                        onClick={() =>
                                            ChangeOrderStatus(
                                                order.id,
                                                'Cancelado'
                                            )
                                        }
                                    >
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
                                            </p>
                                        )}
                                    </AdressBox>
                                    <OrderStatusBox>
                                        {order.status === 'Cancelado' ||
                                        order.status === 'Entregue' ? (
                                            <p style={{ color: '#c72828' }}>
                                                {order.status}
                                            </p>
                                        ) : (
                                            <>
                                                <label
                                                    htmlFor={`confirmed-status-${order.id}`}
                                                >
                                                    <input
                                                        type="radio"
                                                        id={`confirmed-status-${order.id}`}
                                                        onChange={() =>
                                                            ChangeOrderStatus(
                                                                order.id,
                                                                'Confirmado'
                                                            )
                                                        }
                                                        checked={
                                                            order.status ===
                                                            'Confirmado'
                                                        }
                                                    />
                                                    Confirmar
                                                </label>

                                                <label
                                                    htmlFor={`ready-status-${order.id}`}
                                                >
                                                    <input
                                                        type="radio"
                                                        id={`ready-status-${order.id}`}
                                                        onChange={() =>
                                                            ChangeOrderStatus(
                                                                order.id,
                                                                'Pronto'
                                                            )
                                                        }
                                                        checked={
                                                            order.status ===
                                                            'Pronto'
                                                        }
                                                    />
                                                    Pronto
                                                </label>

                                                <label
                                                    htmlFor={`delivered-status-${order.id}`}
                                                >
                                                    <input
                                                        type="radio"
                                                        id={`delivered-status-${order.id}`}
                                                        onChange={() =>
                                                            ChangeOrderStatus(
                                                                order.id,
                                                                'Entregue'
                                                            )
                                                        }
                                                        checked={
                                                            order.status ===
                                                            'Entregue'
                                                        }
                                                    />
                                                    Entregue
                                                </label>
                                            </>
                                        )}
                                    </OrderStatusBox>
                                </HeaderBox>
                                {!(
                                    order.status === 'Entregue' ||
                                    order.status === 'Cancelado'
                                ) && (
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
                                                                    currency:
                                                                        'BRL',
                                                                }
                                                            )}{' '}
                                                        </p>
                                                        <p>
                                                            Quantidade:{' '}
                                                            {
                                                                item
                                                                    .product_orders
                                                                    .quantity
                                                            }{' '}
                                                            un.
                                                        </p>
                                                    </div>
                                                </div>
                                            </Item>
                                        ))}
                                    </OrderItems>
                                )}
                                <OrderFooter>
                                    <p>Observações: nenhuma</p>
                                </OrderFooter>
                            </OrderBox>
                        ))}
                    <Pagination
                        limit={3}
                        total={count}
                        page={page}
                        setPage={setPage}
                    />
                </OrdersContainer>
            )}
        </Container>
    );
}

export default Dashboard;
