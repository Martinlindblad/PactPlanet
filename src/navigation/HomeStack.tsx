import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScene from '../scenes/HomeStack/HomeScene';
import SettingsScene from '../scenes/SettingsScene';

// import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

function HomeStack(): JSX.Element {
  //   const safeAreaInsets = useSafeAreaInsets();

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScene}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScene}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
