import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { FiPlusSquare } from 'react-icons/fi';
import Swal from 'sweetalert2';
import { Content, ProductsContainer, ButtonContainer } from './styles';

import CardProduct from '~/components/CardProduct';
import Pagination from '~/components/Pagination';
import ModalEditProduct from '~/components/ModalEditProduct';
import ModalAddProduct from '~/components/ModalAddProduct';

import { productRequest, productDelete } from '~/store/modules/product/actions';
import { toggleModalEdit, toggleModalAdd } from '~/store/modules/modal/actions';

function Product() {
    const [editingProduct, setEditingProduct] = useState({});
    const [page, setPage] = useState(1);

    const dispatch = useDispatch();

    const { products, count } = useSelector((state) => state.product);
    const { editModalOpen, addModalOpen } = useSelector((state) => state.modal);

    useEffect(() => {
        // if (!products) {
        dispatch(productRequest(page));
        // }
    }, [page]);

    function handleEdit(product) {
        dispatch(toggleModalEdit());
        setEditingProduct(product);
    }

    function handleDelete(id) {
        Swal.fire({
            title: 'Deseja excluir produto?',
            text: 'Você não poderá reverter isso!',
            icon: 'error',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Excluir',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(productDelete(id));
            }
        });
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
                        <div className="text" style={{ fontSize: '1.3rem' }}>
                            Novo Produto
                        </div>
                        <div className="icon">
                            <FiPlusSquare size="2.4rem" />
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
                <Pagination
                    limit={6}
                    total={count}
                    page={page}
                    setPage={setPage}
                />
            </Content>
        </>
    );
}

export default Product;
