import React, { useState } from "react";

import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Btn from "../../components/Btn";
import { styles } from "./styles";
import Hooks from "./Hooks";
export default ({ navigation }) => {
  const { coords, setCoords, places } = Hooks(navigation);
  const [userLocation, setUserLocation] = useState({});

  const imagePath = "../../assets/images/mapMarkers/";
  var _mapView;

  const animateMap = (e) => {
    let lat = e.nativeEvent.coordinate.latitude;
    let lng = e.nativeEvent.coordinate.longitude;
    _mapView.animateToCoordinate(
      {
        latitude: Number(lat),
        longitude: Number(lng),
      },
      1000
    ),
      setUserLocation({ lat: lat, lng: lng });
  };

  return (
    <View style={{ flex: 1, justifyContent: "space-between" }}>
      <View style={styles.container}>
        <MapView
          ref={(mapView) => {
            _mapView = mapView;
          }}
          onUserLocationChange={(e) => animateMap(e)}
          provider={"google"}
          showsUserLocation
          showsCompass={true}
          style={styles.map}
          zoomEnabled
          minZoomLevel={3}
          loadingEnabled
          showsMyLocationButton
        >
          {places &&
            places.map((p) => (
              <Marker
                onPress={() =>
                  navigation.navigate("ViewEdit Place", { placeId: p.id })
                }
                key={p.id}
                coordinate={{
                  latitude: p.location_coords.latitude,
                  longitude: p.location_coords.longitude,
                }}
                icon={
                  (p.type == "home" && require(imagePath + "home.png")) ||
                  (p.type == "park" && require(imagePath + "park.png")) ||
                  (p.type == "restaurant" &&
                    require(imagePath + "restaurant.png"))
                }
              ></Marker>
            ))}
          <Marker
            key={1}
            coordinate={{
              latitude: userLocation.lat,
              longitude: userLocation.lng,
            }}
            draggable
            onDragEnd={(e) => {
              setCoords(e.nativeEvent.coordinate);
            }}
          />
        </MapView>
      </View>
      <View style={{ flex: 2 / 8, flexDirection: "column" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            padding: 30,
          }}
        >
          <Btn
            title={"Add place"}
            onPress={() => {
              navigation.navigate("Add Place", { coords: coords });
            }}
            size={50}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Btn
            title={"Saved Places"}
            onPress={() => {
              navigation.navigate("All Places", { places: places });
            }}
            size={50}
          />
        </View>
      </View>
    </View>
  );
};
