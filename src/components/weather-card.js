import { Link } from "react-router-dom";

export default function(props) {
    const date = props.data ? props.data[0].dt_txt.split(' ')[0] : '';
    return (<div>
        {<Link to={"/details/" + date}>{date}</Link>}
    </div>);
}