import React, {useCallback, useMemo} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
} from 'react-native';

const OnboardingScene = (): JSX.Element => {
  const sections = useMemo(() => {
    return [{title: 'welcome'}];
  }, []);
  // const welcomePressed = useCallback(() => {}, []);
  const renderSection = useCallback(({item}: {item: any}) => {
    return (
      <Pressable>
        <View style={styles.content}>
          <Text>{item.title}</Text>
        </View>
      </Pressable>
    );
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList data={sections} renderItem={renderSection} />
    </SafeAreaView>
  );
};

export default OnboardingScene;

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
});
