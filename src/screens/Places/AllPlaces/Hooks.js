import { useState, useEffect } from "react";

export default function ({ route }) {
  const { places } = route.params;

  const [sortedPlaces, setSortedPlaces] = useState([]);

  function dynamicSort(property) {
    var sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a, b) {
      var result =
        a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
      return result * sortOrder;
    };
  }
  useEffect(() => {
    setSortedPlaces(places.sort(dynamicSort("name")));
    return () => {};
  }, []);
  return {
    sortedPlaces,
  };
}
