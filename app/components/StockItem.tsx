import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colorDetector} from '../utils/colorDetector';
import {Item} from '../types/types';

interface StockItemProps {
  item: Item;
}

const StockItem: React.FC<StockItemProps> = ({item}) => {
  const renderVarianceTag = (lastTradedPrevious: number, lotSize: string) => {
    const lotSizeValue = Number(lotSize);
    const lastTradedPreviousValue = Number(lastTradedPrevious);
    const price = lotSizeValue * lastTradedPreviousValue;
    const resultValue = (price / 100).toFixed(2);

    const colorValue = colorDetector(price, lastTradedPreviousValue);

    return (
      <View
        style={{
          backgroundColor: colorValue,
          alignItems: 'center',
          borderRadius: 5,
          padding: 5,
          width: 100,
        }}>
        <Text style={{color: 'white'}} numberOfLines={1}>
          {resultValue}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.stockItem}>
      <Text style={styles.title}>
        {`${item?.i?.name}(${item?.i?.type}) - ${item?.market}`}
      </Text>
      {renderVarianceTag(item.i.price.lastTradedPrevious, item.i.lotSize)}
    </View>
  );
};

export default StockItem;

const styles = StyleSheet.create({
  stockItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  title: {
    color: 'white',
  },
});
