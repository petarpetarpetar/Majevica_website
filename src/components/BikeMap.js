import React, {Component} from 'react';
import L from 'leaflet'
import { Map, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { Container, Row } from 'react-bootstrap';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

class BikeMap extends Component {
  state = {
    lat: 	44.6618,
    lng: 	18.9312,
    zoom: 11,
  }
  render() {
    const position = [this.state.lat, this.state.lng]
    
    var json = require('./data/mapInfo/bikePath.json'); //(with path)
    console.log(json)

    return (
      <Container>
        <Row className="justify-content-center">
          <Map className="map" center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <GeoJSON key="geojson" data={json} />
          <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </Map>
        </Row>
    </Container>
    );
  }
}

export default BikeMap;
