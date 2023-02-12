import React from "react";
import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";

import "../node_modules/leaflet/dist/leaflet.css";

import HeatmapLayer from "react-leaflet-heatmap-layer";
import { geojson } from "./atd";

class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 48.137154,
      lng: 11.576124,
      zoom: 12,
      position: [48.137154, 11.576124]
    };
    this.addressPoints = [
      [48.2, 11.62, 20],
      [48.0, 11.51, 10],
      [48.08, 11.7, 30],
      [48.11, 11.5, 40],
      [48.11, 11.6, 60],
      [48.137154, 11.576124, 100]
      // Add more points as needed
    ];
    this.BSIcon = L.icon({
      iconUrl:
        "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41]
    });
  }

  render() {
    return (
      <LeafletMap center={this.state.position} zoom={this.state.zoom}>
        <HeatmapLayer
          // fitBoundsOnLoad
          // fitBoundsOnUpdate
          points={this.addressPoints}
          longitudeExtractor={(m) => m[1]}
          latitudeExtractor={(m) => m[0]}
          intensityExtractor={(m) => parseFloat(m[2])}
          radius={20}
          max={10}
          minOpacity={1}
          useLocalExtrema={true}
        />

        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <Marker position={[48.2, 11.62]} icon={this.BSIcon}>
          <Popup>BS1</Popup>
        </Marker>
        <Marker position={[48.0, 11.51]} icon={this.BSIcon}>
          <Popup>BS2</Popup>
        </Marker>
        <Marker position={[48.08, 11.7]} icon={this.BSIcon}>
          <Popup>BS3</Popup>
        </Marker>
        <Marker position={[48.11, 11.5]} icon={this.BSIcon}>
          <Popup>BS4</Popup>
        </Marker>
        <Marker position={[48.11, 11.6]} icon={this.BSIcon}>
          <Popup>BS5</Popup>
        </Marker>
        <Marker position={[48.137154, 11.576124]} icon={this.BSIcon}>
          <Popup>BS5</Popup>
        </Marker>
      </LeafletMap>
    );
  }
}

export default Map;
