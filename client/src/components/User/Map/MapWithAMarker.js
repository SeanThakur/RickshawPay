import { 
    compose, 
    withStateHandlers,
    withProps,
    lifecycle
} from "recompose";
//React Icons
import {
    RiUserLocationFill
} from 'react-icons/ri';
import {
    FcAutomotive
} from 'react-icons/fc';
//Map Icons
import mapRickshaw from '../../../assets/taxi.png'

import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    InfoWindow,
    Circle,
    DirectionsRenderer
} from "react-google-maps";

const MapWithAMarker = compose(
    withProps({
        // googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyB5n4BFqHd_Skm947FV2Z0EYRxwE0UJ2Ms&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `500px` }} />,
        mapElement: <div style={{ height: `100%` }} />
    }),
    withStateHandlers(() => ({
      isOpen: true,
      isDriverOpen: true
    }), {
      onToggleOpen: ({ isOpen }) => () => ({
        isOpen: !isOpen,
      }),
      onDriverToggleOpen: ({ isDriverOpen }) => () => ({
        isDriverOpen: !isDriverOpen,
      })
    }),
    withScriptjs,
    withGoogleMap,
    lifecycle({
        async componentDidMount() {
          const DirectionsService = await new window.google.maps.DirectionsService();
    
          await DirectionsService.route({
            origin: await new window.google.maps.LatLng(this.props.sourceLat, this.props.sourceLng),
            destination: await new window.google.maps.LatLng(this.props.destinationLat, this.props.destinationLng),
            travelMode: await window.google.maps.TravelMode.DRIVING,
            unitSystem: await window.google.maps.UnitSystem.METRIC
          }, (result, status) => {
            if (status === window.google.maps.DirectionsStatus.OK) {
              this.setState({
                directions: result
              });
            } else {
              console.error(`error fetching directions ${result}`);
            }
          });
        }
      })
  )
    (props =>
<GoogleMap
    defaultZoom={14}
    defaultCenter={
        {
            lat: props.latitude, 
            lng: props.longitude
        }
    }
>   
    {/* Source and Destination Marker Routes */}
    {props.directions && <DirectionsRenderer 
        directions={props.directions}
    />}
    {/* 2000 km radius circle w..t current location */}
    <Circle
        defaultCenter={{
            lat: props.latitude,
            lng: props.longitude
        }}
        radius={2000}
        options={{
            strokeColor: "#FF0000",
            strokeOpacity: 0.5,
            strokeWeight: 1,
            fillColor: "#FF0000",
            fillOpacity: 0.12
        }}
    />
    {/* Current Location Marker */}
    <Marker
        position={
            {
                lat: props.latitude, 
                lng: props.longitude
            }
        }
    >
        {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
            <div>
                <div className="text-center">
                    <RiUserLocationFill style={{height: "20px", width: "20px"}}/>
                </div>
                <p>My Location</p>
            </div>
        </InfoWindow>}
    </Marker>
    {/* Driver Location Marker */}
    {
        props.driverMap?.map(d => (
                <Marker
                    position={
                        {
                            lat: d.latitude, 
                            lng: d.longitude
                        }
                    }
                    icon={mapRickshaw}
                    key={d.id}
                >
                    {props.isDriverOpen && <InfoWindow onCloseClick={props.onDriverToggleOpen}>
                        <div className="text-center">
                            <FcAutomotive style={{height: "20px", width: "20px"}}/> {' ' + d.user_name}
                        </div>
                    </InfoWindow>}
                </Marker>
        ))
    }
</GoogleMap>
);

export default MapWithAMarker