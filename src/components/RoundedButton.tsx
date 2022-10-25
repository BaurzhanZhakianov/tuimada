import React, {PropsWithChildren} from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewProps,
} from 'react-native';
import colors from '../constants/colors';

interface Props extends PropsWithChildren, TouchableOpacityProps {
  style?: StyleProp<ViewProps>;
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.cultured,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});

const RoundedButton = (props: Props) => {
  const {children, style, ...rest} = props;
  return (
    <TouchableOpacity style={[styles.container, style]} {...rest}>
      {children}
    </TouchableOpacity>
  );
};

export default RoundedButton;
