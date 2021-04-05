import produce from 'immer';

const INITIAL_STATE = {
    categories: null,
    loading: false,
};

export default function category(state = INITIAL_STATE, action) {
    switch (action.type) {
        case '@category/CATEGORY_REQUEST':
            return produce(state, (draft) => {
                draft.loading = true;
            });

        case '@category/CATEGORY_REQUEST_SUCCESS':
            return produce(state, (draft) => {
                draft.categories = action.payload.categories;
                draft.loading = false;
            });

        case '@category/CATEGORY_EDIT':
            return produce(state, (draft) => {
                draft.loading = true;
            });

        case '@category/CATEGORY_EDIT_SUCCESS':
            return produce(state, (draft) => {
                const newCategory = action.payload.data;

                draft.categories = draft.categories.map((item) =>
                    item.id === newCategory.id ? newCategory : item
                );

                draft.loading = false;
            });

        case '@category/CATEGORY_EDIT_FAILURE':
            return produce(state, (draft) => {
                draft.loading = false;
            });

        case '@category/CATEGORY_CREATE':
            return produce(state, (draft) => {
                draft.loading = true;
            });

        case '@category/CATEGORY_CREATE_SUCCESS':
            return produce(state, (draft) => {
                draft.categories.push(action.payload.category);
                draft.loading = false;
            });

        case '@category/CATEGORY_CREATE_FAILURE':
            return produce(state, (draft) => {
                draft.loading = false;
            });

        case '@category/CATEGORY_DELETE':
            return produce(state, (draft) => {
                draft.loading = true;
            });

        case '@category/CATEGORY_DELETE_SUCCESS':
            return produce(state, (draft) => {
                const { id } = action.payload;

                draft.categories = draft.categories.filter(
                    (item) => item.id !== id
                );

                draft.loading = false;
            });

        default:
            return state;
    }
}
