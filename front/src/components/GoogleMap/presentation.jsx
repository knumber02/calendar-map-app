import React , {useState, useEffect} from "react";
import GoogleMapReact from "google-map-react";
import Marker from "../Marker"
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const SimpleMap = () => {
    const [center, setCenter ] = useState({lat: "", lng:""})
    const [zoom, setZoom] = useState(15);

    const [currentPosition, setCurrentPosition] = useState();

    const success = data => {
        const currentPosition = {
            lat: data.coords.latitude,
            lng: data.coords.longitude
        };
        setCurrentPosition(currentPosition);
        setCenter(currentPosition);
    }
    const error = data => {
        const currentPosition = {
            lat: 35.667345081692176,
            lng: 139.7401442420512
        };
        setCurrentPosition(currentPosition);
        setCenter(currentPosition);
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success, error);
    }, []);

    return (
        <div style={{ height: "100vh", width: "100%"}}>
            <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyDB-vlT6hre9kSL7e_NhzBL1Ige5Q56Dmc"}}
            defaultCenter={center}
            defaultZoom={zoom}
            >
                {currentPosition ? (
                    <Marker
                        lat={currentPosition.lat}
                        lng={currentPosition.lng}
                    />
                ): null}
            </GoogleMapReact>
        </div>
    )
}
export default SimpleMap;