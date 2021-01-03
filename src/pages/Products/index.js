import React, { useEffect, useState } from 'react';

import { toast } from 'react-toastify';
import api from '~/services/api';
import { ProductsContainer } from './styles';
import CardProduct from '~/components/CardProduct';

function Products() {
    const [products, setProducts] = useState('');

    useEffect(() => {
        async function loadProducts() {
            const { data } = await api.get('products');

            setProducts(data);
        }

        loadProducts();
    }, []);

    async function handleDelete(id) {
        try {
            await api.delete(`products/${id}`);

            setProducts(products.filter((product) => product.id !== id));

            toast.success('Produto deletado com sucesso!');
        } catch (err) {
            toast.error('Ocorreu um error na deleção!');
        }
    }

    return (
        <ProductsContainer>
            {products &&
                products.map((product) => (
                    <CardProduct
                        key={product.id}
                        product={product}
                        handleDelete={handleDelete}
                        // handleEditFood={handleEditFood}
                    />
                ))}
        </ProductsContainer>
    );
}

export default Products;
