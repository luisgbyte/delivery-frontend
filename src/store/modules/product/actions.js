export function productRequest() {
    return {
        type: '@product/PRODUCT_REQUEST',
    };
}

export function productSuccess(products) {
    return {
        type: '@product/PRODUCT_SUCCESS',
        payload: { products },
    };
}

export function productFailure() {
    return {
        type: '@product/PRODUCT_FAILURE',
    };
}

export function productDelete(id) {
    return {
        type: '@product/PRODUCT_DELETE',
        payload: { id },
    };
}

export function productDeleteSuccess(id) {
    return {
        type: '@product/PRODUCT_DELETE_SUCCESS',
        payload: { id },
    };
}

export function productCreate(data) {
    return {
        type: '@product/PRODUCT_CREATE',
        payload: { data },
    };
}

export function productCreateSuccess(product) {
    return {
        type: '@product/PRODUCT_CREATE_SUCCESS',
        payload: { product },
    };
}

export function productEdit(data, id) {
    return {
        type: '@product/PRODUCT_EDIT',
        payload: { data, id },
    };
}

export function productEditSuccess(data) {
    return {
        type: '@product/PRODUCT_EDIT_SUCCESS',
        payload: { data },
    };
}
