import React, { useCallback, useContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useDebouncedCallback } from 'use-debounce';
import { StocksContext } from '../context';
import StockList from '../components/StockList';
import SearchInput from '../components/SearchInput';

const Search = () => {
  const { data } = useContext(StocksContext);
  const [inputText, setInputText] = useState('');

  const [filteredData, setFilteredData] = useState(null);

  const debounced = useDebouncedCallback(value => {
    filteredAndSortedData(value);
  }, 200);

  const filteredAndSortedData = useCallback(
    value => {
      const lowerCaseInput = value.toLowerCase();

      const filtered = data.filter(item => {
        const combinedString =
          `${item?.i?.name}(${item?.i?.type}) - ${item?.market}`.toLowerCase();
        return combinedString.includes(lowerCaseInput);
      });
      console.log();
      const sortedData = filtered.sort((a, b) => {
        const countryA = a.market.toLowerCase();
        const countryB = b.market.toLowerCase();
        const lastTradedPreviousB = Number(b.i.price.lastTradedPrevious);
        const lastTradedPreviousA = Number(a.i.price.lastTradedPrevious);

        if (countryA < countryB) return -1;
        if (countryA > countryB) return 1;

        return lastTradedPreviousB - lastTradedPreviousA;
      });

      setFilteredData(sortedData);
    },
    [data],
  );

  const handleChangeText = value => {
    setInputText(value);
    if (value.length > 1) {
      debounced(value);
    } else {
      setFilteredData(null);
    }
  };

  return (
    <View style={styles.container}>
      <SearchInput onChangeText={handleChangeText} value={inputText} />
      <StockList listData={filteredData} />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0C0C0C',
    flex: 1,
  },
  textInput: {
    flex: 1,
    height: 40,
    paddingTop: 10,
    marginBottom: 10,
    color: 'white',
  },
});
