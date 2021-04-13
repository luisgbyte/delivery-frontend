import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Loading from '~/components/Loading';
import Header from '~/components/Header';

import { Wrapper } from './styles';

function DefaultLayout({ children }) {
    const loadingProduct = useSelector((state) => state.product.loading);
    // const loadingCategory = useSelector((state) => state.category.loading);
    const loadingOrder = useSelector((state) => state.order.loading);

    return (
        <>
            <Wrapper>
                <Header />
                {loadingProduct || loadingOrder ? <Loading /> : children}
            </Wrapper>
        </>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.element.isRequired,
};

export default DefaultLayout;
