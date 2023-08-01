import React, {useEffect, useRef} from 'react';
import {AMapSdk, MapType, MapView, Marker} from 'react-native-amap3d';
import {useImmer} from 'use-immer';
import {Text} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
Geolocation.setRNConfiguration({
  locationProvider: 'auto',
  skipPermissionRequests: false,
});
AMapSdk.init('ed10571585f8d095efdd7ec29a3528ee');
function NearbyPage() {
  const mapRef = useRef<MapView>(null);
  const [location, updateLocation] = useImmer({
    latitude: 0,
    longitude: 0,
  });
  useEffect(() => {
    const watchId = Geolocation.watchPosition(
      data => {
        const {longitude, latitude} = data.coords;
        console.log(data);
        updateLocation(draft => {
          draft.longitude = longitude;
          draft.latitude = latitude;
        });
        mapRef.current?.moveCamera({
          zoom: 16,
          target: {
            latitude,
            longitude,
          },
        });
      },
      undefined,
      {
        enableHighAccuracy: true,
        interval: 100,
        maximumAge: 0,
        distanceFilter: 0.1,
      },
    );
    return () => {
      Geolocation.clearWatch(watchId);
    };
  }, []);

  return (
    <MapView mapType={MapType.Standard} ref={mapRef}>
      <Marker position={location}>
        <Text>
          {location.latitude} - {location.longitude}
        </Text>
      </Marker>
    </MapView>
  );
}
export {NearbyPage};
