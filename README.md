# maveirck
A helpful set of operations to get Colby Shuttle Data via wrapper around unofficial shuttle api.

## Quick Start

### Prerequisites
* Node.js
* Npm
* Yarn
* Typescript

### Setup
`yarn`

### Build
`yarn compile` <br>

Executable used by npm is index.js. Code is written in typescript in `src/index.ts`.

## API
iframe URL: https://colbyshuttle.ridesystems.net

Base API URL: http://colbyshuttle.ridesystems.net/Services/JSONPRelay.svc

To get all possible endpoints: ?wsdl <br>
To get route: /GetRoutes  <br>
To get routes for map: /GetRoutesForMap  <br>
To get vehicle location: /GetMapVehiclePoints <br>
To get the vehicle name and ids: /GetVehicles and /GetVehicleRoutes <br>
To get map stop estimates:/GetMapStopEstimates <br>
To get next stop estimate: / GetRouteVehicleEstimates <br>
To get active shuttle routes: /GetScheduleRouteActiveTimeSpans
