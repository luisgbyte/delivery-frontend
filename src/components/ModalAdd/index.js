import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { FiCheckSquare } from 'react-icons/fi';
import { Form } from './styles';

import Modal from '../Modal';
import Input from '../Input';
import Select from '../Select';
import ImageInput from '../ImageInput';

import { toggleModalAdd } from '~/store/modules/modal/actions';
import { productCreate } from '~/store/modules/product/actions';

import api from '~/services/api';

function ModalAdd({ isOpen }) {
    const dispatch = useDispatch();

    const [categories, setCategories] = useState([]);
    const [fileIdAdd, setFileIdAdd] = useState();

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categories');

            const newObjCategorie = data.map((categorie) => ({
                value: categorie.id,
                label: categorie.name,
            }));

            setCategories(newObjCategorie);
        }
        // setFileIdAdd(null);
        loadCategories();
    }, []);

    function handleSubmit(data) {
        data.file = fileIdAdd;

        setFileIdAdd(null);

        dispatch(productCreate(data));
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
                    <h1>Novo Produto</h1>
                    <Input name="name" placeholder="Ex: Pizza Italiana" />
                    <Input name="price" placeholder="Ex: 19.90" />
                    <Input name="description" placeholder="Ex: Dois sabores" />
                    <Select
                        name="category_id"
                        options={categories}
                        placeholder="Selecione..."
                    />
                    <ImageInput setFileId={setFileIdAdd} name="file_id" />
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
