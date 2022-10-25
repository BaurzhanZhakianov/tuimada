import React, {MutableRefObject, ReactNode} from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextProps,
  View,
  ViewStyle,
} from 'react-native';
import colors from '../constants/colors';
import {MonserratMedium} from './fonts/Monserrat';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  input: {
    borderWidth: 1,
    borderColor: colors.brightGray2,
    backgroundColor: colors.white,
    justifyContent: 'center',
    padding: 14,
    borderRadius: 10,
    fontFamily: 'Monserrat-Medium',
    fontSize: 12,
    lineHeight: 14,
    color: colors.black,
  },
  label: {
    position: 'absolute',
    top: 10,
    left: 14,
    zIndex: 1,
    fontSize: 12,
    lineHeight: 14,
    letterSpacing: -0.24,
  },
  left: {
    position: 'absolute',
    top: '50%',
    transform: [{translateY: -10}],
    left: 14,
    zIndex: 1,
  },
  right: {
    position: 'absolute',
    top: '50%',
    transform: [{translateY: -20}],
    right: 5,
    zIndex: 1,
  },
});

interface RoundedInputProps {
  style?: StyleProp<ViewStyle>;
  innerRef?: MutableRefObject<TextInput>;
  label?: string;
  labelStyle?: StyleProp<TextProps>;
  leftElement?: () => ReactNode;
  rightElement?: () => ReactNode;
}

export default function RoundedInput(
  props: TextInputProps & RoundedInputProps,
) {
  const {
    style,
    innerRef,
    label,
    labelStyle,
    leftElement,
    rightElement,
    ...restProps
  } = props;
  return (
    <View style={styles.container}>
      {label ? (
        <MonserratMedium style={[styles.label, labelStyle]}>
          {label}
        </MonserratMedium>
      ) : null}
      {leftElement && !label ? (
        <View style={styles.left} pointerEvents={'none'}>
          {leftElement()}
        </View>
      ) : null}
      {rightElement && !label ? (
        <View style={styles.right}>{rightElement()}</View>
      ) : null}
      <TextInput
        placeholderTextColor={'#979797'}
        returnKeyType="next"
        autoCapitalize="none"
        {...restProps}
        ref={innerRef}
        style={[
          styles.input,
          label ? {paddingTop: 20, paddingBottom: 5} : null,
          leftElement && !label ? {paddingLeft: 50} : null,
          style,
        ]}
      />
    </View>
  );
}
