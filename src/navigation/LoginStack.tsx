import React from 'react';

import LoginScene from '../scenes/LoginScene';

// import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function LoginStack(): JSX.Element {
  //   const safeAreaInsets = useSafeAreaInsets();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginScene"
        component={LoginScene}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default LoginStack;
