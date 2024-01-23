import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StocksProvider } from './context';
import RootNavigator from './navigation/RootStack';

function App(): React.JSX.Element {
  return (
    <StocksProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </StocksProvider>
  );
}

export default App;
