import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';

import {useAppState} from '@react-native-community/hooks';
import {StackNavigationProp} from '@react-navigation/stack';
import {useFirebaseUserAuth} from 'src/contexts/Auth';
import PPText from 'src/components/PPText';
import {AuthStackParamList} from 'src/types/navigation/AuthStackParamList';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function LoginWithBankID({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  navigation,
}: {
  navigation: StackNavigationProp<AuthStackParamList>;
}): JSX.Element {
  const [orderRef, _setOrderRef] = useState<string>();
  const {} = useFirebaseUserAuth();
  const [_backgroundRef, setBackgroundRef] = useState<string>();

  //   useEffect(() => {
  //     initiateBankIdLogin()
  //       .then(({orderRef: newOrderRef}) => setOrderRef(newOrderRef))
  //       .catch(err => navigation.navigate('Login', {err}));
  //   }, [initiateBankIdLogin, navigation]);

  const appState = useAppState();

  useEffect(() => {
    if (appState === 'background' && orderRef) {
      setBackgroundRef(orderRef);
    }
  }, [appState, orderRef]);

  //   useEffect(() => {
  //     if (appState === 'active' && orderRef && orderRef === backgroundRef) {
  //       completeBankIdLogin({orderRef}).catch((err: Error) =>
  //         navigation.navigate('Login', {err}),
  //       );
  //       setOrderRef(undefined);
  //       setBackgroundRef(undefined);
  //     }
  //   }, [appState, orderRef, backgroundRef, navigation]);

  return (
    <View style={styles.root}>
      <PPText>Login with BankID</PPText>
    </View>
  );
}

export default LoginWithBankID;
