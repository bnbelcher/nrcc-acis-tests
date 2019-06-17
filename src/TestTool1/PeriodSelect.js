///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

import React from 'react';
import PropTypes from 'prop-types';

const PeriodSelect = ({onchange}) => {
        return (
            <form>
              <label style={{"fontWeight":"bold","float":"left"}}>
                Time period:
                <select onChange={onchange}>
                  <option value="7">last 7 days</option>
                  <option value="30">last 30 days</option>
                  <option value="90">last 90 days</option>
                </select>
              </label>
            </form>
        );
}

PeriodSelect.propTypes = {
  onchange: PropTypes.func.isRequired
};

export default PeriodSelect;
