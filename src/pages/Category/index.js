import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { FiPlusSquare, FiEdit, FiTrash2 } from 'react-icons/fi';
import Swal from 'sweetalert2';
import {
    Content,
    Card,
    NoCategory,
    HeadContainer,
    CategoryContainer,
} from './styles';

import ModalAddCategory from '~/components/ModalAddCategory';
import ModalEditCategory from '~/components/ModalEditCategory';

import {
    categoryRequest,
    categoryDelete,
} from '~/store/modules/category/actions';

import { toggleModalEdit, toggleModalAdd } from '~/store/modules/modal/actions';

function Category() {
    const dispatch = useDispatch();
    const [editingProduct, setEditingProduct] = useState({});

    const { addModalOpen, editModalOpen } = useSelector((state) => state.modal);
    const { categories } = useSelector((state) => state.category);

    useEffect(() => {
        if (!categories) {
            dispatch(categoryRequest());
        }
    }, []);

    function handleEdit(category) {
        dispatch(toggleModalEdit());
        setEditingProduct(category);
    }

    function handleDelete(id) {
        Swal.fire({
            title: 'Excluir categoria?',
            text: 'Você não poderá reverter isso!',
            icon: 'error',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Excluir',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(categoryDelete(id));
            }
        });
    }

    return (
        <>
            <ModalAddCategory isOpen={addModalOpen} />
            <ModalEditCategory
                isOpen={editModalOpen}
                editingProduct={editingProduct}
            />
            <Content>
                <Card>
                    <HeadContainer>
                        <button
                            type="button"
                            onClick={() => {
                                dispatch(toggleModalAdd());
                            }}
                        >
                            <div
                                className="text"
                                style={{ fontSize: '1.3rem' }}
                            >
                                Nova Categoria
                            </div>
                            <div className="icon">
                                <FiPlusSquare size="2.4rem" />
                            </div>
                        </button>
                    </HeadContainer>
                    <CategoryContainer>
                        {categories?.length === 0 ? (
                            <NoCategory>
                                <h1 style={{ fontSize: '2rem' }}>
                                    Não existem categorias cadastradas.
                                </h1>
                            </NoCategory>
                        ) : (
                            <table>
                                <thead>
                                    <tr />
                                </thead>
                                <tbody>
                                    {categories &&
                                        categories.map((category) => (
                                            <tr key={category.id}>
                                                <td>{category.name}</td>
                                                <td>
                                                    <div>
                                                        <button
                                                            type="button"
                                                            onClick={() => {
                                                                handleEdit(
                                                                    category
                                                                );
                                                            }}
                                                        >
                                                            <FiEdit size="1.8rem" />
                                                        </button>
                                                        <button type="button">
                                                            <FiTrash2
                                                                size="1.8rem"
                                                                onClick={() => {
                                                                    handleDelete(
                                                                        category.id
                                                                    );
                                                                }}
                                                            />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        )}
                    </CategoryContainer>
                </Card>
            </Content>
        </>
    );
}

export default Category;
