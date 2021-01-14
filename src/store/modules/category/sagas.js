import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { categoriesRequestSuccess, categoriesRequestFailure } from './actions';

export function* categoriesRequest() {
    try {
        const response = yield call(api.get, 'categories');

        yield put(categoriesRequestSuccess(response.data));
    } catch (err) {
        toast.error('Erro ao carregar categorias!');

        yield put(categoriesRequestFailure());
    }
}

export default all([
    takeLatest('@category/CATEGORIES_REQUEST', categoriesRequest),
]);
