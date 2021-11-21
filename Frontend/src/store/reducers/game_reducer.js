import { START_GAME } from "../actions/types";

const gamestate = {
  gameId: "",
  sequnce: 0,
  base: [],
  views: [],
  end: false,
  round: 16,
  round8: [],
  round4: [],
  round2: [],
  champion: "",
};
const gameReducer = (state = gamestate, action) => {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        gameId: action.payload.gameId,
        base: action.payload.base,
        views: [action.payload.base[0], action.payload.base[1]],
      };
    default:
      return state;
  }
};

export default gameReducer;
