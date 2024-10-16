import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import type {RootState} from '../../store/index';
import {useSelector} from 'react-redux';

const StatisticsBlock = () => {
  const {failedValue, successValue, totalValue} = useSelector(
    (state: RootState) => state.counter,
  );
  return (
    <View style={styles.infoContainer}>
      <View style={styles.blockInfo}>
        <Text style={styles.textInfo}>{totalValue}</Text>
        <Text style={styles.textInfo}>Total</Text>
      </View>
      <View style={styles.blockInfo}>
        <Text style={styles.textInfo}>{successValue}</Text>
        <Text style={styles.textInfo}>Success</Text>
      </View>
      <View style={styles.blockInfo}>
        <Text style={styles.textInfo}>{failedValue}</Text>
        <Text style={styles.textInfo}>Failed</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    marginVertical: 16,
  },
  blockInfo: {
    height: 80,
    width: 80,
    borderWidth: 1,
    borderColor: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d0d0d0',
  },
  textInfo: {
    fontSize: 18,
  },
});

export default StatisticsBlock;
