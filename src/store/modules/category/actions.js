export function categoryRequest() {
    return {
        type: '@category/CATEGORY_REQUEST',
    };
}

export function categoryRequestSuccess(categories) {
    return {
        type: '@category/CATEGORY_REQUEST_SUCCESS',
        payload: { categories },
    };
}

export function categoryRequestFailure() {
    return {
        type: '@category/CATEGORY_REQUEST_FAILURE',
    };
}

export function categoryDelete(id) {
    return {
        type: '@category/CATEGORY_DELETE',
        payload: { id },
    };
}

export function categoryDeleteSuccess(id) {
    return {
        type: '@category/CATEGORY_DELETE_SUCCESS',
        payload: { id },
    };
}

export function categoryDeleteFailure() {
    return {
        type: '@category/CATEGORY_DELETE_FAILURE',
    };
}

export function categoryCreate(data) {
    return {
        type: '@category/CATEGORY_CREATE',
        payload: { data },
    };
}

export function categoryCreateSuccess(category) {
    return {
        type: '@category/CATEGORY_CREATE_SUCCESS',
        payload: { category },
    };
}

export function categoryCreateFailure() {
    return {
        type: '@category/CATEGORY_CREATE_FAILURE',
    };
}

export function categoryEdit(id) {
    return {
        type: '@category/CATEGORY_EDIT',
        payload: { id },
    };
}

export function categoryEditSuccess(category) {
    return {
        type: '@category/CATEGORY_EDIT_SUCCESS',
        payload: { category },
    };
}

export function categoryEditFailure() {
    return {
        type: '@category/CATEGORY_EDIT_FAILURE',
    };
}
