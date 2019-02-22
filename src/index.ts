/*
  Base file for Colby Shuttle SDK. Here you will find all functionality and
  wrappers around the various endpoints exposed by the Colby Shuttle ridesystems
  API.

  Disrupt Colby 2019

  Author(s): robertDurst
*/

import axios from 'axios';

const BASE_URL: string =
    'https://colbyshuttle.ridesystems.net/Services/JSONPRelay.svc';

// Endpoints
const SHUTTLE_LOCATIONS: string = '/GetMapVehiclePoints';
const MAP_STOP_ESTIMATES: string = '/GetMapStopEstimates';

/*
  getShuttleLocation returns the location of the shuttle with some other useful
  information such as speed and direction
*/
export const getShuttleLocation: () => any = async function() {
  const resp: any = await axios.get(BASE_URL + SHUTTLE_LOCATIONS);
  return resp.data;
};

/*
  getMapStopEstimates returns estimates for stop location arrival in seconds
  with stop order NOTE: it does not account for a shuttle that decides to start
  skipping stops
*/
export const getMapStopEstimates: () => any = async function() {
  const resp: any = await axios.get(BASE_URL + MAP_STOP_ESTIMATES)
  return resp.data;
};
