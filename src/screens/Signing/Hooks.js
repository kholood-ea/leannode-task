import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";

import { useState } from "react";
import { Alert } from "react-native";
import { authentication, db } from "../../firebase";
import { useAuth } from "../../context/user";
export default () => {
  const { setUserInfo } = useAuth();
  const [userCredentials, setuserCredentials] = useState({
    email: "",
    password: "",
    token: null,
  });

  const setUserEmail = (email) => {
    setuserCredentials({ ...userCredentials, email: email });
  };
  const setUserPassword = (password) => {
    setuserCredentials({ ...userCredentials, password: password });
  };
  const register = (nav) => {
    createUserWithEmailAndPassword(
      authentication,
      userCredentials.email,
      userCredentials.password
    )
      .then((userCredential) => {
        const user = userCredential.user;
        setUserInfo(user.uid);
        Alert.alert("User Signed up successfully");
        nav.navigate("Home Page");

        setDoc(doc(db, "users", user.uid), {
          email: userCredentials.email,
        });
        // addDoc(collection(db, "users"), {
        //   id: user.uid,
        //   email: userCredentials.email,
        // });

        // return db.collection("users").doc(user.uid).set({
        //   email: userCredentials.email,
        // });
      })
      .catch((error) => {
        console.log(error);
        Alert.alert(JSON.stringify(error));
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  const login = (nav) => {
    signInWithEmailAndPassword(
      authentication,
      userCredentials.email,
      userCredentials.password
    )
      .then((userCredential) => {
        const user = userCredential.user;
        setUserInfo(user.uid);
        // console.log(user);
        Alert.alert("User Signed in successfully");

        nav.navigate("Home Page");
      })
      .catch((error) => {
        Alert.alert(JSON.stringify(error));
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  const handleSubmit = (activeProcess, nav) => {
    if (activeProcess == "Login") {
      login(nav);
    } else {
      register(nav);
    }
  };
  return {
    handleSubmit,
    register,
    login,
    setUserEmail,
    setUserPassword,
    userCredentials,
  };
};
