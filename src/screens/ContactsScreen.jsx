import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import * as Contacts from "expo-contacts";

const ContactsScreen = () => {
  const [contacts, setContacts] = useState();
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Emails],
        });

        if (data.length > 0) {
          setContacts(data);
        }
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        keyExtractor={(contact) => contact.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.contact}>
              <TouchableOpacity>
                <View style={styles.profile} />
              </TouchableOpacity>
              <TouchableOpacity style={{ marginLeft: 10 }}>
                <Text style={styles.username}>
                  {item.firstName} {item.lastName}
                </Text>
                <Text style={styles.textBody}>Hi! I'm using whatsapp</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ContactsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 16,
  },
  contact: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "lightgrey",
    paddingVertical: 12,
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "lightgrey",
  },
  username: {
    fontSize: 16,
    fontWeight: "bold",
    paddingBottom: 5,
  },
  textBody: {
    fontSize: 13,
    color: "grey",
  },
});
