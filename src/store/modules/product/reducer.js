import produce from 'immer';

const INITIAL_STATE = {
    products: null,
    loading: false,
};

export default function user(state = INITIAL_STATE, action) {
    switch (action.type) {
        case '@product/PRODUCT_SUCCESS':
            return produce(state, (draft) => {
                draft.products = action.payload.products;
                draft.loading = false;
            });

        case '@product/PRODUCT_FAILURE':
            return produce(state, (draft) => {
                draft.loading = false;
            });

        case '@product/PRODUCT_CREATE':
            return produce(state, (draft) => {
                draft.loading = true;
            });

        case '@product/PRODUCT_CREATE_SUCCESS':
            return produce(state, (draft) => {
                draft.products.push(action.payload.product);
                draft.loading = false;
            });

        case '@product/PRODUCT_EDIT':
            return produce(state, (draft) => {
                draft.loading = true;
            });

        case '@product/PRODUCT_EDIT_SUCCESS':
            return produce(state, (draft) => {
                const newProduct = action.payload.data;

                draft.products = draft.products.map((item) =>
                    item.id === newProduct.id ? newProduct : item
                );

                draft.loading = false;
            });

        case '@product/PRODUCT_DELETE_SUCCESS':
            return produce(state, (draft) => {
                draft.products = state.products.filter(
                    (product) => product.id !== action.payload.id
                );
            });

        default:
            return state;
    }
}
