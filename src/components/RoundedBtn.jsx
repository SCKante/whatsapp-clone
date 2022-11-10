import { TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";

const RoundedBtn = ({ source, isdarkMode, onPress, tintColor }) => {
  return (
    <TouchableOpacity
      {...{ onPress }}
      style={{
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: isdarkMode ? "white" : "grey",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={source}
        style={{ width: 22, height: 22, tintColor }}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export default RoundedBtn;
