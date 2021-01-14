import produce from 'immer';

const INITIAL_STATE = {
    categories: null,
};

export default function category(state = INITIAL_STATE, action) {
    switch (action.type) {
        case '@category/CATEGORIES_REQUEST_SUCCESS':
            return produce(state, (draft) => {
                draft.categories = action.payload.categories;
            });
        default:
            return state;
    }
}
