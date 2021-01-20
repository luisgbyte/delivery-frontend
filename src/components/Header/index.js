import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';

import logo from '~/assets/hamburguer3.svg';
import { Container, Content, Profile } from './styles';

function Header() {
    const profile = useSelector((state) => state.user.profile);

    return (
        <Container>
            <Content>
                <nav>
                    <img src={logo} alt="Delivery" height="60px" />

                    <Link to="/dashboard">Pedidos</Link>
                    <Link to="/product">Produtos</Link>
                    <Link to="/category">Categorias</Link>
                </nav>

                <aside>
                    <Notifications />
                    <Profile>
                        <div>
                            <strong>{profile.name}</strong>
                            <Link to="/profile">Meu perfil</Link>
                        </div>
                    </Profile>
                </aside>
            </Content>
        </Container>
    );
}

export default Header;
