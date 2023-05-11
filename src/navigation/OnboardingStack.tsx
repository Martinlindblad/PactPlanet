import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import OnboardingScene from '../scenes/OnboardingScene';

// import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

function OnboardingStack(): JSX.Element {
  //   const safeAreaInsets = useSafeAreaInsets();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScene}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default OnboardingStack;
