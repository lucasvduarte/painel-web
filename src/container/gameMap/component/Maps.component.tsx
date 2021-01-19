import React, { useState } from 'react';
import { Map, Marker, GoogleApiWrapper, InfoWindow } from 'google-maps-react';
import ViewPointInformation from './ViewPointInformation.component';

export const FullScreenDialog = ({ google, data }: any) => {
    const [showingInfoWindow, setShowingInfoWindow] = useState<boolean>(false);
    const [activeMarker, setActiveMarker] = useState<any>();
    const [selectedPlace, setSelectedPlace] = useState<any>();

    const onMarkerClick = (props: any, marker: any) => {
        setSelectedPlace(props)
        setActiveMarker(marker)
        setShowingInfoWindow(true)
    }

    const onMapClicked = () => {
        if (showingInfoWindow) {
            setShowingInfoWindow(false)
            setActiveMarker(null)
        }
    };

    const markerPoints = (data: any) => {
        return data.map((el: any, index: number) => {
            return (
                //@ts-ignore
                <Marker onClick={onMarkerClick} name={ViewPointInformation(el)} position={{ lat: el.location_lat, lng: el.location_lng }} key={index} />
            )
        })
    }

    const InfoWindowMaps = () => {
        return (
            //@ts-ignore
            <InfoWindow marker={activeMarker} visible={showingInfoWindow}>
                {selectedPlace ? <>{selectedPlace.name}</> : <></>}
            </InfoWindow>
        )
    }

    return (
        //@ts-ignore
        <Map google={google} zoom={14} onClick={onMapClicked} initialCenter={{ lat: -7.230287, lng: -35.903393 }} style={{ margin: '0% 3% 0% 3%', borderRadius: 12, height: 480 }}>
            {markerPoints(data)}
            {InfoWindowMaps()}
        </Map>
    );
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBb4zfxXZMu-1Mt-J8XdcsydsCyEkXcyX0', // google maps key
    libraries: ['places'],
})(FullScreenDialog);