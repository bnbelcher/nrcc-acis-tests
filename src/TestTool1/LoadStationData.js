///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

//import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const protocol = window.location.protocol;

const LoadStationData = ({uid,variable,period}) => {
        let params = {
            "uid": uid,
            "meta":"name,state",
            "sdate":period[0],
            "edate":period[1],
            "elems":[
                {"name":variable},
              ]
          }
        return axios
          .post(`${protocol}//data.rcc-acis.org/StnData`, params)
          .then(res => {
            return res.data.data
          })
          .catch(err => {
            console.log(
              "Request Error: " + (err.response.data || err.response.statusText)
            );
          });
}

LoadStationData.propTypes = {
  uid: PropTypes.string.isRequired,
  variable: PropTypes.string.isRequired,
  period: PropTypes.array.isRequired,
};

export default LoadStationData;
