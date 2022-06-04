import { useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import React from "react";
import { collection, query, where, getDocs } from "firebase/firestore";

import { useAuth } from "../../context/user";
import { db } from "../../firebase";
export default function Hooks(props) {
  const { userInfo } = useAuth();
  const [coords, setCoords] = useState();
  const [places, setPlaces] = useState([]);

  const fetchPlaces = async () => {
    const q = query(collection(db, "places"), where("userId", "==", userInfo));

    const querySnapshot = await getDocs(q);
    let locations = [];
    querySnapshot.forEach((doc) => {
      // console.log(doc);
      locations.push({ ...doc.data(), id: doc.id });
    });
    setPlaces(locations);
  };
  useFocusEffect(
    React.useCallback(() => {
      fetchPlaces();
    }, [])
  );

  return {
    places,
    coords,
    setCoords,
  };
}
