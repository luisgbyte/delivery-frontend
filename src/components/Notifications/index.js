import React, { useState, useEffect, useMemo } from 'react';
import { MdNotifications } from 'react-icons/md';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { useSelector } from 'react-redux';

import api from '~/services/api';

import {
    Container,
    Badge,
    NotificationList,
    Scroll,
    Notification,
} from './styles';

function Notifications() {
    const token = useSelector((state) => state.auth.token);

    const [visible, setVisible] = useState(false);
    const [notifications, setNotifications] = useState([]);

    const hasUnread = useMemo(
        () =>
            !!notifications.find((notification) => notification.read === false),

        [notifications]
    );

    useEffect(() => {
        async function loadNotifications() {
            const response = await api.get('notifications', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const data = response.data.map((notification) => ({
                ...notification,
                timeDistance: formatDistance(
                    parseISO(notification.createdAt),
                    new Date(),
                    { addSuffix: true, locale: pt }
                ),
            }));

            setNotifications(data);
        }

        loadNotifications();
    }, []);

    function handleToggleVisible() {
        setVisible(!visible);
    }

    async function handleMarkAsRead(id) {
        await api.put(`notifications/${id}`);

        setNotifications(
            notifications.map((notification) =>
                // eslint-disable-next-line no-underscore-dangle
                notification._id === id
                    ? { ...notification, read: true }
                    : notification
            )
        );
    }

    return (
        <Container>
            <Badge onClick={handleToggleVisible} hasUnread={hasUnread}>
                <MdNotifications color="#c72828" size={20} />
            </Badge>

            <NotificationList visible={visible}>
                <Scroll>
                    {notifications.map((notification) => (
                        <Notification
                            // eslint-disable-next-line no-underscore-dangle
                            key={notification._id}
                            unread={!notification.read}
                        >
                            <p>{notification.content}</p>
                            <time>{notification.timeDistance}</time>
                            {!notification.read && (
                                <button
                                    type="button"
                                    onClick={() =>
                                        // eslint-disable-next-line no-underscore-dangle
                                        handleMarkAsRead(notification._id)
                                    }
                                >
                                    Marcar como lida
                                </button>
                            )}
                        </Notification>
                    ))}
                </Scroll>
            </NotificationList>
        </Container>
    );
}

export default Notifications;
