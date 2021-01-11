import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import {compose} from "redux";
import connect from "react-redux/lib/connect/connect";

class Map extends React.Component {

    render() {
        return (
            <div className={"mapFooter"}>
            <MapContainer
                className="markercluster-map"
                center={[this.props.lat, this.props.lng]}
                zoom={1}
                maxZoom={11}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[this.props.lat, this.props.lng]}>
                    <Popup>
                    </Popup>
                </Marker>
            </MapContainer>
            </div>
        );
    }
}


let mapStateToProps = (state) => {
    return {
        lat: state.AddressPage.location.lat,
        lng: state.AddressPage.location.lng
    }
}


export default compose(connect(mapStateToProps))
(Map)