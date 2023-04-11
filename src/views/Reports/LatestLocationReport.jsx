import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Card, CardContent } from '@mui/material';

// Define the columns for the table
const columns = [
  { id: 'deviceId', label: 'Device ID' },
  { id: 'timestamp', label: 'Timestamp' },
  { id: 'latitude', label: 'Latitude' },
  { id: 'longitude', label: 'Longitude' },
  { id: 'altitude', label: 'Altitude' },
  { id: 'speed', label: 'Speed' },
  { id: 'heading', label: 'Heading' },
];

// Define the data for the table
const rows = [
  { id: 1, deviceId: 12345, timestamp: '2023-03-27 14:30:00 UTC', latitude: 37.7749, longitude: -122.4194, altitude: 0, speed: 10, heading: 180 },
  { id: 2, deviceId: 67890, timestamp: '2023-03-27 14:35:00 UTC', latitude: 40.7128, longitude: -74.0060, altitude: 0, speed: 15, heading: 90 },
  { id: 3, deviceId: 24680, timestamp: '2023-03-27 14:40:00 UTC', latitude: 51.5074, longitude: -0.1278, altitude: 0, speed: 20, heading: 270 },
  { id: 4, deviceId: 13579, timestamp: '2023-03-27 14:45:00 UTC', latitude: -33.8651, longitude: 151.2094, altitude: 0, speed: 25, heading: 45 },
  { id: 1, deviceId: 12345, timestamp: '2023-03-27 14:30:00 UTC', latitude: 37.7749, longitude: -122.4194, altitude: 0, speed: 10, heading: 180 },
  { id: 2, deviceId: 67890, timestamp: '2023-03-27 14:35:00 UTC', latitude: 40.7128, longitude: -74.0060, altitude: 0, speed: 15, heading: 90 },
  { id: 3, deviceId: 24680, timestamp: '2023-03-27 14:40:00 UTC', latitude: 51.5074, longitude: -0.1278, altitude: 0, speed: 20, heading: 270 },
  { id: 4, deviceId: 13579, timestamp: '2023-03-27 14:45:00 UTC', latitude: -33.8651, longitude: 151.2094, altitude: 0, speed: 25, heading: 45 },
];

function LatestLocationReport() {
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', marginBottom: '2rem' }}>
      <Card>
        <CardContent>
          <h1>Latest Location Report</h1>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  {/* Render table header columns */}
                  {columns.map((column) => (
                    <TableCell key={column.id}>{column.label}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {/* Render table rows */}
                {rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.deviceId}</TableCell>
                    <TableCell>{row.timestamp}</TableCell>
                    <TableCell>{row.latitude}</TableCell>
                    <TableCell>{row.longitude}</TableCell>
                    <TableCell>{row.altitude}</TableCell>
                    <TableCell>{row.speed}</TableCell>
                    <TableCell>{row.heading}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Paper >
  );
}

export default LatestLocationReport;
