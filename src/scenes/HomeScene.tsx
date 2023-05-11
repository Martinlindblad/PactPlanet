import React, {useCallback, useMemo} from 'react';
import {SafeAreaView, View, StyleSheet, FlatList} from 'react-native';
import WelcomeHeader from '../components/WelcomeHeader';

const HomeScene = (): JSX.Element => {
  const sections = useMemo(() => {
    return [{welcome: {title: 'welcome'}}];
  }, []);
  // const welcomePressed = useCallback(() => {}, []);

  const renderSection = useCallback(() => {
    return <View style={styles.item}></View>;
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <WelcomeHeader />
      <FlatList data={sections} renderItem={renderSection} />
    </SafeAreaView>
  );
};

export default HomeScene;

const styles = StyleSheet.create({
  welcomeContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  content: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  item: {
    width: '100%',
    backgroundColor: 'orange',
  },
});
