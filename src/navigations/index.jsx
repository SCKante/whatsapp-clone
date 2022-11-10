import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, TouchableOpacity } from "react-native";

import {
  CallsScreen,
  ChatListScreen,
  ChatScreen,
  ContactsScreen,
  ParameterScreen,
} from "../screens";
import images from "../assets/images";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "rgb(90, 225, 130)",
        tabBarInactiveTintColor: "grey",
      }}
      initialRouteName="Chats"
    >
      <Tab.Screen
        name="Calls"
        component={CallsScreen}
        options={({ navigation }) => ({
          headerRight: () => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("Contacts")}
                style={{ marginRight: 16 }}
              >
                <Image
                  source={images.users}
                  style={{
                    width: 28,
                    height: 28,
                    tintColor: "rgb(90, 225, 130)",
                  }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            );
          },
          tabBarIcon: ({ color }) => {
            return (
              <Image
                source={images.phone}
                style={{ width: 20, height: 20, tintColor: color }}
                resizeMode="contain"
              />
            );
          },
        })}
      />
      <Tab.Screen
        name="ChatList"
        component={ChatListScreen}
        options={({ navigation }) => ({
          headerTitle: "Chats",
          headerTitleStyle: { fontSize: 20, fontWeight: "bold" },
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerRight: () => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("Contacts")}
                style={{ marginRight: 16 }}
              >
                <Image
                  source={images.users}
                  style={{
                    width: 28,
                    height: 28,
                    tintColor: "rgb(90, 225, 130)",
                  }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            );
          },
          tabBarIcon: ({ color }) => {
            return (
              <Image
                source={images.chat}
                style={{ width: 20, height: 20, tintColor: color }}
                resizeMode="contain"
              />
            );
          },
        })}
      />
      <Tab.Screen
        name="Parameter"
        component={ParameterScreen}
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <Image
                source={images.settings}
                style={{ width: 20, height: 20, tintColor: color }}
                resizeMode="contain"
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={TabNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            headerTitle: "Chat",
            headerTitleStyle: { fontSize: 20, fontWeight: "bold" },
            headerStyle: {
              backgroundColor: "#fff",
            },
            headerBackVisible: false,
          }}
        />
        <Stack.Screen
          name="Contacts"
          component={ContactsScreen}
          options={{
            headerTitle: "Contacts",
            headerTitleStyle: { fontSize: 20, fontWeight: "bold" },
            headerStyle: {
              backgroundColor: "#fff",
            },
            headerBackVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
