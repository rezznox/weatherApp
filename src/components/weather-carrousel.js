import WeatherCard from './weather-card';
import { CITY_NAME} from '../constants/index';

export default function (props) {
    return (
        <div>
        <div> Ciudad: {CITY_NAME} </div>
        {
            props.days ? 
            Object.keys(props.days).map((key)=> {
                return <WeatherCard key={key} data={props.days[key]}/>
            }) :
            <div> No forecast </div>
        }
        </div>);
}

