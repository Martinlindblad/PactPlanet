import {Text} from 'react-native';
import React from 'react';

const PPText = ({
  children,
  maxFontSizeMultiplier = 2,
  ...props
}: React.ComponentPropsWithoutRef<typeof Text>): JSX.Element => {
  return (
    <Text maxFontSizeMultiplier={maxFontSizeMultiplier} {...props}>
      {children}
    </Text>
  );
};
export default PPText;
