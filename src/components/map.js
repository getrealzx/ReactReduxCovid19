import React from 'react'
import PropTypes from 'prop-types'
import mapboxgl from 'mapbox-gl'
import { connect } from 'react-redux'

mapboxgl.accessToken = 'pk.eyJ1IjoiZ2V0cmVhbHp4IiwiYSI6ImNrOTA5bzVvaTAxc2szdG53NG85MG8za2oifQ.TUNWb1DL-UEbpE0uCjERfQ';

let Map = class Map extends React.Component {
  mapRef = React.createRef();
  map;

  static propTypes = {
    data: PropTypes.object.isRequired,
    active: PropTypes.object.isRequired
  };

  componentDidUpdate() {
    this.setFill();
  }

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapRef.current,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [5, 34],
      zoom: 1.5
    });

    this.map.on('load', () => {
      this.map.addSource('countries', {
        type: 'geojson',
        data: this.props.data
      });

      this.map.addLayer({
        id: 'countries',
        type: 'fill',
        source: 'countries'
      }, 'country-label-lg'); // ID metches `mapbox/streets-v9`

      this.setFill();
    });
  }

  setFill() {
    const { property, stops } = this.props.active;
    this.map.setPaintProperty('countries', 'fill-color', {
      property,
      stops
    });
  }

  render() {
    return (
      <div ref={this.mapRef} className="absolute top right left bottom" />
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data,
    active: state.active
  };
}

Map = connect(mapStateToProps)(Map);

export default Map;
