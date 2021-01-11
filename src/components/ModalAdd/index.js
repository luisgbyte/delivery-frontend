import React, { useEffect, useState, useRef } from 'react';

import { useDispatch } from 'react-redux';
import { FiCheckSquare } from 'react-icons/fi';
import * as Yup from 'yup';
import { Form } from './styles';

import Modal from '../Modal';
import Input from '../Input';
import Select from '../Select';
import ImageInput from '../ImageInput';

import { toggleModalAdd } from '~/store/modules/modal/actions';
import { productCreate } from '~/store/modules/product/actions';

import api from '~/services/api';

function ModalAdd({ isOpen }) {
    const formRef = useRef(null);
    const dispatch = useDispatch();

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categories');

            const newObjCategorie = data.map((categorie) => ({
                value: categorie.id,
                label: categorie.name,
            }));

            setCategories(newObjCategorie);
        }

        loadCategories();
    }, []);

    async function handleSubmit(data, { reset }) {
        try {
            const schema = Yup.object().shape({
                name: Yup.string()
                    .min(4, 'O campo nome deve ter no mínimo 4 caracteres.')
                    .max(20, 'O campo nome deve ter no máximo 20 caracteres.')
                    .required('O nome do produto é obrigatório.'),
                price: Yup.number()
                    .typeError('O preço deve ser numerico.')
                    .min(1, 'O campo preço deve ter no mínimo 1 caractere.')
                    .max(5000, 'Muito caro.')
                    .required('O preço é obrigatório.'),
                description: Yup.string()
                    .required('A descrição é obrigatória.')
                    .min(4, 'O campo descrição de ter no mínimo 4 caracteres.')
                    .max(
                        20,
                        'O campo descrição deve ter no máximo 20 caracteres.'
                    ),
                category_id: Yup.number()
                    .typeError('A categoria é obrigatória.')
                    .required(),
                file: Yup.mixed()
                    .nullable()
                    .required('A imagem do produto é obrigatória.'),
            });

            await schema.validate(data, {
                abortEarly: false,
            });

            dispatch(productCreate(data));
            reset();
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const errorMessages = {};

                err.inner.forEach((error) => {
                    errorMessages[error.path] = error.message;
                });

                formRef.current.setErrors(errorMessages);
            }
        }
    }

    return (
        <>
            <Modal
                isOpen={isOpen}
                setIsOpen={() => {
                    dispatch(toggleModalAdd());
                }}
            >
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <h1>Novo Produto</h1>
                    <Input name="name" placeholder="Ex: Pizza Italiana" />
                    <Input name="price" placeholder="Ex: 19.90" />
                    <Input name="description" placeholder="Ex: Dois sabores" />
                    <Select
                        name="category_id"
                        options={categories}
                        placeholder="Selecione..."
                    />
                    <ImageInput name="file" />
                    <button type="submit">
                        <p className="text">Adicionar Produto</p>
                        <div className="icon">
                            <FiCheckSquare size={24} />
                        </div>
                    </button>
                </Form>
            </Modal>
        </>
    );
}

export default ModalAdd;
