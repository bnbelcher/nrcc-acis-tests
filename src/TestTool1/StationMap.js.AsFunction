///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

import React from 'react';
import PropTypes from 'prop-types';

import 'leaflet/dist/leaflet.css';
import { Map, CircleMarker, TileLayer, ZoomControl } from 'react-leaflet';

const zoomLevel = 7;
const heightMap = '300px';
const widthMap = '300px';

const StationMap = ({center,stations,selected,onclick}) => {

    return (
        <Map
            center={center}
            zoomControl={false}
            zoom={zoomLevel}
            attributionControl={false}
            style={{
                height: heightMap,
                width: widthMap,
            }}
        >
            <TileLayer
                attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {stations &&
              stations.map((s,i) => (
                <CircleMarker
                  key={i+"marker"}
                  center={[s.ll[1],s.ll[0]]}
                  radius={3}
                  color={(selected===s.name) ? "red" : "black"}
                  onClick={() => {onclick(s)}}
                >
                </CircleMarker>
              ))
            }
            <ZoomControl position="topleft" />
        </Map>
    );
}

StationMap.propTypes = {
  center: PropTypes.array.isRequired,
  stations: PropTypes.array.isRequired,
  selected: PropTypes.string.isRequired,
  onclick: PropTypes.func.isRequired,
};

export default StationMap;
