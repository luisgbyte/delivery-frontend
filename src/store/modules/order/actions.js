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

export function orderStatusChange(id, status) {
    return {
        type: '@order/ORDER_STATUS_CHANGE',
        payload: { id, status },
    };
}

export function orderStatusChangeSuccess(data) {
    return {
        type: '@order/ORDER_STATUS_CHANGE_SUCCESS',
        payload: { data },
    };
}

export function orderStatusChangeFailure() {
    return {
        type: '@order/ORDER_STATUS_CHANGE_FAILURE',
    };
}
