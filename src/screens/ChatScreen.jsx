import {
  FlatList,
  ImageBackground,
  Text,
  TextInput,
  View,
  StyleSheet,
} from "react-native";
import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import messages from "../assets/data/messages.json";
import { RoundedBtn } from "../components";
import images from "../assets/images";

dayjs.extend(relativeTime);

const ChatScreen = () => {
  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../assets/images/BG.png")}
    >
      <FlatList
        data={messages}
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
        contentContainerStyle={{ padding: 16 }}
        inverted
        renderItem={({ item }) => {
          const borderBottomRightRadius = item.user.id === "u1" ? 0 : 40;
          const borderBottomLeftRadius = item.user.id === "u2" ? 0 : 40;
          return (
            <View
              style={{
                alignItems: item.user.id === "u1" ? "flex-end" : "flex-start",
                marginVertical: 5,
              }}
            >
              <View
                style={{
                  maxWidth: "80%",
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  backgroundColor:
                    item.user.id === "u1" ? "rgb(90, 225, 130)" : "white",
                  borderRadius: 40,
                  borderBottomRightRadius,
                  borderBottomLeftRadius,
                }}
              >
                <Text
                  style={{
                    fontSize: 13,
                    color: item.user.id === "u1" ? "white" : "black",
                  }}
                >
                  {item.text}
                </Text>
              </View>
              <Text style={{ fontSize: 10, color: "grey" }}>
                {dayjs(item.createdAt).fromNow()}
              </Text>
            </View>
          );
        }}
      />
      <View style={styles.footer}>
        <RoundedBtn
          source={images.camera}
          onPress={() => console.warn("open camera")}
          tintColor="rgb(92, 208, 161)"
        />
        <View style={styles.separator} />
        <TextInput style={styles.input} placeholder="message..." />
        <View style={styles.separator} />
        <RoundedBtn
          source={images.microphone}
          onPress={() => console.warn("recording voice")}
          tintColor="rgb(92, 208, 161)"
        />
        <View style={styles.separator} />
        <RoundedBtn
          source={images.more}
          onPress={() => console.warn("see more")}
          tintColor="grey"
        />
      </View>
    </ImageBackground>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  footer: {
    height: 60,
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "grey",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  separator: {
    width: 10,
  },
});
