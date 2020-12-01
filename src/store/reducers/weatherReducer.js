import { REPLACE_WEATHER_DATA } from "../actions/actionTypes";

const initialState = {
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REPLACE_WEATHER_DATA: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
