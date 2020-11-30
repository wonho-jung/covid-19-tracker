import React, { useState, useEffect } from "react";
import { Map as LeafletMap, TileLayer, Marker } from "react-leaflet";
import { iconPerson, showDataOnMap } from "../util";
import "./Map.css";

function Map({ countries, casesType, center, zoom }) {
  return (
    <div className="map">
      <LeafletMap center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {<Marker position={center} icon={iconPerson} />}
        {showDataOnMap(countries, casesType)}
      </LeafletMap>
    </div>
  );
}

export default Map;
