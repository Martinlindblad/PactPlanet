import {LinearGradient} from 'expo-linear-gradient';
import React, {useCallback} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  ScrollView,
  StatusBar,
  Text,
  ActivityIndicator,
} from 'react-native';
import Button from 'src/components/buttons/Button';
import {useFirebaseUserAuth} from 'src/contexts/Auth';

const style = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#F9FEFF',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  body: {justifyContent: 'center', alignItems: 'center'},
  scrollView: {flex: 1},
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  loggInStatusText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  button: {marginBottom: 10, marginHorizontal: 20},
  loginUserTitle: {fontSize: 20, fontWeight: 'bold', color: '#000'},
  gradientBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});

const LoginScene = (): JSX.Element => {
  const {signInWithEmailAndPassword, initializing, currentUser} =
    useFirebaseUserAuth();

  const handleSignInButtonPressed = useCallback(() => {
    const email = 'martin.l@test.com';
    const password = 'DevTest';
    const params = {email, password};

    signInWithEmailAndPassword(params);
  }, [signInWithEmailAndPassword]);

  return (
    <View>
      <View style={style.container}>
        <LinearGradient
          // Background Linear Gradient
          colors={['rgba(0,0,0,0.8)', 'transparent']}
          style={style.background}
        />
        <LinearGradient
          // Button Linear Gradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={style.button}>
          <Text style={style.text}>Sign in with Facebook</Text>
        </LinearGradient>
      </View>
      <SafeAreaView style={style.content}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={style.scrollView}>
          <View style={style.body}>
            <Text style={style.loginUserTitle}>
              {currentUser ? currentUser.email : 'Login'}
            </Text>
            <View style={style.sectionContainer}>
              <Button
                style={style.button}
                onPress={handleSignInButtonPressed}
                text="Logga in med BankID"
                variant={'primary'}
              />
              <Button
                style={style.button}
                onPress={handleSignInButtonPressed}
                text="Annan inloggning"
                variant={'primary'}
              />
              {initializing && (
                <View>
                  <ActivityIndicator size="large" color="#00ff00" />
                </View>
              )}
            </View>
            <View style={style.buttonContainer}>
              <Text style={style.loggInStatusText}>
                You are currently logged out
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default LoginScene;
