import React, {useCallback} from 'react';
import {
  Pressable,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';

const LocationListScene = (): JSX.Element => {
  const handleLocationItemPressed = useCallback(() => {}, []);

  const renderLocationItem = useCallback(
    ({item}: {item: any}) => {
      return (
        <Pressable onPress={handleLocationItemPressed}>
          <View style={styles.locationContainer}>
            <Text>{item.title}</Text>
          </View>
        </Pressable>
      );
    },
    [handleLocationItemPressed],
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={[{title: 'Test Location'}]}
        renderItem={renderLocationItem}
      />
    </SafeAreaView>
  );
};

export default LocationListScene;

const styles = StyleSheet.create({
  locationContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});
