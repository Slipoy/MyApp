import React, {useContext} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {StocksContext} from '../context';
import StockList from '../components/StockList';

const Stock = () => {
  const {data} = useContext(StocksContext);

  return (
    <View style={styles.container}>
      {data ? (
        <StockList listData={data} />
      ) : (
        <ActivityIndicator style={styles.loading} />
      )}
    </View>
  );
};

export default Stock;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0C0C0C',
    flex: 1,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
