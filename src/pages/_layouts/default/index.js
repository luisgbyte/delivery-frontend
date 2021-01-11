import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Loading from '~/components/Loading';
import Header from '~/components/Header';

import { Wrapper } from './styles';

function DefaultLayout({ children }) {
    const { loading } = useSelector((state) => state.product);
    return (
        <>
            <Wrapper>
                <Header />
                {loading ? <Loading /> : children}
            </Wrapper>
        </>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.element.isRequired,
};

export default DefaultLayout;
