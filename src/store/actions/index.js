import {REPLACE_WEATHER_DATA} from './actionTypes';

export const replaceWeatherData = content => {
    return {
        type: REPLACE_WEATHER_DATA,
        payload: content
    }
}
