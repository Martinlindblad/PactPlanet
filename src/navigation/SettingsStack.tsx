import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScene from '../scenes/HomeScene';
import SettingsScene from '../scenes/SettingsScene';

// import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

function SettingsStack(): JSX.Element {
  //   const safeAreaInsets = useSafeAreaInsets();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={SettingsScene}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={HomeScene}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default SettingsStack;
