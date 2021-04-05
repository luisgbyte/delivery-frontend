import produce from 'immer';

const INITIAL_STATE = {
    orders: null,
    count: null,
    loading: false,
};

export default function order(state = INITIAL_STATE, action) {
    switch (action.type) {
        // case '@order/ORDER_REQUEST':
        //     return produce(state, (draft) => {
        //         draft.loading = true;
        //     });

        case '@order/ORDER_REQUEST_SUCCESS':
            return produce(state, (draft) => {
                const { rows, count } = action.payload.orders;

                draft.orders = rows;
                draft.count = count;

                draft.loading = false;
            });

        case '@order/ORDER_STATUS_CHANGE_SUCCESS':
            return produce(state, (draft) => {
                const { id, status } = action.payload.data;

                const index = draft.orders.findIndex((item) => item.id === id);

                // if (status === 'Cancelado') {
                // draft.orders.splice(index, 1);
                // } else {
                draft.orders[index].status = status;
                // }
            });

        default:
            return state;
    }
}
