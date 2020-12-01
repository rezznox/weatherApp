import axios from 'axios';
import { connect } from 'react-redux';
import {replaceWeatherData} from '../store/actions/index';
import {API_KEY, CITY_NAME} from '../constants/index';

function Init(props) {

    if (!props.data) {
        axios(`https://api.openweathermap.org/data/2.5/forecast?q=${CITY_NAME}&appid=${API_KEY}&lang=es&units=metric`)
        .then(response => {
            props.replaceWeatherData(response.data);
        });
    }

    return (<></>);
}

function mapStateToProps(state) {
    return {data: state.weatherReducer.list ?
        state.weatherReducer.list :
        false};
}

export default connect(
    mapStateToProps,
    {replaceWeatherData}
)(Init);