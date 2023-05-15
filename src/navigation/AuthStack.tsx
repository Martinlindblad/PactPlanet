import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScene from 'src/scenes/AuthStack/LoginScene';
import LoginEmailPasswordScene from 'src/scenes/AuthStack/LoginEmailPasswordScene';
import {AuthStackParamList} from 'src/types/navigation/AuthStackParamList';
import {useFirebaseUserAuth} from 'src/contexts/Auth';
import LoginWithBankID from 'src/scenes/AuthStack/LoginWithBankID';
import Timeout from 'src/scenes/AuthStack/Timeout';

const Stack = createStackNavigator<AuthStackParamList>();

function AuthStack(): JSX.Element {
  const {currentUser} = useFirebaseUserAuth();

  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerShown: false,
        headerTitleAllowFontScaling: false,
      }}
      initialRouteName={currentUser ? 'Timeout' : 'Login'}>
      <Stack.Screen
        name="LoginScene"
        component={LoginScene}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="LoginEmailPassword"
        options={{
          title: 'Logga in utan bankID',
        }}
        component={LoginEmailPasswordScene}
      />

      <Stack.Screen
        name="LoginWithBankID"
        component={LoginWithBankID}
        options={{
          headerShown: false,
          presentation: 'modal',
        }}
      />
      <Stack.Screen
        name="Timeout"
        options={{
          headerBackTitleVisible: false,
          headerShown: false,
          gestureEnabled: false,
        }}
        component={Timeout}
      />
    </Stack.Navigator>
  );
}

export default AuthStack;
