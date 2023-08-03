import React, {useCallback, useEffect, useRef} from 'react';
import {MapType, MapView, Marker} from 'react-native-amap3d';
import {useImmer} from 'use-immer';
import {
  clearWatcher,
  getCurrentPosition,
  watchPosition,
} from '@utils/locationService';
import {wgs2gcj} from '@utils/locationTransformer';
// @ts-ignore
import Icon from 'react-native-vector-icons/FontAwesome6';

function NearbyPage() {
  const mapRef = useRef<MapView>(null);
  const [location, updateLocation] = useImmer({
    latitude: 0,
    longitude: 0,
  });
  useEffect(() => {
    const watchId = watchPosition(
      position => {
        const {longitude, latitude} = position.coords;
        const {lat, lng} = wgs2gcj(latitude, longitude);
        updateLocation({
          latitude: lat,
          longitude: lng,
        });
      },
      undefined,
      {enableHighAccuracy: true},
    );
    return () => {
      clearWatcher(watchId);
    };
  }, [updateLocation]);

  const onLoad = useCallback(() => {
    getCurrentPosition(
      position => {
        const {longitude, latitude} = position.coords;
        const {lat, lng} = wgs2gcj(latitude, longitude);
        mapRef.current?.moveCamera(
          {
            zoom: 18,
            target: {
              longitude: lng,
              latitude: lat,
            },
          },
          300,
        );
      },
      undefined,
      {timeout: 1000, enableHighAccuracy: true, maximumAge: 0},
    );
  }, []);

  return (
    <MapView mapType={MapType.Standard} ref={mapRef} onLoad={onLoad}>
      <Marker position={location}>
        <Icon name={'location-dot'} size={28} color={'purple'} />
      </Marker>
    </MapView>
  );
}
export {NearbyPage};
