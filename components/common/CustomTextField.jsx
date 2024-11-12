import * as React from "react";

export function CustomTextField({ 
  hint, 
  value, 
  onChangeText, 
  secure = false,
  keyboardType = "text"
}) {
  return (
    <textField
      className="border rounded p-2 mb-4"
      hint={hint}
      text={value}
      secure={secure}
      keyboardType={keyboardType}
      onTextChange={(e) => onChangeText(e.value)}
    />
  );
}