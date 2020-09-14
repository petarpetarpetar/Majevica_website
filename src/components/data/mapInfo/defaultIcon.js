import L from 'leaflet';

const defaultIcon = L.Icon.extend({
  options: {
    iconUrl: require('../images/marker.svg'),
    iconRetinaUrl: require('../images/marker.svg'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
  }
});

export { defaultIcon };
