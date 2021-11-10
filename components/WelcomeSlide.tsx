import React from "react";
import {
  Image,
  StyleSheet,
  View,
  StyleProp,
  ImageStyle,
  TextStyle,
  useWindowDimensions,
} from "react-native";

import Paragraph from "./Paragraph";
import Heading from "./Heading";
import { spacing, maxWidth } from "../styles";

interface Item {
  title: string;
  titleStyle: StyleProp<TextStyle>;
  text: string;
  image:
    | number
    | {
        uri: string;
      };
  imageStyle: StyleProp<ImageStyle>;
}

const WelcomeSlide = (props: Item) => {
  const { image, imageStyle, text, title, titleStyle } = props;

  const { height: deviceHeight, width: deviceWidth } = useWindowDimensions();

  const backgroundColor = "rgba(0,0,0,0.2)";

  const innerContainerStyle =
    deviceWidth > maxWidth &&
    ({
      width: maxWidth,
      alignSelf: "center",
    } as const);

  return (
    <View style={[styles.wrapper, { width: deviceWidth }]}>
      <Image
        source={image}
        style={[imageStyle, { width: deviceWidth, height: deviceHeight }]}
      />
      <View style={[StyleSheet.absoluteFill, { backgroundColor }]} />
      <Heading
        size="h1"
        style={[styles.title, titleStyle, innerContainerStyle]}
      >
        {title}
      </Heading>
      <Paragraph style={[styles.text, innerContainerStyle]}>{text}</Paragraph>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    paddingVertical: spacing.xl,
    paddingHorizontal: spacing.xl,
    fontSize: 40,
    color: "#fff",
  },
  text: {
    paddingHorizontal: spacing.xl,
    paddingRight: spacing.xl * 1.5,
    color: "#fff",
    maxWidth: 500,
  },
  wrapper: {
    justifyContent: "flex-start",
    paddingTop: 20,
  },
});

export default WelcomeSlide;
