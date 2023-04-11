// import React from "react";
// import GoogleMapReact from 'google-map-react';

// import { Card,CardContent } from '@material-ui/core';
// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// export default function Map(){
//   // const defaultProps = {
//   //   center: {
//   //     lat: 10.99835602,
//   //     lng: 77.01502627
//   //   },
//   //   zoom: 11
//   // };

//   return (
//     // Important! Always set the container height explicitly
//     <Card>
//     <CardContent  style={{ height: '90vh', width: '100%' }}>
//       <GoogleMapReact
//       bootstrapURLKeys={{
//         // remove the key if you want to fork
//         key: "AIzaSyANbW-9KNFEHbrycu4u-axIqB9tApzgZLs",
//         language: "en",
//         region: "US",
//       }}
//       defaultCenter={
//         { lat: 20.5937, lng: 78.9629 }
//       }
//         defaultZoom={ 5}
//       >
//         <AnyReactComponent
//           lat={59.955413}
//           lng={30.337844}
//           text="My Marker"
//         />
//       </GoogleMapReact>
//       </CardContent>
//       </Card>
//   );
// }



// // import React from 'react';
// // import { GoogleMap, Marker } from 'react-google-maps';

// // const Map = ({ points }) => {
// //   const center = {
// //     lat: points[0].lat,
// //     lng: points[0].lng,
// //   };

// //   return (
// //     <GoogleMap center={center} zoom={13}>
// //       {points.map((point, index) => (
// //         <Marker
// //           key={index}
// //           position={{ lat: point.lat, lng: point.lng }}
// //           label={`${index + 1}`}
// //         />
// //       ))}
// //     </GoogleMap>
// //   );
// // };

// // export default Map;



import React from "react";
import GoogleMapReact from "google-map-react";

const Map = ({ locations }) => {
  const defaultProps = {
    center: {
      lat: 37.7749,
      lng: -122.4194,
    },
    zoom: 10,
  };

  const renderMarkers = (map, maps) => {
    const markers = locations.map((location) => {
      return new maps.Marker({
        position: {
          lat: location.latitude,
          lng: location.longitude,
        },
        map,
        title: location.title,
      });
    });
    return markers;
  };

  return (
    <div style={{ height: "500px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyANbW-9KNFEHbrycu4u-axIqB9tApzgZLs"}}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
      />
    </div>
  );
};

export default Map;
