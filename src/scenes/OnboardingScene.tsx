import React, {useCallback, useMemo} from 'react';
import {SafeAreaView, View, Text, StyleSheet, FlatList} from 'react-native';

import GetStarted from 'src/../assets/onboardingSlides/GetStarted';
import Security from 'src/../assets/onboardingSlides/Security';
import WhyPactPlanet from 'src/../assets/onboardingSlides/WhyPactPlanet';
import Flexibility from 'src/../assets/onboardingSlides/Flexibility';
import Networking from 'src/../assets/onboardingSlides/Networking';
import {OnboardingSlide} from 'src/types/Onboarding';
import RenderIllustration from 'src/components/RenderIllustration';

const OnboardingScene = (): JSX.Element => {
  const sections = useMemo(() => {
    return [GetStarted, Security, WhyPactPlanet, Flexibility, Networking].sort(
      item => item.slide,
    );
  }, []);
  const renderSlide = useCallback(({item}: {item: OnboardingSlide}) => {
    return (
      <View style={styles.content}>
        <Text>{item.title}</Text>
        <RenderIllustration Svg={item.visual} />
      </View>
    );
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList data={sections} horizontal renderItem={renderSlide} />
    </SafeAreaView>
  );
};

export default OnboardingScene;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});
