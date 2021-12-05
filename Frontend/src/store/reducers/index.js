import { combineReducers } from "redux";
import user from "./user_reducer";
import game from "./game_reducer";
const rootReducer = combineReducers({
  user,
  game,
});

export default rootReducer;
