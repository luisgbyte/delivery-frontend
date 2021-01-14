import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import {
    categoryRequestSuccess,
    categoryRequestFailure,
    categoryDeleteSuccess,
    categoryDeleteFailure,
    categoryCreateSuccess,
    categoryCreateFailure,
} from './actions';

import { toggleModalAdd } from '../modal/actions';

export function* categoriesRequest() {
    try {
        const response = yield call(api.get, 'categories');

        yield put(categoryRequestSuccess(response.data));
    } catch (err) {
        yield put(categoryRequestFailure());
        toast.error('Erro ao carregar categorias!');
    }
}

export function* categoriesCreate({ payload }) {
    try {
        const { data } = payload;

        const response = yield call(api.post, 'categories', data);

        yield put(categoryCreateSuccess(response.data));
        yield put(toggleModalAdd());

        toast.success('Categoria criada com sucesso!');
    } catch (err) {
        yield put(categoryCreateFailure());
        toast.error('Erro ao criar categoria!');
    }
}

export function* categoriesDelete({ payload }) {
    try {
        const { id } = payload;
        yield call(api.delete, `categories/${id}`);

        yield put(categoryDeleteSuccess(id));
        toast.success('Categoria deletado com sucesso!');
    } catch (err) {
        yield put(categoryDeleteFailure());
        toast.error('Ocorreu um error ao deletar a categoria!');
    }
}

export default all([
    takeLatest('@category/CATEGORY_DELETE', categoriesDelete),
    takeLatest('@category/CATEGORY_CREATE', categoriesCreate),
    takeLatest('@category/CATEGORY_REQUEST', categoriesRequest),
]);
