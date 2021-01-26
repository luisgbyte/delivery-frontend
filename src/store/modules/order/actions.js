export function orderRequest(page) {
    return {
        type: '@order/ORDER_REQUEST',
        payload: { page },
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
