import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { FiPlusSquare } from 'react-icons/fi';
import { Content, ProductsContainer, ButtonContainer } from './styles';

import CardProduct from '~/components/CardProduct';
import ModalEditProduct from '~/components/ModalEditProduct';
import ModalAddProduct from '~/components/ModalAddProduct';

import { productRequest, productDelete } from '~/store/modules/product/actions';
import { toggleModalEdit, toggleModalAdd } from '~/store/modules/modal/actions';

function Products() {
    const [editingProduct, setEditingProduct] = useState({});

    const dispatch = useDispatch();

    const { products } = useSelector((state) => state.product);
    const { editModalOpen, addModalOpen } = useSelector((state) => state.modal);

    useEffect(() => {
        if (!products) {
            dispatch(productRequest());
        }
    }, []);

    function handleEdit(product) {
        dispatch(toggleModalEdit());
        setEditingProduct(product);
    }

    function handleDelete(id) {
        dispatch(productDelete(id));
    }

    return (
        <>
            <ModalAddProduct isOpen={addModalOpen} />
            <ModalEditProduct
                isOpen={editModalOpen}
                editingProduct={editingProduct}
            />

            <Content>
                <ButtonContainer>
                    <button
                        type="button"
                        onClick={() => {
                            dispatch(toggleModalAdd());
                        }}
                    >
                        <div className="text">Novo Produto</div>
                        <div className="icon">
                            <FiPlusSquare size={24} />
                        </div>
                    </button>
                </ButtonContainer>
                <ProductsContainer>
                    {products &&
                        products.map((product) => (
                            <CardProduct
                                key={product.id}
                                product={product}
                                handleDelete={handleDelete}
                                handleEdit={handleEdit}
                            />
                        ))}
                </ProductsContainer>
            </Content>
        </>
    );
}

export default Products;
