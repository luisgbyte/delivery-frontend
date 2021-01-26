export function orderRequest(offset) {
    return {
        type: '@order/ORDER_REQUEST',
        payload: { offset },
    };
}

export function orderRequestSuccess(orders, count) {
    return {
        type: '@order/ORDER_REQUEST_SUCCESS',
        payload: { orders, count },
    };
}

export function orderRequestFailure() {
    return {
        type: '@order/ORDER_REQUEST_FAILURE',
    };
}
