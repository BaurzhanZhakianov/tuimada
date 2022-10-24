import React, {PropsWithChildren} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#00000090',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  shadow2: {
    shadowColor: '#00000050',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
});

interface Props extends PropsWithChildren {
  variant: '1' | '2';
  style?: ViewStyle;
}

const Shadow = (props: Props) => {
  const {variant, children, style} = props;
  return (
    <View style={[variant === '1' ? styles.shadow : styles.shadow2, style]}>
      {children}
    </View>
  );
};

export default Shadow;
