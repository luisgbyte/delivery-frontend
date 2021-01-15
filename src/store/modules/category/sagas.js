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
    categoryEditSuccess,
    categoryEditFailure,
} from './actions';

import { toggleModalAdd, toggleModalEdit } from '../modal/actions';

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
        toast.success('Categoria deletada com sucesso!');
    } catch (err) {
        yield put(categoryDeleteFailure());
        toast.error('Error ao deletar categoria!');
    }
}

export function* categoriesEdit({ payload }) {
    try {
        const { data, id } = payload;
        const response = yield call(api.put, `categories/${id}`, data);

        yield put(categoryEditSuccess(response.data));
        yield put(toggleModalEdit());
        toast.success('Categoria editada com sucesso!');
    } catch (err) {
        yield put(categoryEditFailure());
        toast.error('Erro ao editar categoria!');
    }
}

export default all([
    takeLatest('@category/CATEGORY_DELETE', categoriesDelete),
    takeLatest('@category/CATEGORY_EDIT', categoriesEdit),
    takeLatest('@category/CATEGORY_CREATE', categoriesCreate),
    takeLatest('@category/CATEGORY_REQUEST', categoriesRequest),
]);
