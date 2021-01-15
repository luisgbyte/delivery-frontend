import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { orderRequestSuccess, orderRequestFailure } from './actions';

export function* requestOrders() {
    try {
        const response = yield call(api.get, 'tracker');

        yield put(orderRequestSuccess(response.data));
        toast.success('Pedidos carregados com sucesso!');
    } catch (err) {
        toast.error('Falha no carregamento de pedidos!');
        yield put(orderRequestFailure());
    }
}

export default all([takeLatest('@order/ORDER_REQUEST', requestOrders)]);
