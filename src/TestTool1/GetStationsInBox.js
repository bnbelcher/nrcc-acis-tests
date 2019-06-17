///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

//import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const protocol = window.location.protocol;

const GetStationsInBox = ({variable,period,bounds}) => {
        let params = {
            "meta":"name,ll,uid",
            "elems":variable,
            "output":"json",
            "sdate":period[0],
            "edate":period[1],
            "bbox":bounds
        }
        return axios
          .post(`${protocol}//data.rcc-acis.org/StnMeta`, params)
          .then(res => {
            return res.data.meta
          })
          .catch(err => {
            console.log(
              "Request Error: " + (err.response.data || err.response.statusText)
            );
          });
}

GetStationsInBox.propTypes = {
  variable: PropTypes.string.isRequired,
  period: PropTypes.array.isRequired,
  bounds: PropTypes.string.isRequired,
};

export default GetStationsInBox;
