import styles from "./Styling";

import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import Btn from "../../components/Btn";
import FormFeild from "../../components/FormFeild";
import Hooks from "./Hooks";

const processSelection = (title, active, onPress) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={[styles.processTitle, { color: active ? "blue" : "black" }]}>
      {title}
    </Text>
  </TouchableOpacity>
);

export default ({ navigation }) => {
  const {
    alert,
    handleSubmit,
    setUserEmail,
    setUserPassword,
    userCredentials,
  } = Hooks();

  const [activeProcess, setActiveProcess] = useState("Login");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      {alert && (
        <Text style={[styles.processTitle, { color: "red" }]}>
          Signing is not successful
        </Text>
      )}
      <View style={{ flexDirection: "row" }}>
        {processSelection("Login  ", activeProcess == "Login", () => {
          setActiveProcess("Login");
        })}
        <Text style={[styles.processTitle]}>/</Text>
        {processSelection("  register", activeProcess == "register", () => {
          setActiveProcess("register");
        })}
      </View>
      <FormFeild
        title={"Email"}
        value={userCredentials.email}
        onTextChange={setUserEmail}
      />

      <FormFeild
        secureTextEntry={true}
        title={"Password"}
        value={userCredentials.password}
        onTextChange={setUserPassword}
      />
      <Btn
        title={"Submit"}
        onPress={() => handleSubmit(activeProcess, navigation)}
        size={50}
      />
    </View>
  );
};
