import React, {useEffect} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import TrackPlayer, {Capability} from 'react-native-track-player';
import {tracks} from '../../constants/mock';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const setUpTrackPlayer = async () => {
  try {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.updateOptions({
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
        Capability.Stop,
      ],
      compactCapabilities: [Capability.Play, Capability.Pause],
    });
    await TrackPlayer.add(tracks);
  } catch (e) {
    console.error(e);
  }
};

const FeedbackScreen = () => {
  useEffect(() => {
    setUpTrackPlayer();
  }, []);

  return (
    <View style={styles.container}>
      <Button
        title={'play'}
        onPress={async () => {
          TrackPlayer.play();
        }}
      />
      <Button
        title={'pause'}
        onPress={() => {
          TrackPlayer.pause();
        }}
      />
      <Button
        title={'next'}
        onPress={() => {
          TrackPlayer.skipToNext();
        }}
      />
      <Button
        title={'prev'}
        onPress={() => {
          TrackPlayer.skipToPrevious();
        }}
      />
      <Button
        title={'reset'}
        onPress={() => {
          TrackPlayer.seekTo(0);
        }}
      />
    </View>
  );
};

export default FeedbackScreen;
