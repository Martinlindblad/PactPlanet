import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';

import {View, StyleSheet, Text} from 'react-native';
import Button from 'src/components/buttons/Button';

import RenderIllustration from 'src/components/RenderIllustration';
import {AuthStackParamList} from 'src/types/navigation/AuthStackParamList';

import SignUp from '../../../assets/svg/illustrations/sign_up.svg';

const styles = StyleSheet.create({
  root: {flex: 1},
  content: {
    flex: 1,
    backgroundColor: '#1d1d1d',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 26,
    width: '100%',
    paddingVertical: 10,
  },
  body: {justifyContent: 'center', alignItems: 'center'},
  scrollView: {flex: 1},
  contentContainerStyle: {
    flexGrow: 1,
    paddingBottom: 100,
  },
  loggInStatusText: {
    color: '#EAEAEA',
    fontFamily: 'Commissioner-Bold',
    paddingHorizontal: 20,
    fontSize: 12,
    textAlign: 'center',
  },
  button: {marginBottom: 20, marginHorizontal: 20, minWidth: 300},

  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',

    paddingTop: 200,
    flex: 1,
    paddingHorizontal: 20,
  },
  welcomeTitle: {
    color: '#EAEAEA',

    fontFamily: 'Commissioner-Bold',
    paddingHorizontal: 20,
    fontSize: 18,
    paddingBottom: 20,
    textAlign: 'center',
  },
  welcomeText: {
    color: '#EAEAEA',
    fontFamily: 'Commissioner-Bold',
    paddingHorizontal: 20,
    fontSize: 12,
    textAlign: 'center',
  },
});

const LoginWithOtherMethod = (): JSX.Element => {
  console.log('LoginWithOtherMethod', SignUp);
  const navigation =
    useNavigation<
      StackNavigationProp<AuthStackParamList, 'LoginWithOtherMethod'>
    >();
  return (
    <View style={styles.root}>
      <View style={styles.content}>
        <RenderIllustration Svg={SignUp} />
        <View style={styles.titleContainer}>
          <Text style={styles.welcomeTitle}>Logga in med</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            onPress={() => {
              navigation.navigate('LoginWithEmail');
            }}
            text="Facebook"
            variant="primary"
          />
          <Button
            variant="secondary"
            style={styles.button}
            onPress={() => {
              console.log('Login with Google');
            }}
            text="Google"
          />
          <Button
            style={styles.button}
            onPress={() => {
              navigation.navigate('LoginWithEmail');
            }}
            text="E-post och lösenord"
            variant={'link'}
          />
        </View>
      </View>
    </View>
  );
};

export default LoginWithOtherMethod;
