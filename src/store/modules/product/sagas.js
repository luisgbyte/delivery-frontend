import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import {
    productSuccess,
    productFailure,
    productDeleteSuccess,
    productCreateSuccess,
    productEditSuccess,
} from './actions';

import { toggleModalEdit } from '../modal/actions';

export function* requestProducts() {
    try {
        const response = yield call(api.get, 'products');

        yield put(productSuccess(response.data));
    } catch (err) {
        yield put(productFailure());
        toast.error('Erro ao carregar dados!');
    }
}

export function* addProduct({ payload }) {
    try {
        const { data } = payload;

        // Creating package to send image
        const dataImage = new FormData();

        if (data.file) {
            dataImage.append('file', data.file);
        } else {
            throw new Error('Object undefined');
        }

        // Sending product image
        const uploadImage = yield call(api.post, 'files', dataImage);

        // Getting id if sending worked
        data.file_id = uploadImage.data.id;

        // Registering new product with existing data and image id
        const response = yield call(api.post, 'products', data);

        yield put(productCreateSuccess(response.data));

        toast.success('Produto cadastrado com sucesso!');
    } catch (err) {
        yield put(productFailure());
        toast.error('Ocorreu um error ao adicionar produto!');
    }
}

export function* editProduct({ payload }) {
    try {
        const { data, id } = payload;
        // Creating package to send image
        const dataImage = new FormData();

        // If there is no change, the image upload is discarded
        if (data.file) {
            dataImage.append('file', data.file);

            // Sending product image
            const uploadImage = yield call(api.post, 'files', dataImage);
            data.file_id = uploadImage.data.id;
        }

        console.tron.log('upload concluido...');

        const response = yield call(api.put, `products/${id}`, data);

        yield put(productEditSuccess(response.data));
        yield put(toggleModalEdit());

        toast.success('Produto editado com sucesso!');
    } catch (err) {
        yield put(productFailure());
        toast.error('Ocorreu um error ao editar produto!');
    }
}

export function* deleteProduct({ payload }) {
    try {
        const { id } = payload;
        yield call(api.delete, `products/${id}`);

        yield put(productDeleteSuccess(id));
        toast.success('Produto deletado com sucesso!');
    } catch (err) {
        toast.error('Ocorreu um error ao deletar produto!');
    }
}

export default all([
    takeLatest('@product/PRODUCT_REQUEST', requestProducts),
    takeLatest('@product/PRODUCT_CREATE', addProduct),
    takeLatest('@product/PRODUCT_EDIT', editProduct),
    takeLatest('@product/PRODUCT_DELETE', deleteProduct),
]);
