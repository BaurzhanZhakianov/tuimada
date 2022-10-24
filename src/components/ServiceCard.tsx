import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {IService} from '../types/types';
import {MonserratBold, MonserratMedium} from './fonts/Monserrat';
import Shadow from './Shadow';
import WalletGradientIcon from './icons/WalletGradientIcon';
import colors from '../constants/colors';
import LocationGradientIcon from './icons/LocationGradientIcon';
import MessageGradientIcon from './icons/MessageGradientIcon';

interface Props {
  service: IService;
  containerStyle?: ViewStyle;
}

const styles = StyleSheet.create({
  card: {
    height: 110,
    width: 110,
    borderRadius: 24,
    overflow: 'hidden',
    paddingVertical: 15,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    position: 'relative',
  },
  cardTitle: {
    fontSize: 12,
    lineHeight: 14,
  },
  badge: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 50,
    backgroundColor: colors.cultured,
  },
  cardBadge: {
    fontSize: 12,
    lineHeight: 14,
    marginLeft: 5,
    marginBottom: 5,
  },
  cardHeader: {
    flex: 1,
  },
  cardFooter: {flex: 1, justifyContent: 'flex-end'},
});

const Icon = (props: Pick<IService, 'type'>) => {
  const {type} = props;
  if (type === 'history') {
    return <WalletGradientIcon />;
  }
  if (type === 'maps') {
    return <LocationGradientIcon />;
  }
  if (type === 'feedback') {
    return <MessageGradientIcon />;
  }
  return null;
};

const ServiceCard = (props: Props) => {
  const {service, containerStyle = {}} = props;

  return (
    <Shadow style={{...styles.card, ...containerStyle}} variant={'2'}>
      {service.badge ? (
        <View style={styles.badge}>
          <MonserratBold style={styles.cardBadge}>
            {service.badge}
          </MonserratBold>
        </View>
      ) : null}
      <View style={styles.cardHeader}>
        <Icon type={service.type} />
      </View>
      <View style={styles.cardFooter}>
        <MonserratMedium style={styles.cardTitle}>
          {service.title}
        </MonserratMedium>
      </View>
    </Shadow>
  );
};

export default ServiceCard;
