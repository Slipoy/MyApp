import React, { createContext, useEffect, useMemo, useState } from 'react';
import { Item } from './types/types';

interface StocksContextProps {
  data: Item[] | null;
  setData: React.Dispatch<React.SetStateAction<Item[] | null>>;
}
const StocksContext = createContext<StocksContextProps | undefined>(undefined);

const StocksProvider = ({ children }) => {
  const [data, setData] = useState<Item[] | null>(null);
  const contextValue = useMemo(() => ({ data, setData }), [data, setData]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://file.notion.so/f/f/ec235754-1e4e-42f0-a835-141a85a808fc/d31f6dc9-99ed-46af-a279-b24be26a98d0/data.json?id=581553d0-4ea3-4ca3-8021-aafaf7f65b7a&table=block&spaceId=ec235754-1e4e-42f0-a835-141a85a808fc&expirationTimestamp=1705060800000&signature=T-0dRcYyBK-55903sk-GI4coNPayZYWKoeY7gxUZf8E&downloadName=data.json',
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <StocksContext.Provider value={contextValue}>
      {children}
    </StocksContext.Provider>
  );
};

export { StocksProvider, StocksContext };
