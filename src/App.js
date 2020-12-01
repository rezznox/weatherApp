import WeatherCarrousel from "./components/weather-carrousel";
import { connect } from "react-redux";
import { groupByCntsFn } from "./utils/date";

function App(props) {
  return (
    <div className="App">
      <WeatherCarrousel days={props.days ? props.days : {}}/>
    </div>
  );
}

function mapStateToProps(state) {
  return {days: state.weatherReducer.list ?
          groupByCntsFn(state.weatherReducer.list) :
          {}};
}

export default connect(mapStateToProps)(App);