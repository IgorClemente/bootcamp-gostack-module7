import producer from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return producer(state, draf => {
        const productIndex = state.findIndex(
          product => product.id === action.product.id
        );

        if (productIndex >= 0) {
          draf[productIndex].amount += 1;
        } else {
          draf.push({
            ...action.product,
            amount: 1,
          });
        }
      });
    case '@cart/REMOVE':
      return producer(state, draft => {
        const productIndex = state.findIndex(
          product => product.id === action.id
        );

        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });
    case '@cart/UPDATE_AMOUNT': {
      if (action.amount <= 0) {
        return state;
      }

      return producer(state, draft => {
        const productIndex = state.findIndex(
          product => product.id === action.id
        );

        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount);
        }
      });
    }
    default:
      return state;
  }
}
