import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import { Card, CardContent } from '@mui/material';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const TirpWeighbridgesReport = () => {
  const classes = useStyles();

  const trips = [
    { vehicleId: 'ABC123', tripId: '001', date: '2023-03-26', timeIn: '09:15:00', timeOut: '09:30:00', grossWeight: '3000 kg', tareWeight: '2500 kg', netWeight: '500 kg', operator: 'John Doe' },
    { vehicleId: 'DEF456', tripId: '002', date: '2023-03-26', timeIn: '10:00:00', timeOut: '10:15:00', grossWeight: '4000 kg', tareWeight: '3500 kg', netWeight: '500 kg', operator: 'Jane Smith' },
    { vehicleId: 'GHI789', tripId: '003', date: '2023-03-27', timeIn: '08:45:00', timeOut: '09:00:00', grossWeight: '2500 kg', tareWeight: '2000 kg', netWeight: '500 kg', operator: 'John Doe' },
    { vehicleId: 'ABC123', tripId: '001', date: '2023-03-26', timeIn: '09:15:00', timeOut: '09:30:00', grossWeight: '3000 kg', tareWeight: '2500 kg', netWeight: '500 kg', operator: 'John Doe' },
    { vehicleId: 'DEF456', tripId: '002', date: '2023-03-26', timeIn: '10:00:00', timeOut: '10:15:00', grossWeight: '4000 kg', tareWeight: '3500 kg', netWeight: '500 kg', operator: 'Jane Smith' },
    { vehicleId: 'GHI789', tripId: '003', date: '2023-03-27', timeIn: '08:45:00', timeOut: '09:00:00', grossWeight: '2500 kg', tareWeight: '2000 kg', netWeight: '500 kg', operator: 'John Doe' }
  ];

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', marginBottom: '2rem' }}>
      <Card>
        <CardContent>
          <h1> Tirp Weigh bridges Report</h1>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="Trip report table">
              <TableHead>
                <TableRow>
                  <TableCell>Vehicle ID</TableCell>
                  <TableCell>Trip ID</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Time In</TableCell>
                  <TableCell>Time Out</TableCell>
                  <TableCell>Gross Weight</TableCell>
                  <TableCell>Tare Weight</TableCell>
                  <TableCell>Net Weight</TableCell>
                  <TableCell>Operator</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {trips.map((trip) => (
                  <TableRow key={trip.tripId}>
                    <TableCell>{trip.vehicleId}</TableCell>
                    <TableCell>{trip.tripId}</TableCell>
                    <TableCell>{trip.date}</TableCell>
                    <TableCell>{trip.timeIn}</TableCell>
                    <TableCell>{trip.timeOut}</TableCell>
                    <TableCell>{trip.grossWeight}</TableCell>
                    <TableCell>{trip.tareWeight}</TableCell>
                    <TableCell>{trip.netWeight}</TableCell>
                    <TableCell>{trip.operator}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Paper>
  );
};

export default TirpWeighbridgesReport;
