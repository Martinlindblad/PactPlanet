import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

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
  return (
    <View style={styles.welcomeContainer}>
      <View style={styles.imageContainer} />
      <View>
        <Text style={styles.headerText}>Pact planet</Text>
        <Text style={styles.subtitle}>Sir.</Text>
        <Text style={styles.subtitle}>Christoffer Wedemark</Text>
      </View>
    </View>
  );
};

export default WelcomeHeader;
