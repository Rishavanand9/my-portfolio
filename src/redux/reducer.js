const initialState = {
  clickedTitle: "about",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CLICKED_TITLE":
      return {
        ...state,
        clickedTitle: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
