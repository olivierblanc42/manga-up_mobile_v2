import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export function CustomButton({
  text,
  onTap,
  variant = "primary",
  disabled = false,
  style = {},
}) {
  const buttonStyles = [
    styles.button,
    variant === "primary" ? styles.primaryButton : styles.secondaryButton,
    disabled && styles.disabledButton,
    style,
  ];

  const textStyles = [
    styles.text,
    variant === "primary" ? styles.primaryText : styles.secondaryText,
    disabled && styles.disabledText,
  ];

  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={onTap}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 120,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  primaryButton: {
    backgroundColor: "#3B82F6",
    borderWidth: 0,
  },
  secondaryButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#3B82F6",
  },
  disabledButton: {
    opacity: 0.5,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
  primaryText: {
    color: "#FFFFFF",
  },
  secondaryText: {
    color: "#3B82F6",
  },
  disabledText: {
    opacity: 0.7,
  },
});
