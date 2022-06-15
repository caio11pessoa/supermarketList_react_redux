import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchSupermarketList } from './supermarketListAPI';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  amount: Number(0),
  totalItems: Number(0),
  items: [],
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const incrementAsync = createAsyncThunk(
  'supermarketList/fetchSupermarketList',
  async (amount) => {
    const response = await fetchSupermarketList(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const supermarketListSlice = createSlice({
  name: 'supermarketListReducer',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    decrementItem: (state, action) => {
      state.amount -= action.payload.specific.cost * action.payload.specific.quantity;
      state.totalItems -= action.payload.specific.quantity;
      state.items = action.payload.all.filter(item => item.uuid !== action.payload.specific.uuid)

    },
    incrementItem: (state, action) => {

      action.payload.uuid = uuidv4()

      state.amount += action.payload.cost * action.payload.quantity;
      state.totalItems += action.payload.quantity;
      state.items.push(action.payload)
      // console.log(state.items[0].quantity, state.amount);

    },
  },
});

export const { decrementItem, incrementItem } = supermarketListSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.supermarketList.value)`
export const selectAmount = (state) => state.supermarketList.amount;
export const selectItems = (state) => state.supermarketList.items;
export const selectTotalItems = (state) => state.supermarketList.totalItems;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default supermarketListSlice.reducer;
