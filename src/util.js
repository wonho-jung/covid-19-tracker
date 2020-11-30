import React from "react";
import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";
import L from "leaflet";

export const iconPerson = new L.Icon({
  iconUrl: "https://www.flaticon.com/svg/static/icons/svg/67/67347.svg",
  iconRetinaUrl: "https://www.flaticon.com/svg/static/icons/svg/67/67347.svg",
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(20, 20),
  className: "leaflet-div-icon",
});

const casesTypeColors = {
  cases: {
    hex: "#CC1034",
    multiplier: 400,
  },
  recovered: {
    hex: "#7dd71d",
    multiplier: 400,
  },
  deaths: {
    hex: "#fb4443",
    multiplier: 400,
  },
};

export const sortData = (data) => {
  const sortedData = [...data];
  sortedData.sort((a, b) => (a.cases > b.cases ? -1 : 1));
  return sortedData;
};

export const prettyPrintStat = (stat) =>
  stat ? `+${numeral(stat).format("0.0a")}` : "+0";

export const showDataOnMap = (data, casesType) =>
  data.map((country) => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      color={casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      fillOpacity={0.4}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }
    >
      <Popup>
        <div className="info-container">
          <div
            className="info-flag"
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          ></div>
          <div className="info-name">{country.country}</div>
          <div className="info-confirmed">
            Cases: {numeral(country.cases).format("0,0")}
          </div>
          <div className="info-recovered">
            Recovered: {numeral(country.recovered).format("0,0")}
          </div>
          <div className="info-deaths">
            Deaths: {numeral(country.deaths).format("0,0")}
          </div>
        </div>
      </Popup>
    </Circle>
  ));
