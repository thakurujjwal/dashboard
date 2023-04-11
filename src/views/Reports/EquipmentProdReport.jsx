import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Card, CardContent } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const EquipmentProdReport = () => {
  const classes = useStyles();

  const data = [
    {
      equipmentId: 'E01',
      machineRuntime: '120 hours',
      machineDowntime: '10 hours',
      machineStatus: 'Operational',
      powerSupplyVoltage: '220V',
      machineTemperature: '35C',
      machineUtilization: '92%',
      avgTimeToRepair: '4 hours',
      avgTimeBetweenFailure: '40 hours',
      commSignalStrength: '80%',
      nodesBatteryLevel: '50%',
      uplinkMessageCount: 500,
      downlinkMessageCount: 300,
      fuelConsumption: '10 liters',
    },
    {
      equipmentId: 'E02',
      machineRuntime: '96 hours',
      machineDowntime: '14 hours',
      machineStatus: 'Under Repair',
      powerSupplyVoltage: '220V',
      machineTemperature: '30C',
      machineUtilization: '85%',
      avgTimeToRepair: '8 hours',
      avgTimeBetweenFailure: '60 hours',
      commSignalStrength: '70%',
      nodesBatteryLevel: '40%',
      uplinkMessageCount: 400,
      downlinkMessageCount: 250,
      fuelConsumption: '8 liters',
    },
    {
      equipmentId: 'E03',
      machineRuntime: '144 hours',
      machineDowntime: '6 hours',
      machineStatus: 'Operational',
      powerSupplyVoltage: '240V',
      machineTemperature: '40C',
      machineUtilization: '98%',
      avgTimeToRepair: '3 hours',
      avgTimeBetweenFailure: '30 hours',
      commSignalStrength: '90%',
      nodesBatteryLevel: '60%',
      uplinkMessageCount: 600,
      downlinkMessageCount: 400,
      fuelConsumption: '12 liters',
    },
  ];

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', marginBottom: '2rem' }}>
      <Card>
        <CardContent>
          <h1>Machine Health Check Report</h1>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="Equipment health check report table">
            <TableHead>
              <TableRow>
                <TableCell>Equipment ID</TableCell>
                <TableCell align="right">Machine Runtime</TableCell>
                <TableCell align="right">Machine Downtime</TableCell>
                <TableCell align="right">Machine Status</TableCell>
                <TableCell align="right">Power Supply Voltage</TableCell>
                <TableCell align="right">Machine Temperature</TableCell>
                <TableCell align="right">Machine Utilization</TableCell>
                <TableCell align="right">Avg. Time to Repair</TableCell>
                <TableCell align="right">Avg. Time between Failure</TableCell>
                <TableCell align="right">Comm. Signal Strength</TableCell>
                <TableCell align="right">Nodes Battery Level</TableCell>
                <TableCell align="right">Uplink Msg. Count</TableCell>
                <TableCell align="right">Downlink Msg. Count</TableCell>
                <TableCell align="right">Fuel Consumption</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.equipmentId}>
                  <TableCell component="th" scope="row">
                    {row.equipmentId}
                  </TableCell>
                  <TableCell align="right">{row.machineRuntime}</TableCell>
                  <TableCell align="right">{row.machineDowntime}</TableCell>
                  <TableCell align="right">{row.machineStatus}</TableCell>
                  <TableCell align="right">{row.powerSupplyVoltage}</TableCell>
                  <TableCell align="right">{row.machineTemperature}</TableCell>
                  <TableCell align="right">{row.machineUtilization}</TableCell>
                  <TableCell align="right">{row.avgTimeToRepair}</TableCell>
                  <TableCell align="right">{row.avgTimeBetweenFailure}</TableCell>
                  <TableCell align="right">{row.commSignalStrength}</TableCell>
                  <TableCell align="right">{row.nodesBatteryLevel}</TableCell>
                  <TableCell align="right">{row.uplinkMessageCount}</TableCell>
                  <TableCell align="right">{row.downlinkMessageCount}</TableCell>
                  <TableCell align="right">{row.fuelConsumption}</TableCell>
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

export default EquipmentProdReport;
