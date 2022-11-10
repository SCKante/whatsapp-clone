import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const ChatItem = ({ isOnline, imgUri, name, message, createdAt, onPress }) => {
  return (
    <TouchableOpacity {...{ onPress }} style={styles.chatContainer}>
      <View style={styles.profileContainer}>
        <Image
          source={{
            uri: imgUri,
          }}
          style={styles.profileImage}
        />
        {isOnline && <View style={styles.onlineIndicator} />}
      </View>
      <View style={styles.messageContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text numberOfLines={2} style={styles.textBody}>
          {message}{" "}
        </Text>
      </View>
      <Text style={styles.textBody}>{dayjs(createdAt).fromNow()}</Text>
    </TouchableOpacity>
  );
};

export default ChatItem;

const styles = StyleSheet.create({
  chatContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgrey",
  },
  profileContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "white",
  },
  messageContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    paddingBottom: 5,
  },
  textBody: {
    fontSize: 13,
    color: "grey",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    borderRadius: 30,
  },
  onlineIndicator: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    backgroundColor: "rgb(90, 225, 130)",
    borderColor: "white",
  },
});
