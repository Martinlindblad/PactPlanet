import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Compose from '../utils/Compose';
import {Provider as FirebaseAuthProvider} from '../contexts/Auth';
import Router from '../navigation/Router';
import {useFonts} from 'expo-font';

function App(): JSX.Element {
  useFonts({
    Montserrat: require('./assets/fonts/Yatra-One.ttf'),
  });

  return <Router />;
}

const ComposedApp = () => {
  return (
    <Compose components={[FirebaseAuthProvider]}>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </Compose>
  );
};

export default ComposedApp;
// npx react-native generate-bootsplash assets/bootsplash_logo.png \
//   --background-color=F5FCFF \
//   --logo-width=100 \
//   --assets-path=assets \
//   --flavor=main
