///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

import React from 'react';
import PropTypes from 'prop-types';

const DataTable = ({title,data}) => {
        return (
                <div>
                    <br/> 
                      <span style={{"fontWeight":"bold","float":"left"}}>
                       {title}
                      </span>
                    <br/>
                    <table border="1"><tbody>
                      <tr><th align="left">Date</th><th align="left">Value</th></tr>
                        {data.map((d,i) => (
                          <tr key={d[0]}>
                            <td align="left">{d[0]}</td><td align="left">{d[1]}</td>
                          </tr>
                        ))}
                    </tbody></table>
                </div>
        );
}

DataTable.propTypes = {
  data: PropTypes.array.isRequired
};

export default DataTable;
