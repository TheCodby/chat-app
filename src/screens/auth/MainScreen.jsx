import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Chats from "./Chats";
import NewChat from "../../screens/auth/NewChat";
const Tab = createMaterialTopTabNavigator();
const MainScreen = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          borderBottomStartRadius: 25,
          borderBottomEndRadius: 25,
          overflow: "hidden",
        },
      }}
    >
      <Tab.Screen name="Chats" component={Chats} />
      <Tab.Screen
        name="NewChat"
        component={NewChat}
        options={{ title: "New Chat" }}
      />
    </Tab.Navigator>
  );
};

export default MainScreen;
