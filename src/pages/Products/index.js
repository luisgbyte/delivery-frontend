import React, { useEffect, useState } from 'react';

import api from '~/services/api';

import { ProductsContainer } from './styles';
import Product from '~/components/Product';

function Products() {
    const [products, setProducts] = useState('');

    useEffect(() => {
        async function loadProducts() {
            const { data } = await api.get('products');

            setProducts(data);
        }

        loadProducts();
    }, []);

    return (
        <ProductsContainer>
            {products &&
                products.map((product) => (
                    <Product
                        key={product.id}
                        product={product}
                        // handleDelete={handleDeleteFood}
                        // handleEditFood={handleEditFood}
                    />
                ))}
        </ProductsContainer>
    );
}

export default Products;
