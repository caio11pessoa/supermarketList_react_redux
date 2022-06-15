import supermarketListReducer, {
  incrementItem,
  decrement,
  incrementByAmount,
} from './supermarketListSlice';

describe('supermarketList reducer', () => {
  const initialState = {
    amount: Number(0),
    totalItems: Number(0),
    items: [],
  };
  it('should handle initial state', () => {
    expect(supermarketListReducer(undefined, { type: 'unknown' })).toEqual({
      amount: Number(0),
      totalItems: Number(0),
      items: [],
    });
  });

  it('should handle incrementItem', () => {
    const actual = supermarketListReducer(initialState, incrementItem({name:"biscoito", cost:10, desc:"desc", quantity: 1}));
    expect(actual.totalItems).toEqual(1);
  });

  // it('should handle decrement', () => {
  //   const actual = supermarketListReducer(initialState, decrement());
  //   expect(actual.value).toEqual(2);
  // });

  // it('should handle incrementByAmount', () => {
  //   const actual = supermarketListReducer(initialState, incrementByAmount(2));
  //   expect(actual.value).toEqual(5);
  // });
});
