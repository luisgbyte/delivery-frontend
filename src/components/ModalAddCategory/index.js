import React from 'react';

import { useDispatch } from 'react-redux';
import { FiCheckSquare } from 'react-icons/fi';
import { Form } from './styles';

import Modal from '../Modal';
import Input from '../Input';

import { toggleModalAdd } from '~/store/modules/modal/actions';
import { categoryCreate } from '~/store/modules/category/actions';

function ModalAddCategory({ isOpen }) {
    const dispatch = useDispatch();

    async function handleSubmit(data) {
        dispatch(categoryCreate(data));
    }

    return (
        <>
            <Modal
                isOpen={isOpen}
                setIsOpen={() => {
                    dispatch(toggleModalAdd());
                }}
            >
                <Form onSubmit={handleSubmit}>
                    <h1>Nova Categoria</h1>
                    <Input name="name" placeholder="Ex: Pizzas" />
                    <button type="submit">
                        <p className="text">Adicionar Categoria</p>
                        <div className="icon">
                            <FiCheckSquare size={24} />
                        </div>
                    </button>
                </Form>
            </Modal>
        </>
    );
}

export default ModalAddCategory;
