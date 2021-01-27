import produce from 'immer';

const INITIAL_STATE = {
    products: null,
    count: null,
    loading: false,
};

export default function products(state = INITIAL_STATE, action) {
    switch (action.type) {
        // case '@product/PRODUCT_REQUEST': // Request
        //     return produce(state, (draft) => {
        //         draft.loading = true;
        //     });

        case '@product/PRODUCT_SUCCESS': // Request
            return produce(state, (draft) => {
                const { rows, count } = action.payload.products;

                draft.products = rows;
                draft.count = count;

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

        case '@product/PRODUCT_STOCKED_SUCCESS':
            return produce(state, (draft) => {
                const { id, stocked } = action.payload.data;

                const index = draft.products.findIndex(
                    (item) => item.id === id
                );

                draft.products[index].stocked = stocked;
            });

        default:
            return state;
    }
}
