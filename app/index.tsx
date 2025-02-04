import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  Pressable,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

const icon = require("../assets/images/icon.png");

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#09f",
      }}
    >
      <Image
        fadeDuration={10}
        source={icon}
        style={{ width: 200, height: 100 }}
        resizeMode="center"
      />
      <Text style={{ textAlign: "center" }}>
        Edit app/index.tsx to edit this screen.
      </Text>

      <StatusBar backgroundColor="#09f" style="auto" />

      <Pressable
        onPress={() => alert("hola")}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "blue" : "white",
          },
        ]}
      >
        {({ pressed }) => (
          <Text
            style={{
              textAlign: "center",
              fontWeight: 600,
              fontSize: 14,
            }}
          >
            {pressed ? "Pressed!" : "Press Me"}
          </Text>
        )}
      </Pressable>
    </View>
  );
}
