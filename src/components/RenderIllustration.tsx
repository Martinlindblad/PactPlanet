import React from 'react';
import {View} from 'react-native';
import Svg, {Image} from 'react-native-svg';

const RenderIllustration = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <Svg width={200} height={200}>
        <Image
          href={require('./assets/svg/illustrations/share_knowledge.svg')}
          width={200}
          height={200}
        />
      </Svg>
    </View>
  );
};

export default RenderIllustration;
