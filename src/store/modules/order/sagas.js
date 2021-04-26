import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import {
    orderRequestSuccess,
    orderRequestFailure,
    orderStatusChangeSuccess,
    orderStatusChangeFailure,
} from './actions';

export function* requestOrders({ payload }) {
    try {
        const { page } = payload;

        const response = yield call(api.get, 'tracker', {
            params: { page },
        });

        yield put(orderRequestSuccess(response.data));
        toast.success('Pedidos carregados com sucesso!');
    } catch (err) {
        toast.error('Falha no carregamento de pedidos!');
        yield put(orderRequestFailure());
    }
}

export function* changeStatus({ payload }) {
    try {
        const { id, status } = payload;

        const response = yield call(api.put, `orders/${id}/status`, { status });
        yield put(orderStatusChangeSuccess(response.data));

        toast.info('Status do pedido alterado com sucesso!');
    } catch (err) {
        const { error } = err.response.data;
        toast.error(error);

        yield put(orderStatusChangeFailure());
    }
}

export default all([
    takeLatest('@order/ORDER_REQUEST', requestOrders),
    takeLatest('@order/ORDER_STATUS_CHANGE', changeStatus),
]);
