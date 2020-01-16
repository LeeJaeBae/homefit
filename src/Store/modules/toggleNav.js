const TOGGLE_NAV = "toggleNav/TOGGLE_NAV";

export const toggleNav = bool => ({ type: TOGGLE_NAV, bool });

const initialState = {
  bool: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_NAV:
      if (state.bool) {
        return {
          ...state,
          bool: false
        };
      } else {
        return {
          ...state,
          bool: true
        };
      }
    default:
      return state;
  }
};
