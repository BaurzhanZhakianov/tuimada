import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {MonserratBold, MonserratMedium} from './fonts/Monserrat';
import QR from './icons/QR';
import {IStats} from '../types/types';
import colors from '../constants/colors';
import utils from '../utils/utils';
import Shadow from './Shadow';

interface Props {
  stats: IStats;
  containerStyle?: ViewStyle;
  progress?: boolean;
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  statistics: {
    backgroundColor: colors.naplesYellow,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 19.5,
    paddingRight: 20,
    paddingBottom: 20.5,
    paddingLeft: 20,
  },
  statsData: {
    flex: 1,
    alignItems: 'flex-start',
  },
  statusContainer: {
    marginBottom: 15,
  },
  status: {
    fontSize: 12,
    lineHeight: 12,
    backgroundColor: colors.dartmouthGreen,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    color: colors.white,
  },
  scoreContainer: {
    marginBottom: 15,
  },
  score: {
    fontSize: 14,
    lineHeight: 16.8,
    marginBottom: 3,
  },
  scoreNumber: {
    fontSize: 30,
    lineHeight: 30,
    marginTop: 5,
  },
  progress: {
    position: 'absolute',
    top: 30,
    left: 0,
    backgroundColor: colors.white,
    zIndex: -1,
    height: '100%',
    width: '100%',
    borderRadius: 20,
    transform: [{scale: 0.9}],
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingBottom: 5,
    flex: 1,
  },
  progressText: {
    fontSize: 10,
    lineHeight: 12,
    color: colors.philippineSilver,
  },
});

const Stats = (props: Props) => {
  const {stats, containerStyle, progress = false} = props;
  const {status, score, points} = stats;
  return (
    <View style={[styles.container, containerStyle]}>
      <Shadow variant={'1'} style={styles.statistics}>
        <View style={styles.statsData}>
          <View style={styles.statusContainer}>
            <MonserratBold style={styles.status}>{status}</MonserratBold>
          </View>
          <View style={styles.scoreContainer}>
            <MonserratMedium style={styles.score}>Счет</MonserratMedium>
            <MonserratBold>{utils.spacedNumber(score)}</MonserratBold>
          </View>
          <MonserratMedium>Баллов</MonserratMedium>
          <MonserratBold style={styles.scoreNumber}>
            {utils.spacedNumber(points)} ✪
          </MonserratBold>
        </View>
        <QR />
      </Shadow>
      {progress && (
        <Shadow variant={'2'} style={styles.progress}>
          <MonserratBold style={styles.progressText}>
            70,5 литров{' '}
          </MonserratBold>
          <MonserratMedium style={styles.progressText}>
            до уровня Золото
          </MonserratMedium>
        </Shadow>
      )}
    </View>
  );
};

export default Stats;
