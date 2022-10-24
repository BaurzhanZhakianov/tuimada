import React from 'react';
import {ImageBackground, StyleSheet, View, ViewStyle} from 'react-native';
import {INews} from '../../../types/news';
import {MonserratMedium} from '../../../components/fonts/Monserrat';
import colors from '../../../constants/colors';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  item: INews;
  containerStyle?: ViewStyle;
}

const styles = StyleSheet.create({
  card: {
    borderColor: '#FE8383',
    borderStyle: 'solid',
    borderWidth: 1,
    height: 128,
    width: 128,
    borderRadius: 24,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 4,
  },
  cardImage: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 12,
    lineHeight: 14,
    color: colors.white,
    letterSpacing: -0.24,
    margin: 15,
  },
  gradient: {
    flex: 1,
    justifyContent: 'flex-end',
    borderRadius: 24,
  },
});

const NewsCard = (props: Props) => {
  const {item, containerStyle} = props;
  return (
    <View style={[styles.card, containerStyle]}>
      <ImageBackground
        //@ts-ignore
        source={item.image}
        style={styles.cardImage}>
        <LinearGradient
          colors={['#00000000', '#000000']}
          start={{
            x: 0.8,
            y: 0.1,
          }}
          end={{
            x: 0.3,
            y: 2,
          }}
          locations={[0, 0.5, 0.6]}
          style={styles.gradient}>
          <MonserratMedium style={styles.cardTitle}>
            {item.title}
          </MonserratMedium>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default NewsCard;
