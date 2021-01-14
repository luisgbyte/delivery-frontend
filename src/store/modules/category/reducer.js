import produce from 'immer';

const INITIAL_STATE = {
    categories: null,
};

export default function category(state = INITIAL_STATE, action) {
    switch (action.type) {
        case '@category/CATEGORY_REQUEST_SUCCESS':
            return produce(state, (draft) => {
                draft.categories = action.payload.categories;
            });

        case '@category/CATEGORY_CREATE_SUCCESS':
            return produce(state, (draft) => {
                draft.categories.push(action.payload.category);
            });

        case '@category/CATEGORY_DELETE_SUCCESS':
            return produce(state, (draft) => {
                const { id } = action.payload;

                draft.categories = draft.categories.filter(
                    (item) => item.id !== id
                );
            });
        default:
            return state;
    }
}
