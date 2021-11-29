import {
  ROUND16_1_7,
  ROUND16_8,
  ROUND8_1_3,
  ROUND8_4,
  ROUND4_1,
  ROUND4_2,
  ROUND_FINAL,
  GAME_RESET,
  START_GAME,
} from "../actions/types";

const gamestate = {
  gameId: "",
  gameTitle: "",
  gameDescription: "",
  sequence: 0,
  base: [],
  views: [],
  end: false,
  round: 0,
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
        round: action.payload.base.length,
        base: action.payload.base,
        views: [action.payload.base[0], action.payload.base[1]],
      };

    case ROUND16_1_7:
      var count = state.sequence + 1;
      console.log(action.payload.round8);
      return {
        ...state,
        sequence: count,
        views: [state.base[2 * count], state.base[2 * count + 1]],
        round8: action.payload.round8,
      };

    case ROUND16_8:
      return {
        ...state,
        sequence: 0,
        round8: action.payload.round8,
        views: [state.round8[0], state.round8[1]],
        round: 8,
      };

    case ROUND8_1_3:
      var count = state.sequence + 1;
      console.log(action.payload.round4);
      return {
        ...state,
        sequence: state.sequence + 1,
        views: [state.round8[2 * count], state.round8[2 * count + 1]],
        round4: action.payload.round4,
      };

    case ROUND8_4:
      return {
        ...state,
        sequence: 0,
        round4: action.payload.round4,
        views: [state.round4[0], state.round4[1]],
        round: 4,
      };

    case ROUND4_1:
      var count = state.sequence + 1;
      console.log(action.payload.round2);
      return {
        ...state,
        sequence: state.sequence + 1,
        views: [state.round4[2 * count], state.round4[2 * count + 1]],
        round2: action.payload.round2,
      };

    case ROUND4_2:
      const view = action.payload.round2;
      return {
        ...state,
        sequence: 0,
        round2: action.payload.round2,
        views: [view[0], view[1]],
        round: 2,
      };

    case ROUND_FINAL:
      return {
        ...state,
        end: true,
        champion: action.payload,
      };

    case GAME_RESET:
      return {
        ...state,
        gameId: "",
        gameTitle: "",
        gameDescription: "",
        sequence: 0,
        base: [],
        views: [],
        end: false,
        round: 16,
        round8: [],
        round4: [],
        round2: [],
        champion: "",
      };

    default:
      return state;
  }
};

export default gameReducer;
