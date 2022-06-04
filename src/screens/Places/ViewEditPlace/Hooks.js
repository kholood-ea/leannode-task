import { Alert } from "react-native";
import { useState, useEffect } from "react";
import { getDoc, setDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase";
import { useAuth } from "../../../context/user";
export default function ({ route, navigation }) {
  const { userInfo } = useAuth();
  const [placeDetails, setPlaceDetails] = useState({});
  const { placeId } = route.params;

  const fetchDetails = async (id) => {
    const docRef = doc(db, "places", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setPlaceDetails(docSnap.data());
    } else {
      Alert.alert("No such document!");
    }

    // const q = query(collection(db, "places"), where("id", "==", id));

    // const querySnapshot = await getDocs(q);
    // querySnapshot.forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   console.log(doc.id, " => ", doc.data());
    // });
  };
  const Save = () => {
    setDoc(doc(db, "places", placeId), {
      name: placeDetails.name,
      phone_number: placeDetails.phone_number,
      type: placeDetails.type,
      location_coords: placeDetails.location_coords,
      userId: userInfo,
    })
      .then(navigation.navigate("Home Page"))
      .catch((err) => Alert.alert(err));
  };

  useEffect(() => {
    fetchDetails(placeId);
    return () => {};
  }, [placeId]);

  return { placeDetails, setPlaceDetails, Save };
}
