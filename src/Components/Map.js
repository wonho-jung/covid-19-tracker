import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
// MapContainer as LeafletMap,
import "./Map.css";
import { useMap } from "react-leaflet";

function Map({ countries, center, zoom }) {
  console.log("from map.js", center, zoom);
  console.log(countries);
  const MyComponent = () => {
    const map = useMap();
    map.setView([center.lat, center.lng], zoom);
    console.log("map center:", map.getCenter(), map.getZoom());
    return null;
  };

  return (
    <div className="map">
      <MapContainer center={center} zoom={zoom} scrollWheelZoom={false}>
        <MyComponent />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}

export default Map;
