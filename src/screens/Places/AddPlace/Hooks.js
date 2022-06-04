import { Alert } from "react-native";
import { useState } from "react";
import * as yup from "yup";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { useAuth } from "../../../context/user";
export default function () {
  const { userInfo } = useAuth();
  const [location, setLocation] = useState({
    name: "",
    phoneNumber: "",
    type: "home",
    coords: { latitude: 0, longitude: 0 },
  });

  let schema = yup.object().shape({
    name: yup.string().required().min(4),
    phoneNumber: yup.string().required(),
    type: yup.string().required(),
    coors: yup.object().required(),
  });
  const Save = async (nav) => {
    const valid = await validateEnteries();
    if (valid === true) {
      addDoc(collection(db, "places"), {
        location_coords: location.coords,
        name: location.name,
        phone_number: location.phoneNumber,
        type: location.type,
        userId: userInfo,
      }).then((res) => nav.pop());
    }
  };

  const validateEnteries = () => {
    return schema
      .isValid({
        name: location.name,
        phoneNumber: location.phoneNumber,
        type: location.type,
        coors: location.coords,
      })
      .then(function (valid) {
        if (valid == true) {
          return true;
        } else {
          Alert.alert(
            "Make sure: you selected a place correctly on your map, name is more than 4 characters, phone number field is filled"
          );
        }
      });
  };
  return {
    Save,
    location,
    setLocation,
  };
}
