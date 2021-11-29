import {
  ROUND32_1_15,
  ROUND32_16,
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
  title: "",
  description: "",
  sequence: 0,
  base: [],
  views: [],
  end: false,
  round: 0,
  round16: [],
  round8: [],
  round4: [],
  round2: [],
  champion: "",
  createAt: "",
  updateAt: "",
  userId: "",
  author: "",
};

const gameReducer = (state = gamestate, action) => {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        gameId: action.payload.id,
        title: action.payload.title,
        description: action.payload.description,
        round: action.payload.images.length,
        base: action.payload.images,
        views: [action.payload.images[0], action.payload.images[1]],
        userId: action.payload.userId,
        author: action.payload.author.name,
      };

    case ROUND32_1_15:
      var count = state.sequence + 1;
      return {
        ...state,
        sequence: count,
        views: [state.base[2 * count], state.base[2 * count + 1]],
        round16: action.payload.round16,
      };

    case ROUND32_16:
      return {
        ...state,
        sequence: 0,
        views: [state.round16[0], state.round16[1]],
        round16: action.payload.round16,
        round: 16,
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
        views: [state.round8[0], state.round8[1]],
        round8: action.payload.round8,
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
        views: [state.round4[0], state.round4[1]],
        round4: action.payload.round4,
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
        views: [view[0], view[1]],
        round2: action.payload.round2,
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
