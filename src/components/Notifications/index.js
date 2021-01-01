import React from 'react';

import { MdNotifications } from 'react-icons/md';

import {
    Container,
    Badge,
    NotificationList,
    Scroll,
    Notification,
} from './styles';

function Notifications() {
    return (
        <Container>
            <Badge hasUnread>
                <MdNotifications color="#c72828" size={20} />
            </Badge>

            <NotificationList>
                <Scroll>
                    <Notification unread>
                        <p>Novo pedido de cliente1 01/01/2021</p>
                        <time>há 5 minutos</time>
                        <button type="button">Marcar como lida</button>
                    </Notification>
                    <Notification>
                        <p>Novo pedido de cliente1 01/01/2021</p>
                        <time>há 5 minutos</time>
                        <button type="button">Marcar como lida</button>
                    </Notification>
                    <Notification>
                        <p>Novo pedido de cliente1 01/01/2021</p>
                        <time>há 5 minutos</time>
                        <button type="button">Marcar como lida</button>
                    </Notification>
                    <Notification>
                        <p>Novo pedido de cliente1 01/01/2021</p>
                        <time>há 5 minutos</time>
                        <button type="button">Marcar como lida</button>
                    </Notification>
                    <Notification>
                        <p>Novo pedido de cliente1 01/01/2021</p>
                        <time>há 5 minutos</time>
                        <button type="button">Marcar como lida</button>
                    </Notification>
                </Scroll>
            </NotificationList>
        </Container>
    );
}

export default Notifications;
