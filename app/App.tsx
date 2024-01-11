/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import Stock from "./Pages/Stocks";
import StockIcon from "./assets/StockIcon";
import SearchIcon from "./assets/SearchIcon";
import {StocksProvider} from "./context";
import Search from "./Pages/Search";


const Tab = createBottomTabNavigator()


function App(): React.JSX.Element {


  return (
      <StocksProvider>
          <SafeAreaView style={{flex:1,}}>
              <NavigationContainer>
                  <Tab.Navigator
                      screenOptions={{
                          tabBarStyle: { backgroundColor: 'rgba(10, 10, 10, 0.8)'},
                          headerStyle: {backgroundColor: 'rgba(10, 10, 10, 0.8)'},
                          headerTintColor: 'white'
                      }}
                  >
                      <Tab.Screen
                          name="Stocks"
                          component={Stock}
                          options={{tabBarIcon: ()=> <StockIcon/>}}
                      />
                      <Tab.Screen
                          name="Search"
                          component={Search}
                          options={{tabBarIcon: ()=> <SearchIcon/>}}
                      />
                  </Tab.Navigator>
              </NavigationContainer>
          </SafeAreaView>
      </StocksProvider>
  );
}


export default App;
