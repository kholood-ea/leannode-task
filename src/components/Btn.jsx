import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export default (props) => {
  const{style ,title, onPress, size}=props
  return (
    <TouchableOpacity
    disabled={props.disabled}
      style={[styles(props).button, { width: wp(size) },style]}
      onPress={onPress}
    >
      <Text style={{color:props.disabled&&"grey"}}>{title} </Text>
    </TouchableOpacity>
  );
};
const styles =props=> StyleSheet.create({
  button: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor:props.disabled&&"grey",
    padding: 5,
    justifyContent: "center",
    paddingVertical: 15,
  },
  title: { fontSize: 20, paddingVertical: 5, },
});
