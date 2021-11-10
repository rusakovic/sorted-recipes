import React from 'react';
import {
  Text,
  StyleProp,
  TextStyle,
  TextProps as BaseTextProps,
} from 'react-native';

import { colour } from '../styles';

type TextProps = BaseTextProps & {
  bold?: boolean;
  style?: StyleProp<TextStyle>;
};

const Paragraph: React.FC<TextProps> = (props) => (
  <Text
    {...props}
    style={[
      {
        fontFamily: props.bold ? 'montserratBold' : 'montserrat',
        fontSize: 14,
        color: colour.grey.dark,
      },
      props.style,
    ]}
  />
);

export default Paragraph;