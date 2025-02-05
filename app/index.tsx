import { getLatestGames } from "@/lib/metacritic";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Button,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import Constants from "expo-constants";

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
      <StatusBar backgroundColor="#09f" style="auto" />

      <SafeAreaView>
        <View style={styles.container}>
          {new Array(20).fill("null").map((game) => (
            <View>
              <Image
                source={{
                  uri: "https://www.nintendo.com/eu/media/images/10_share_images/games_15/gamecube_12/SI_GCN_TheLegendOfZeldaTheWindWaker_image1600w.jpg",
                }}
                resizeMode="center"
                style={styles.image}
              />
            </View>
          ))}
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    gap: 10,
  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
});
