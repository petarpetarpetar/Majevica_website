import React, {Component} from 'react';
import L from 'leaflet'
import { Map, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { Container, Row, Image } from 'react-bootstrap';
import MarkersJson from './data/mapInfo/markersInfo.json'
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
    
    var BikePath = require('./data/mapInfo/bikePath.json'); //(with path)
    
    console.log(MarkersJson);
    return (
      
      <Container>

        <Row className="justify-content-center" id="map">
          
          <Map className="map" style={{paddingTop: 5, paddingBottom:5}} center={position} key="mapa" zoom={this.state.zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <GeoJSON key="BikePath" data={BikePath} />
        
            {MarkersJson.map((item) => (
            <Marker position={[item['coordinates'][1],item['coordinates'][0]]} key={item['marker-id']}>
                <Popup maxWidth={250}>
                <Image src={item['popup-image']} fluid />
                <h3>
                  {item['name']}
                </h3>
                <p>
                  {item['popup-text']}.
                </p>
                </Popup>
            </Marker>
            ))}
            
          </Map>
        </Row>
    </Container>
    );
  }
}

export default BikeMap;
