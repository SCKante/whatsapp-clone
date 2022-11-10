import { View, Text, Platform } from "react-native";
import React from "react";
import Navigator from "./src/navigations";
import { setBackgroundColorAsync } from "expo-navigation-bar";

const App = () => {
  if (Platform.OS == "android") {
    setBackgroundColorAsync("white");
  }
  return <Navigator />;
};

export default App;
