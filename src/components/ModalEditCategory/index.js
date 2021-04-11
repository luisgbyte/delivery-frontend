import React from 'react';

import { useDispatch } from 'react-redux';
import { FiCheckSquare } from 'react-icons/fi';
import { Form } from './styles';

import Modal from '../Modal';
import Input from '../Input';

import { toggleModalEdit } from '~/store/modules/modal/actions';
import { categoryEdit } from '~/store/modules/category/actions';

function ModalEditCategory({ isOpen, editingProduct }) {
    const dispatch = useDispatch();

    async function handleSubmit(data) {
        dispatch(categoryEdit(data, editingProduct.id));
    }

    return (
        <>
            <Modal
                isOpen={isOpen}
                setIsOpen={() => {
                    dispatch(toggleModalEdit());
                }}
            >
                <Form onSubmit={handleSubmit} initialData={editingProduct}>
                    <h1 style={{ fontSize: '1.8rem' }}>Editar Categoria</h1>
                    <Input name="name" placeholder="Ex: Pizzas" />
                    <button type="submit">
                        <p className="text">Editar Categoria</p>
                        <div className="icon">
                            <FiCheckSquare size="2rem" />
                        </div>
                    </button>
                </Form>
            </Modal>
        </>
    );
}

export default ModalEditCategory;
