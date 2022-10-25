import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RoundedInput from '../../components/RoundedInput';
import RoundedButton from '../../components/RoundedButton';
import LocationIcon from '../../components/icons/LocationIcon';
import SearchIcon from '../../components/icons/SearchIcon';
import MapView from 'react-native-maps';
import {IStation} from '../../types/types';
import GasStationCard from './components/GasStationCard';
import {stations} from '../../constants/mock';

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

  useEffect(() => {
    setTimeout(() => {
      setStation(stations[0]);
    }, 1000);
  }, []);

  const onCloseStation = () => {
    setStation(null);
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
        style={styles.map}
        initialRegion={{
          latitude: 55.836759,
          longitude: 49.0785648,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
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
