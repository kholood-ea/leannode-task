import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import Btn from "../../../components/Btn";
import Hooks from "./Hooks";
export default function ({ navigation, route }) {
  const { sortedPlaces } = Hooks({ route });
  const [placeId, setPlaceId] = useState("");
  const loc = (loc) => (
    <View
      key={loc.id}
      style={{
        flex: 3 / 8,
        backgroundColor: "lightgrey",
        padding: 5,
        margin: 2,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View>
        <View style={{ flexDirection: "row", paddingVertical: 10 }}>
          <Entypo name="location-pin" size={24} color="blue" />
          <Text>{loc.name}</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 5,
          height: 50,
        }}
      >
        <Btn
          title={"View | Edit"}
          onPress={() => {
            navigation.navigate("ViewEdit Place", { placeId: loc.id });
          }}
          size={20}
        />
      </View>
    </View>
  );

  return (
    <SafeAreaView>
      <Text style={{ padding: 10, fontSize: 20 }}>List OF places:</Text>
      <ScrollView style={{ padding: 10 }}>
        {sortedPlaces && sortedPlaces.map((p) => loc(p))}
      </ScrollView>
    </SafeAreaView>
  );
}
