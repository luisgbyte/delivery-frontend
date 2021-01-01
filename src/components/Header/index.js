import React from 'react';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';

import logo from '~/assets/hamburguer.svg';
import { Container, Content, Profile } from './styles';

function Header() {
    return (
        <Container>
            <Content>
                <nav>
                    <img src={logo} alt="Delivery" height="60px" />
                    <Link to="/dashboard">DASHBOARD</Link>
                </nav>

                <aside>
                    <Notifications />
                    <Profile>
                        <div>
                            <strong>Admin</strong>
                            <Link to="/profile">Meu perfil</Link>
                        </div>
                        <img
                            src="https://avatars.dicebear.com/4.5/api/bottts/.svg?h=60&colors[]=red&colors[]=lime"
                            alt="avatar"
                        />
                    </Profile>
                </aside>
            </Content>
        </Container>
    );
}

export default Header;
