import React, {PropsWithChildren} from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';
import colors from '../../constants/colors';

interface Props extends PropsWithChildren, TextProps {}

const styles = StyleSheet.create({
  text: {
    color: colors.raisinBlack,
  },
});

const Monserrat = ({children, style, ...props}: Props) => {
  return (
    <Text
      style={[styles.text, {fontFamily: 'Montserrat-Regular'}, style]}
      {...props}>
      {children}
    </Text>
  );
};

const MonserratBold = ({children, style, ...props}: Props) => {
  return (
    <Text
      style={[styles.text, {fontFamily: 'Montserrat-Bold'}, style]}
      {...props}>
      {children}
    </Text>
  );
};

const MonserratMedium = ({children, style, ...props}: Props) => {
  return (
    <Text
      style={[styles.text, {fontFamily: 'Montserrat-Medium'}, style]}
      {...props}>
      {children}
    </Text>
  );
};

export {Monserrat, MonserratBold, MonserratMedium};
