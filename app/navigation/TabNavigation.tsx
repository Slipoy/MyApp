import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Stock from '../Pages/Stocks';
import StockIcon from '../assets/StockIcon';
import Search from '../Pages/Search';
import SearchIcon from '../assets/SearchIcon';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: 'rgba(10, 10, 10, 0.8)' },
        headerStyle: { backgroundColor: 'rgba(10, 10, 10, 0.8)' },
        headerTintColor: 'white',
      }}>
      <Tab.Screen
        name="Stocks"
        component={Stock}
        options={{ tabBarIcon: () => <StockIcon /> }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{ tabBarIcon: () => <SearchIcon /> }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
