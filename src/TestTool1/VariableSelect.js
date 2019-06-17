///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

import React from 'react';
import PropTypes from 'prop-types';

const VariableSelect = ({onchange}) => {
        return (
            <form>
              <label style={{"fontWeight":"bold","float":"left"}}>
                Variable:
                <select onChange={onchange}>
                  <option value="avgt">Ave Temperature</option>
                  <option value="pcpn">Precipitation</option>
                </select>
              </label>
            </form>
        );
}

VariableSelect.propTypes = {
  onchange: PropTypes.func.isRequired
};

export default VariableSelect;
