export function categoriesRequest() {
    return {
        type: '@category/CATEGORIES_REQUEST',
    };
}

export function categoriesRequestSuccess(categories) {
    return {
        type: '@category/CATEGORIES_REQUEST_SUCCESS',
        payload: { categories },
    };
}

export function categoriesRequestFailure() {
    return {
        type: '@category/CATEGORIES_REQUEST_FAILURE',
    };
}
