import produce from 'immer';

const INITIAL_STATE = {
    orders: null,
    count: null,
};

export default function order(state = INITIAL_STATE, action) {
    switch (action.type) {
        case '@order/ORDER_REQUEST_SUCCESS':
            return produce(state, (draft) => {
                const { rows, count } = action.payload.orders;

                draft.orders = rows;
                draft.count = count;
            });
        default:
            return state;
    }
}
