import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {news, services, stats} from '../../constants/mock';
import NewsCard from './components/NewsCard';
import Stats from '../../components/Stats';
import ServiceCard from '../../components/ServiceCard';
import {MonserratBold, MonserratMedium} from '../../components/fonts/Monserrat';
import colors from '../../constants/colors';
import Shadow from '../../components/Shadow';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeParamList} from '../../types/paramLists';

const adImage = require('../../assets/images/hand.png');

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  container2: {
    paddingHorizontal: 20,
  },
  flatList: {
    justifyContent: 'flex-start',
    marginBottom: 20,
    marginLeft: 20,
  },
  card: {
    marginRight: 10,
  },
  stats: {
    marginBottom: 40,
  },
  services: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  service: {
    marginRight: 10,
  },
  ad: {
    padding: 15,
    paddingHorizontal: 20,
    backgroundColor: colors.white,
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  adText: {
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: -0.24,
  },
  mark: {
    backgroundColor: colors.dartmouthGreen,
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  markText: {
    color: colors.white,
    fontSize: 14,
    lineHeight: 16,
  },
  adContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginRight: 10,
  },
  adImage: {
    marginRight: -20,
  },
  adPrice: {
    backgroundColor: colors.naplesYellow,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  refuel: {
    backgroundColor: colors.naplesYellow,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
    borderRadius: 24,
  },
  refuelText: {
    fontSize: 14,
    lineHeight: 16,
  },
});

type Props = NativeStackScreenProps<HomeParamList, 'HomeScreen'>;

const HomeScreen = (props: Props) => {
  const {navigation} = props;

  const onPressRefuel = () => {
    navigation.navigate('RefuelScreen');
  };

  return (
    <ScrollView style={styles.container}>
      <FlatList
        contentContainerStyle={styles.flatList}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={news}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity>
            <NewsCard item={item} containerStyle={styles.card} />
          </TouchableOpacity>
        )}
      />
      <View style={styles.container2}>
        <Stats stats={stats} progress containerStyle={styles.stats} />
        <View style={styles.services}>
          {services.map((i, index) => (
            <TouchableOpacity
              key={i.id}
              onPress={() => {
                if (i.type === 'maps') {
                  navigation.navigate('GasStationMapScreen');
                }
              }}>
              <ServiceCard
                service={i}
                containerStyle={
                  index !== services.length - 1 ? styles.service : undefined
                }
              />
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity>
          <Shadow variant={'2'} style={styles.ad}>
            <View style={styles.adContent}>
              <MonserratBold style={styles.adText}>Возьми </MonserratBold>
              <View style={styles.mark}>
                <MonserratBold style={styles.markText}>свежий</MonserratBold>
              </View>
              <MonserratBold style={styles.adText}>
                кофе на свои бонусы
              </MonserratBold>
            </View>
            <View style={styles.adImage}>
              <Image source={adImage} />
            </View>
            <View style={styles.adPrice}>
              <MonserratBold>65 ✪</MonserratBold>
            </View>
          </Shadow>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressRefuel} style={styles.refuel}>
          <MonserratMedium style={styles.refuelText}>
            Заправиться
          </MonserratMedium>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
