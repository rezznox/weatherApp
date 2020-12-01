import { useParams } from "react-router-dom";
import { groupByCntsFn } from '../../utils/date';
import { connect } from "react-redux";
import "./detail.css";

function Detail(props) {
    const {day} = useParams();
    const data = props.data[day];
    return (<div className="forecast-content">
        { data ? data.map((d)=> {
            return (<div className="forecast-3" key={d.dt}>
                        <div>{d.dt_txt}</div>
                        <img src={"http://openweathermap.org/img/w/" + d.weather[0].icon + ".png"}></img>
                        <div><b>Descripción: </b> {d.weather[0].description}</div>
                        <div><b>Temp: </b> {d.main.temp}</div>
                        <div><b>Temp max: </b> {d.main.temp_max}</div>
                        <div><b>Temp min: </b> {d.main.temp_min}</div>
                        <div><b>Feels like: </b> {d.main.feels_like}</div>
                        <div><b>Presion: </b> {d.main.pressure}</div>
                        <div><b>Humedad: </b> {d.main.humidity + '%'}</div>
                        <div><b>Velocidad de viento: </b> {d.wind.speed + 'km/h'}</div>
                    </div>)
        }): <></>}
    </div>);
}

function mapStateToProps(state) {
    return {data: state.weatherReducer.list ?
            groupByCntsFn(state.weatherReducer.list) :
            {}};
}

export default connect(mapStateToProps)(Detail);