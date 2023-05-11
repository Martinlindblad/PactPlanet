import React from 'react';

// import { useSafeAreaInsets } from 'react-native-safe-area-context';
import BottomTab from './BottomTab';
import LocationListScene from '../scenes/LocationListScene';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function ContentStack(): JSX.Element {
  //   const safeAreaInsets = useSafeAreaInsets();

  return (
    <Stack.Navigator initialRouteName="BottomTabs">
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="LocationList"
        component={LocationListScene}
        options={{
          title: 'Locations',
        }}
      />
    </Stack.Navigator>
  );
}

export default ContentStack;
