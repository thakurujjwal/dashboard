import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Card, CardContent } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const SpeedReport = () => {
  const classes = useStyles();

  const data = [
    { vehicleId: 'ABC123', date: '2023-03-26', speed: '80 km/h', location: 'Mumbai' },
    { vehicleId: 'DEF456', date: '2023-03-26', speed: '60 km/h', location: 'Delhi' },
    { vehicleId: 'GHI789', date: '2023-03-27', speed: '70 km/h', location: 'Bangalore' },
    { vehicleId: 'ABC123', date: '2023-03-26', speed: '80 km/h', location: 'Mumbai' },
    { vehicleId: 'DEF456', date: '2023-03-26', speed: '60 km/h', location: 'Delhi' },
    { vehicleId: 'GHI789', date: '2023-03-27', speed: '70 km/h', location: 'Bangalore' }
  ];

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', marginBottom: '2rem' }}>
      <Card>
        <CardContent>
          <h1>Speed Report </h1>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="Speed report table">
              <TableHead>
                <TableRow>
                  <TableCell>Vehicle ID</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Speed</TableCell>
                  <TableCell>Location</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow key={row.vehicleId}>
                    <TableCell>{row.vehicleId}</TableCell>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>{row.speed}</TableCell>
                    <TableCell>{row.location}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Paper >
  );
};

export default SpeedReport;
