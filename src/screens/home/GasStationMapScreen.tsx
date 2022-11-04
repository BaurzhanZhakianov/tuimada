import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RoundedInput from '../../components/RoundedInput';
import RoundedButton from '../../components/RoundedButton';
import LocationIcon from '../../components/icons/LocationIcon';
import SearchIcon from '../../components/icons/SearchIcon';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {IStation} from '../../types/types';
import GasStationCard from './components/GasStationCard';
import {stations} from '../../constants/mock';

const marker = require('../../assets/icons/marker.png');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    marginTop: 10,
  },
  map: {
    flex: 1,
  },
  search: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  input: {
    padding: 10,
    borderRadius: 15,
    shadowColor: '#00000090',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  station: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 2,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
});

const GasStationMapScreen = () => {
  const [address, setAddress] = useState('');
  const onChangeAddress = (text: string) => {
    setAddress(text);
  };
  const [station, setStation] = useState<IStation | null>(null);
  const [pin, setPin] = useState({
    latitude: 55.836759,
    longitude: 49.0785648,
  });
  useEffect(() => {
    setTimeout(() => {
      setStation(stations[0]);
    }, 1000);
  }, []);

  const onCloseStation = () => {
    setStation(null);
  };

  const onPressPin = (pin2: IStation) => {
    const newPin = {
      longitude: pin2.longitude,
      latitude: pin2.latitude,
    };
    setPin(newPin);
    setStation(pin2);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.search}
        colors={['#ffffff00', '#ffffff']}
        start={{
          x: 0,
          y: 1,
        }}
        end={{
          x: 0,
          y: 0,
        }}
        locations={[0, 1]}>
        <RoundedInput
          style={styles.input}
          value={address}
          onChangeText={onChangeAddress}
          placeholder="Номер АЗС"
          leftElement={() => <SearchIcon />}
          rightElement={() => (
            <RoundedButton>
              <LocationIcon />
            </RoundedButton>
          )}
        />
      </LinearGradient>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          ...pin,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {stations.map(pin2 => {
          const isEqualCoordinates =
            pin2.longitude === station?.longitude &&
            pin2.latitude === station.latitude;

          return (
            <Marker
              key={pin2.number}
              onPress={() => onPressPin(pin2)}
              coordinate={{longitude: pin2.longitude, latitude: pin2.latitude}}>
              <Image
                source={marker}
                style={{
                  width: isEqualCoordinates ? 56 : 30,
                  height: isEqualCoordinates ? 56 : 30,
                }}
              />
            </Marker>
          );
        })}
      </MapView>
      {station ? (
        <GasStationCard
          station={station}
          style={styles.station}
          onClose={onCloseStation}
        />
      ) : null}
    </View>
  );
};

export default GasStationMapScreen;
