import React, {useEffect, useState} from 'react';
import {MonserratBold, MonserratMedium} from '../../components/fonts/Monserrat';
import {
  Alert,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeParamList} from '../../types/paramLists';
import colors from '../../constants/colors';
import ScanIcon from '../../components/icons/ScanIcon';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {BarcodeFormat, useScanBarcodes} from 'vision-camera-code-scanner';

type Props = NativeStackScreenProps<HomeParamList, 'RefuelScreen'>;

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
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
  const [hasPermission, setHasPermission] = useState(false);
  const devices = useCameraDevices();
  const device = devices.back;
  const [code, setCode] = useState('');

  const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.QR_CODE], {
    checkInverted: true,
  });

  useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === 'authorized');
    })();
  }, []);

  useEffect(() => {
    if (barcodes && barcodes.length) {
      const item = barcodes[barcodes.length - 1];
      if (item.displayValue) {
        setCode(item.displayValue);
      }
    }
  }, [barcodes]);

  useEffect(() => {
    if (code) {
      Alert.alert('QR считан', code);
    }
  }, [code]);

  if (!device || !hasPermission) {
    return null;
  }

  const onPressCancel = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={!code}
        frameProcessor={frameProcessor}
        frameProcessorFps={5}
      />
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
