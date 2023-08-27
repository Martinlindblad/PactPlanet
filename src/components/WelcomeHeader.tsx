import React from 'react';
import {Text, View, StyleSheet, ActivityIndicator} from 'react-native';
import RenderIllustration from './RenderIllustration';
import creation_process from 'assets/svg/illustrations/creation_process.svg';
import {useFirebaseUserAuth} from 'src/contexts/Auth';

const styles = StyleSheet.create({
  welcomeContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 20,
  },
  headerText: {
    fontSize: 28,
    color: 'black',
    fontWeight: '600',
    fontFamily: 'times',
  },
  subtitle: {
    fontSize: 18,
    color: 'black',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  imageContainer: {
    width: 65,
    height: 65,
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 65,
  },
});

const WelcomeHeader = (): JSX.Element => {
  const {initializing, currentUser} = useFirebaseUserAuth();

  return (
    <View style={styles.welcomeContainer}>
      <RenderIllustration Svg={creation_process} />
      {initializing ? (
        <View>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      ) : (
        <View>
          <Text style={styles.headerText}>Pact planet</Text>
          <Text style={styles.subtitle}>Sir.</Text>
          <Text style={styles.subtitle}>{currentUser?.email}</Text>
        </View>
      )}
    </View>
  );
};

export default WelcomeHeader;
