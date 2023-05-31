import { createStore } from 'redux';

// Define the initial state
const initialState = {
  clickedTitle: 'about'
};

// Define the reducer function to handle state changes
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CLICKED_TITLE':
      return {
        ...state,
        clickedTitle: action.payload
      };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(reducer);

export default store;
