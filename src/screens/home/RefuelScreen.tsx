import React from 'react';
import {MonserratBold, MonserratMedium} from '../../components/fonts/Monserrat';
import {Dimensions, StyleSheet, TouchableOpacity, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeParamList} from '../../types/paramLists';
import colors from '../../constants/colors';
import ScanIcon from '../../components/icons/ScanIcon';

type Props = NativeStackScreenProps<HomeParamList, 'RefuelScreen'>;

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: colors.black,
  },
  icon: {
    // marginBottom: 20,
  },
  title: {
    fontSize: 30,
    lineHeight: 36,
    color: colors.white,
    textAlign: 'center',
    // marginBottom: 30,
  },
  description: {
    fontSize: 16,
    lineHeight: 19,
    color: colors.white,
    textAlign: 'center',
    // marginBottom: 60,
  },
  box: {
    borderRadius: 24,
    borderWidth: 2,
    borderColor: colors.naplesYellow,
    height: width * 0.9,
    width: width * 0.9,
    // marginBottom: 28,
  },
  cancel: {
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
    borderRadius: 24,
    borderColor: `${colors.white}50`,
    alignSelf: 'stretch',
  },
  cancelText: {
    fontSize: 14,
    lineHeight: 16,
    color: colors.white,
  },
});

const RefuelScreen = (props: Props) => {
  const {navigation} = props;
  const onPressCancel = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <ScanIcon />
      </View>
      <MonserratBold style={styles.title}>
        Отсканируте QR-код на колонке или автомойке
      </MonserratBold>
      <View style={styles.box} />
      <MonserratMedium style={styles.description}>
        Сканирование выполняется автоматически
      </MonserratMedium>
      <TouchableOpacity onPress={onPressCancel} style={styles.cancel}>
        <MonserratMedium style={styles.cancelText}>Отменить</MonserratMedium>
      </TouchableOpacity>
    </View>
  );
};

export default RefuelScreen;
