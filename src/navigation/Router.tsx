import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OnboardingStack from './OnboardingStack';
import ContentStack from './ContentStack';
import {useFirebaseUserAuth} from '../contexts/Auth';
import AuthStack from './AuthStack';

const Stack = createStackNavigator();

function Router(): JSX.Element {
  const {currentUser} = useFirebaseUserAuth();

  return (
    <Stack.Navigator>
      {currentUser ? (
        <>
          <Stack.Screen
            name="Content"
            component={ContentStack}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Onboarding"
            component={OnboardingStack}
            options={{headerShown: false}}
          />
        </>
      ) : (
        <Stack.Screen
          name="Auth"
          component={AuthStack}
          options={{headerShown: false}}
        />
      )}
    </Stack.Navigator>
  );
}

export default Router;
