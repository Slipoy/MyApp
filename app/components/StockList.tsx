import React from 'react';
import StockItem from './StockItem';
import {FlatList} from 'react-native';
import {Item} from '../types/types';

interface StockListProps {
  listData: Item[];
}

const StockList: React.FC<StockListProps> = ({listData}) => {
  return (
    <>
      <FlatList
        data={listData}
        keyExtractor={item => item.id}
        renderItem={StockItem}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
      />
    </>
  );
};

export default StockList;
