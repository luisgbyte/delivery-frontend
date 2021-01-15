import produce from 'immer';

const INITIAL_STATE = {
    orders: null,
};

export default function order(state = INITIAL_STATE, action) {
    switch (action.type) {
        case '@order/ORDER_REQUEST_SUCCESS':
            return produce(state, (draft) => {
                draft.orders = action.payload.orders;
            });
        default:
            return state;
    }
}
