import React from "react";
import GoogleMapReact from 'google-map-react';
import { Card, CardContent } from '@material-ui/core';


export default function Map() {

  return (
    <Card>
      <CardContent style={{ height: '90vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyANbW-9KNFEHbrycu4u-axIqB9tApzgZLs",
            language: "en",
            region: "US",
          }}
          defaultCenter={
            { lat: 20.5937, lng: 78.9629 }
          }
          defaultZoom={5}
        >
        </GoogleMapReact>
      </CardContent>
    </Card>
  );
}

