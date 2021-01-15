export function orderRequest() {
    return {
        type: '@order/ORDER_REQUEST',
    };
}

export function orderRequestSuccess(orders) {
    return {
        type: '@order/ORDER_REQUEST_SUCCESS',
        payload: { orders },
    };
}

export function orderRequestFailure() {
    return {
        type: '@order/ORDER_REQUEST_FAILURE',
    };
}
