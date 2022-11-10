// import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import ChatItem from "../components/ChatItem";
import chats from "../assets/data/chats.json";

export default function ChatListScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.storiesContainer}>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ alignItems: "center" }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <TouchableOpacity
            style={{
              marginRight: 8,
              marginLeft: 16,
            }}
          >
            <View style={styles.addStorie}>
              <Text style={{ fontSize: 32, fontWeight: "600", color: "white" }}>
                +
              </Text>
            </View>
            <Text style={styles.storieLabel}>New Status</Text>
          </TouchableOpacity>
          {chats.map((chat, index) => (
            <TouchableOpacity key={index} style={{ marginHorizontal: 8 }}>
              <Image
                source={{ uri: chat.user.image }}
                style={styles.storieImage}
              />
              <Text style={styles.storieLabel}>{chat.user.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <FlatList
        data={chats}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <ChatItem
            message={item.lastMessage.text}
            name={item.user.name}
            imgUri={item.user.image}
            createdAt={item.lastMessage.createdAt}
            onPress={() => navigation.navigate("Chat")}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  storiesContainer: {
    height: 120,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgrey",
  },
  storieImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "rgb(90, 225, 130)",
  },
  storieLabel: {
    fontSize: 14,
    textAlign: "center",
    color: "grey",
    paddingTop: 8,
  },
  addStorie: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(90, 225, 130)",
  },
});
