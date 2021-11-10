import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Heading from "./Heading";
import { colour, radius, spacing } from "../styles";

interface ButtonProps extends TouchableOpacityProps {
}

const Button: React.FC<ButtonProps> = ({ onPress, children }) => (
  <TouchableOpacity style={styles.button} activeOpacity={0.9} onPress={onPress}>
    <LinearGradient
      colors={[colour.primary.default, colour.primary.light]}
      start={{
        x: 0.0,
        y: 0.0,
      }}
      end={{
        x: 1.0,
        y: 0.0,
      }}
      style={StyleSheet.absoluteFill}
    />
    <Heading size="h2" style={styles.text}>
      {children}
    </Heading>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: colour.primary.default,
    alignItems: "center",
    padding: spacing.sd,
    margin: spacing.sd,
    marginTop: spacing.lg,
    borderRadius: radius.xl,
    overflow: "hidden",
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Button;
