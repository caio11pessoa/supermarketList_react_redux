import supermarketListReducer, {
  increment,
  decrement,
  incrementByAmount,
} from './supermarketListSlice';

describe('supermarketList reducer', () => {
  const initialState = {
    value: 3,
    status: 'idle',
  };
  it('should handle initial state', () => {
    expect(supermarketListReducer(undefined, { type: 'unknown' })).toEqual({
      value: 0,
      status: 'idle',
    });
  });

  it('should handle increment', () => {
    const actual = supermarketListReducer(initialState, increment());
    expect(actual.value).toEqual(4);
  });

  it('should handle decrement', () => {
    const actual = supermarketListReducer(initialState, decrement());
    expect(actual.value).toEqual(2);
  });

  it('should handle incrementByAmount', () => {
    const actual = supermarketListReducer(initialState, incrementByAmount(2));
    expect(actual.value).toEqual(5);
  });
});
