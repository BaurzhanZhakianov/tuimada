import React from 'react';
import {
  FlatList,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {IStation} from '../../../types/types';
import {
  MonserratBold,
  MonserratMedium,
} from '../../../components/fonts/Monserrat';
import colors from '../../../constants/colors';
import RoundedButton from '../../../components/RoundedButton';
import CloseIcon from '../../../components/icons/CloseIcon';

interface Props {
  station: IStation;
  style?: StyleProp<ViewStyle>;
  onClose?: () => void;
  onPressRoute?: () => void;
}

const styles = StyleSheet.create({
  padding: {
    paddingRight: 16,
    paddingLeft: 20,
  },
  card: {
    paddingTop: 16,
    paddingBottom: 20,
    backgroundColor: colors.white,
    borderRadius: 24,
  },
  mark: {
    width: 80,
    height: 80,
    backgroundColor: colors.naplesYellow,
    marginRight: 9.1,
    borderRadius: 12,
    paddingTop: 8.72,
    paddingLeft: 12.15,
    paddingBottom: 7.68,
    paddingRight: 11.15,
  },
  textContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  right: {
    flexDirection: 'row',
  },
  route: {
    padding: 10,
    backgroundColor: colors.white,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.brightGray,
    marginRight: 6,
  },
  number: {
    marginBottom: 3,
    fontSize: 12,
    lineHeight: 14.4,
  },
  address: {
    fontSize: 14,
    lineHeight: 16.8,
  },
  markAi: {
    fontSize: 10,
    lineHeight: 12,
    marginBottom: 3,
  },
  markOctane: {
    fontSize: 31,
    lineHeight: 31,
    marginBottom: 3,
  },
  markPrice: {
    fontSize: 12,
    lineHeight: 14.4,
    marginBottom: 3,
  },
});

const GasStationCard = (props: Props) => {
  const {station, style, onClose, onPressRoute} = props;
  return (
    <View style={[styles.card, style]}>
      <View style={[styles.textContent, styles.padding]}>
        <View>
          <MonserratMedium style={styles.number}>
            АЗС номер {station.number}
          </MonserratMedium>
          <MonserratBold style={styles.address}>
            {station.address}
          </MonserratBold>
        </View>
        <View style={styles.right}>
          <TouchableOpacity onPress={onPressRoute}>
            <MonserratMedium style={styles.route}>Маршрут</MonserratMedium>
          </TouchableOpacity>
          <RoundedButton onPress={onClose}>
            <CloseIcon />
          </RoundedButton>
        </View>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.padding}
        data={station.marks}
        keyExtractor={item => item.name}
        renderItem={({item}) => (
          <View style={styles.mark}>
            <MonserratMedium style={styles.markAi}>АИ</MonserratMedium>
            <MonserratBold style={styles.markOctane}>
              {item.octaneNumber}
            </MonserratBold>
            <MonserratMedium>{item.price} ₽</MonserratMedium>
          </View>
        )}
      />
    </View>
  );
};

export default GasStationCard;
