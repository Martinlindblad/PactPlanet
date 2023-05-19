import React from 'react';
import {View} from 'react-native';
import {SvgProps} from 'react-native-svg';

const RenderIllustration = ({
  Svg,
  width = 200,
  height = 200,
}: {
  width?: number;
  height?: number;
  Svg: React.FC<SvgProps>;
}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Svg width={width} height={height} />
    </View>
  );
};

export default RenderIllustration;
