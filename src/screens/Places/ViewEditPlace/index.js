import { View, Text, SafeAreaView } from "react-native";
import { Picker } from "react-native";

import React from "react";
import Hooks from "./Hooks";
import FormFeild from "../../../components/FormFeild";
import Btn from "../../../components/Btn";
export default function ({ route, navigation }) {
  const { placeDetails, setPlaceDetails, Save } = Hooks({ route, navigation });

  return (
    <SafeAreaView>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Text style={{ fontSize: 20 }}>Place Details:{"\n"}</Text>
      </View>
      <View style={{ justifyContent: "center", margin: 20 }}>
        <FormFeild
          title={"Name"}
          value={placeDetails.name}
          onTextChange={(name) => {
            setPlaceDetails({ ...placeDetails, name: name });
          }}
        />
        <Text style={{ fontSize: 20, marginBottom: 10, marginTop: 10 }}>
          Type
        </Text>
        <Picker
          selectedValue={placeDetails.type}
          onValueChange={(itemValue, itemIndex) =>
            setPlaceDetails({ ...placeDetails, type: itemValue })
          }
        >
          <Picker.Item label="home" value="home" />
          <Picker.Item label="restaurant" value="restaurant" />
          <Picker.Item label="park" value="park" />
        </Picker>
        <FormFeild
          title={"Phone number"}
          keyboardType={"number-pad"}
          value={placeDetails.phone_number}
          onTextChange={(phone_number) => {
            setPlaceDetails({ ...placeDetails, phone_number: phone_number });
          }}
        />
        <Text style={{ fontSize: 20, marginBottom: 10, marginTop: 10 }}>
          Coordinates :
        </Text>
        <FormFeild
          title={"Latitude"}
          keyboardType={"number-pad"}
          value={placeDetails?.location_coords?.latitude.toString()}
          onTextChange={(latitude) => {
            var location_coords = placeDetails.location_coords;
            location_coords.latitude = latitude;

            setPlaceDetails({
              ...placeDetails,
              location_coords,
            });
          }}
        />
        <FormFeild
          title={"Longitude"}
          keyboardType={"number-pad"}
          value={placeDetails?.location_coords?.longitude.toString()}
          onTextChange={(longitude) => {
            var location_coords = placeDetails.location_coords;
            location_coords.longitude = longitude;

            setPlaceDetails({
              ...placeDetails,
              location_coords,
            });
          }}
        />
        <View style={{ margin: 20 }}>
          <Btn title={"save"} size={40} onPress={() => Save()} />
        </View>
      </View>
    </SafeAreaView>
  );
}
