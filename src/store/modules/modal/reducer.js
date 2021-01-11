import produce from 'immer';

const INITIAL_STATE = {
    editModalOpen: false,
    addModalOpen: false,
};

export default function modal(state = INITIAL_STATE, action) {
    switch (action.type) {
        case '@modal/TOGGLE_MODAL_EDIT':
            return produce(state, (draft) => {
                draft.editModalOpen = !state.editModalOpen;
            });
        case '@modal/TOGGLE_MODAL_ADD':
            return produce(state, (draft) => {
                draft.addModalOpen = !state.addModalOpen;
            });
        case '@product/PRODUCT_CREATE_SUCCESS':
            return produce(state, (draft) => {
                draft.addModalOpen = !state.addModalOpen;
            });
        default:
            return state;
    }
}
