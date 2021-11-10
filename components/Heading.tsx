import React from "react";
import {
  Text,
  StyleProp,
  TextStyle,
  TextProps as BaseTextProps,
} from "react-native";

import { colour } from "../styles";

type TextProps = BaseTextProps & {
  size: keyof typeof styles;
  style?: StyleProp<TextStyle>;
};

const styles = {
  large: {
    fontFamily: "renogare",
    fontSize: 22,
    color: colour.grey.veryDark,
    letterSpacing: -0.25,
  },
  h1: {
    fontFamily: "renogare",
    fontSize: 18,
    color: colour.grey.veryDark,
    letterSpacing: -0.25,
  },
  h2: {
    fontFamily: "renogare",
    fontSize: 14,
    color: colour.grey.veryDark,
    letterSpacing: -0.25,
  },
} as const;

const Heading: React.FC<TextProps> = (props) => (
  <Text {...props} style={[styles[props.size], props.style]} />
);

export default Heading;
