import {firebase} from '@react-native-firebase/auth';
import React, {useCallback} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  ScrollView,
  StatusBar,
  Text,
  Button,
  ActivityIndicator,
} from 'react-native';
import {useFirebaseUserAuth} from '../contexts/Auth';

const LoginScene = (): JSX.Element => {
  const {initializing, currentUser} = useFirebaseUserAuth();

  const handleSignOutPressed = useCallback(() => {
    firebase
      .auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.content}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
          contentContainerStyle={{padding: 40}}>
          <View style={styles.body}>
            <Text style={{color: 'black', paddingVertical: 40, fontSize: 28}}>
              {currentUser ? currentUser.email : 'Login'}
            </Text>
            <View style={styles.sectionContainer}>
              <Button onPress={handleSignOutPressed} title="Sign Out"></Button>
              {initializing && (
                <View>
                  <ActivityIndicator size="large" color="#00ff00" />
                </View>
              )}
            </View>
            <View style={styles.buttonContainer}>
              <Text style={{color: 'black'}}>You are currently logged out</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default LoginScene;

const styles = StyleSheet.create({
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
    alignItems: 'center',
  },
  body: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  scrollView: {flex: 1},
});
