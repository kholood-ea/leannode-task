import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export default (props) => {
  return (
    <View>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.button}>
        <TextInput
        keyboardType={props.keyboardType}
        secureTextEntry={props.secureTextEntry}
          value={props.value}
          onChangeText={(value) => props.onTextChange(value)}
        ></TextInput>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    padding: 5,
    width: wp(75),
    paddingVertical: 15,
  },
  title: { fontSize: 20, paddingVertical: 5 },
});
