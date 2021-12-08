import {
  GET_COMMENT,
  CREATE_COMMENT,
  DELETE_COMMENT,
  EDITE_COMMENT,
} from "../actions/types";

const commentState = {
  comments: {},
  gameId: 0,
};

const commentReducer = (state = commentState, action) => {
  switch (action.type) {
    case GET_COMMENT:
      return {
        ...state,
        comments: action.payload.comments,
        gameId: action.payload.gameId,
      };
    case DELETE_COMMENT:
      return {
        ...state,
        comments: action.payload.comments,
      };
    case CREATE_COMMENT:
      return {
        ...state,
        comments: action.payload.comments,
      };
    case EDITE_COMMENT:
      return {
        ...state,
        comments: action.payload.comments,
      }
    default:
      return state;
  }
};

export default commentReducer;
