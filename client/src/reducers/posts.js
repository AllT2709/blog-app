import {
  CREATE,
  DELETE,
  FETCH_ALL,
  LIKE_POST,
  UPDATE,
} from "../constants/actionsTypes";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...state, action.payload];
    case LIKE_POST:
    case UPDATE:
      return state.map((p) =>
        p._id == action.payload._id ? action.payload : p
      );
    case DELETE:
      return state.filter((p) => p._id !== action.payload);
    default:
      return state;
  }
};
