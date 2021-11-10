import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import Paragraph from "./Paragraph";
import { colour } from "../styles";

interface TextLinkProps extends TouchableOpacityProps {
  bold?: boolean;
}

const TextLink: React.FC<TextLinkProps> = ({ bold, children, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Paragraph
      bold={bold}
      style={[styles.textCenter, { color: colour.primary.default }]}
    >
      {children}
    </Paragraph>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  textCenter: { textAlign: "center" },
});

export default TextLink;
