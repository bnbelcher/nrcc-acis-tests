///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import moment from 'moment';
import CircularProgress from '@material-ui/core/CircularProgress';
import green from '@material-ui/core/colors/green';

import GetStationsInBox from './GetStationsInBox';
import LoadStationData from './LoadStationData';
import VariableSelect from './VariableSelect';
import PeriodSelect from './PeriodSelect';
import StationMap from './StationMap';
import DataTable from './DataTable';

const styles = theme => ({
  progressWrapper: {
    position: 'relative',
  },
  mapProgress: {
    color: green[500],
    position: 'absolute',
    zIndex: 1000,
    top: '50%',
    left: '150px',
    marginTop: -30,
    marginLeft: -30,
  },
});

class TestTool1 extends Component {

    constructor(props) {
        super(props);
        let numdays = 7
        let sdate = moment().subtract(numdays-1, 'days')
        let edate = moment()
        this.state = {
            stations: null,
            station: null,
            period: [sdate.format('YYYY-MM-DD'),edate.format('YYYY-MM-DD')],
            time: numdays.toString(),
            variable: "avgt",
            bounds: "-78,41,-75,44",
            center: [42.5,-76.5],
            data: null,
        };
    }

    componentDidMount() {
      GetStationsInBox({variable:this.state.variable, period:this.state.period, bounds:this.state.bounds})
        .then(response =>
          this.setState({ stations: response })
        );
    }

    componentDidUpdate(prevProps,prevState) {
      if (prevState.variable!==this.state.variable ||
          prevState.period!==this.state.period ||
          prevState.bounds!==this.state.bounds) {
            GetStationsInBox({variable:this.state.variable, period:this.state.period, bounds:this.state.bounds})
              .then(response =>
                this.setState({ stations: response })
              );
      }
    }

    handleStationChange = (s) => {
        this.setState({
          data: null,
          station: s.name
        })
        LoadStationData({uid:s.uid, variable:this.state.variable, period:this.state.period})
          .then(response =>
            this.setState({ data: response })
          );
    }

    handleVariableChange = (e) => {
        this.setState({
          stations: null,
          station: null,
          data: null,
          variable: e.target.value
        })
    }

    handlePeriodChange = (e) => {
        let days = parseInt(e.target.value,10)
        this.setState({
          stations: null,
          station: null,
          data: null,
          time: days,
          period: [moment().subtract(days,'days').format('YYYY-MM-DD'),moment().format('YYYY-MM-DD')]
        })
    }

    render() {

        const { classes } = this.props;

        return (
            <div className="tool">

                <div className="tool-header">
                    <span style={{"fontSize":"24px","fontWeight":"bold","float":"left"}}>Recent weather station data</span>
                    <br/><br/>
                </div>

                <div className="user-input">
                    <VariableSelect onchange={this.handleVariableChange} />
                    <br/><br/>
                    <PeriodSelect onchange={this.handlePeriodChange} />
                    <br/><br/>
                </div>

                <div className={classes.progressWrapper}>
                  <StationMap
                    center={this.state.center}
                    stations={this.state.stations}
                    selected={this.state.station}
                    onclick={this.handleStationChange}
                  />
                  {!this.state.stations &&
                      <CircularProgress size={64} className={classes.mapProgress} />
                  }
                </div>

                <div className={classes.progressWrapper}>
                  {this.state.stations && this.state.station && this.state.data &&
                    <DataTable
                      title={this.state.station}
                      data={this.state.data}
                    />
                  }
                  {this.state.stations && this.state.station && !this.state.data &&
                      <span style={{"color":"red","float":"left","padding":"20px"}}>Loading Table ...</span>
                  }
                  {this.state.stations && !this.state.station && !this.state.data &&
                      <span style={{"color":"black","float":"left","padding":"20px"}}>Click a station from map</span>
                  }
                </div>

            </div>
        );

    }
}

export default withStyles(styles)(TestTool1);
