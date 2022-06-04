import React, { useEffect } from "react";
import { Alert, Picker } from "react-native";

import { Text, SafeAreaView } from "react-native";
import { styles } from "./styles";
import FormFeild from "../../../components/FormFeild";
import Btn from "../../../components/Btn";
import Hooks from "./Hooks";
export default function ({ navigation, route }) {
  const { location, setLocation, Save } = Hooks();
  const coords = route.params.coords;
  useEffect(() => {
    if (!coords) {
      navigation.pop();
      Alert.alert("please choose location");
    }
    setLocation({
      ...location,
      coords: { latitude: coords?.latitude, longitude: coords?.longitude },
    });
  }, [1]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}> Add place Form</Text>
      <FormFeild
        title={"Name"}
        value={location.name}
        onTextChange={(name) => {
          setLocation({ ...location, name: name });
        }}
      />
      <FormFeild
        title={"Phone number"}
        keyboardType={"number-pad"}
        value={location.phoneNumber}
        onTextChange={(phoneNo) => {
          setLocation({ ...location, phoneNumber: phoneNo });
        }}
      />
      <Picker
        selectedValue={location.type}
        onValueChange={(itemValue, itemIndex) =>
          setLocation({ ...location, type: itemValue })
        }
      >
        <Picker.Item label="home" value="home" />
        <Picker.Item label="restaurant" value="restaurant" />
        <Picker.Item label="park" value="park" />
      </Picker>
      <Btn
        title={"Save"}
        onPress={() => {
          Save(navigation);
        }}
        size={50}
      />
    </SafeAreaView>
  );
}
