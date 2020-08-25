const geoSuccess= position => {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  alert("lat:" + lat + " lng:" + lng);
}

const geoError = () => {
  alert("Geocoder failed.");
}

const geolocation = () => {
  navigator.geolocation.getCurrentPosition(geoSuccess, geoError)
}


console.log(geolocation());
