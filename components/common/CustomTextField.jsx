import * as React from "react";
import { TextInput } from "react-native-web";

export function CustomTextField({ 
  hint, 
  value, 
  onChangeText, 
  secure = false,
  keyboardType = "default"
}) {
  return (
    <TextInput
      className="border rounded p-2 mb-4"
      placeholder = {hint}
      value={value}
      secureTextEntry={secure}
      keyboardType={keyboardType}
      onChangeText={onChangeText}
    />
  );
}