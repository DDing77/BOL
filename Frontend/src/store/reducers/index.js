import { combineReducers } from "redux";
import user from "./user_reducer";
import game from "./game_reducer";
import comment from "./comment_reducer";

const rootReducer = combineReducers({
  user,
  game,
  comment,
});

export default rootReducer;
