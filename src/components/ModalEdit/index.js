import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { FiCheckSquare } from 'react-icons/fi';
import { Form } from './styles';

import Modal from '../Modal';
import Input from '../Input';
import Select from '../Select';
import ImageInput from '../ImageInput';

import api from '~/services/api';

import { toggleModalEdit } from '~/store/modules/modal/actions';
import { productEdit } from '~/store/modules/product/actions';

function ModalEdit({ isOpen, editingProduct }) {
    const dispatch = useDispatch();

    const [categories, setCategories] = useState([]);
    const [fileIdEdit, setFileIdEdit] = useState();

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

        setFileIdEdit(null);
    }, [isOpen]);

    function handleSubmit(data) {
        data.file = fileIdEdit || editingProduct.file?.id;

        dispatch(productEdit(data, editingProduct.id));
    }

    const defaultSelect = () =>
        categories.find(
            (category) => category.value === editingProduct.category?.id
        );

    return (
        <Modal
            isOpen={isOpen}
            setIsOpen={() => {
                dispatch(toggleModalEdit());
            }}
        >
            <Form onSubmit={handleSubmit} initialData={editingProduct}>
                <h1>Editar Prato</h1>

                <Input name="name" placeholder="Ex: Moda Italiana" />

                <Input name="price" placeholder="Ex: 19.90" />

                <Input name="description" placeholder="Descrição" />

                <Select
                    name="category_id"
                    options={categories}
                    defaultValue={defaultSelect()}
                />

                <ImageInput setFileId={setFileIdEdit} name="file_id" />

                <button type="submit">
                    <div className="text">Editar Prato</div>
                    <div className="icon">
                        <FiCheckSquare size={24} />
                    </div>
                </button>
            </Form>
        </Modal>
    );
}

export default ModalEdit;
