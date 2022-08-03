import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { Avatar, Divider, TouchableRipple } from "react-native-paper";
import { chats as dummyChats } from "../../seeds/DummyData";
import { useState } from "react";
import { mainShadow } from "../../components/ui/ShadowStyles";

const Chat = ({ chat }) => {
  return (
    <>
      <View>
        <TouchableRipple
          onPress={() => console.log("Pressed")}
          rippleColor="#a6a6a652"
        >
          <View style={styles.innerChatCard}>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <Avatar.Image size={60} source={{ uri: chat.user.avatar }} />
              <View style={{ marginStart: 10 }}>
                <Text style={{ fontSize: 16, fontFamily: "Inter_600SemiBold" }}>
                  Ahmed Kotby
                </Text>
                <Text
                  style={{
                    color: "#aeaeae",
                    fontFamily: "Inter_500Medium",
                    marginTop: 10,
                  }}
                >
                  Hello
                </Text>
              </View>
            </View>
            <Text style={{ color: "#aeaeae", fontFamily: "Inter_500Medium" }}>
              1 Day ago
            </Text>
          </View>
        </TouchableRipple>
      </View>
      <Divider />
    </>
  );
};

const Chats = () => {
  const [chats, setChats] = useState(dummyChats);
  return (
    <View
      style={{
        ...mainShadow,
        flex: 1,
        backgroundColor: "white",
        marginTop: 30,
        borderTopStartRadius: 25,
        borderTopEndRadius: 25,
        overflow: "hidden",
      }}
    >
      <FlatList
        contentContainerStyle={{ paddingBottom: 30 }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={chats}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => <Chat chat={item} />}
      />
    </View>
  );
};

export default Chats;

const styles = StyleSheet.create({
  outerChatCard: {
    backgroundColor: "white",
    borderRadius: 24,
  },
  innerChatCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 24,
    padding: 20,
  },
});
