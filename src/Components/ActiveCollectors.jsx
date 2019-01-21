import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class ActiveCollectors extends Component {
    render() {
        return (
            <div>
                <Map google={this.props.google} zoom={14}>

                    <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />

                    <InfoWindow onClose={this.onInfoWindowClose}>


                    </InfoWindow>
                </Map>
            </div>

        );
    }
}

//export default ActiveCollectors;
export default GoogleApiWrapper({
    apiKey:
    (' AIzaSyA1qmMz4D7YKCJ2BsPtaLuTVGqA_M3Vf6M')
})(ActiveCollectors)
