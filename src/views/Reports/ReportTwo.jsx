import React, { useState, useEffect } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Card, CardContent, Grid, TextField } from '@mui/material';

function formatTimestamp(timestamp) {
  const date = new Date(timestamp * 1000);
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
    timeZone: 'UTC',
  };
  return date.toLocaleString(undefined, options);
}

function dateFilter(params, value) {
  const { startDate, endDate } = value;
  const timestamp = new Date(params.row.timestamp).getTime();
  return (
    (!startDate || timestamp >= new Date(startDate).getTime()) &&
    (!endDate || timestamp <= new Date(endDate).getTime())
  );
}

export default function FlespiTable() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filterModel, setFilterModel] = useState({
    items: [],
    dateRange: {
      startDate: null,
      endDate: null,
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://flespi.io/gw/devices/4856018/messages',
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization:
              `FlespiToken hcXnv9nl3OzlqewzXlOeu6dCvoO2LRTSTG4eEfnxUNGaP2yCccHu6IWrUyitfZaY`,
          },
        }
      );
      const json = await response.json();
      const rows = json.result.map((row) => ({
        ...row,
        timestamp: formatTimestamp(row.timestamp),
      }));
      setData(rows);
      setFilteredData(rows);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const { dateRange } = filterModel;
    const filteredRows = data.filter((row) => dateFilter({ row }, { value: dateRange }));
    setFilteredData(filteredRows);
  }, [filterModel, data]);

  const columns = [
    { field: 'channel.id', headerName: 'Channel ID', width: 150 },
    { field: 'device.id', headerName: 'Device ID', width: 150 },
    { field: 'device.name', headerName: 'Device Name', width: 150 },
    { field: 'gnss.realtime.status', headerName: 'GNSS Realtime Status', width: 200 },
    { field: 'gsm.cellid', headerName: 'GSM Cell ID', width: 150 },
    { field: 'gsm.lac', headerName: 'GSM LAC', width: 150 },
    { field: 'gsm.mcc', headerName: 'GSM MCC', width: 150 },
    { field: 'gsm.mnc', headerName: 'GSM MNC', width: 150 },
    { field: 'ident', headerName: 'Ident', width: 150 },
    { field: 'peer', headerName: 'Peer', width: 150 },
    { field: 'position.direction', headerName: 'Position Direction', width: 200 },
    { field: 'position.latitude', headerName: 'Position Latitude', width: 200 },
    { field: 'position.longitude', headerName: 'Position Longitude', width: 200 },
    { field: 'position.satellites', headerName: 'Position Satellites', width: 200 },
    { field: 'position.speed', headerName: 'Position Speed', width: 150 },
    { field: 'position.valid', headerName: 'Position Valid', width: 150 },
    { field: 'protocol.id', headerName: 'Protocol ID', width: 150 },
    { field: 'protocol.number', headerName: 'Protocol Number', width: 200 },
    { field: 'server.timestamp', headerName: 'Server Timestamp', width: 200 },
    { field: 'timestamp', headerName: 'Timestamp', width: 300 },
  ];

  const handleFilterModelChange = (model) => {
    setFilterModel(model);
  };

  const handleStartDateChange = (event) => {
    setFilterModel((prevModel) => ({
      ...prevModel,
      dateRange: {
        ...prevModel.dateRange,
        startDate: event.target.value,
      },
    }));
  };

  const handleEndDateChange = (event) => {
    setFilterModel((prevModel) => ({
      ...prevModel,
      dateRange: {
        ...prevModel.dateRange,
        endDate: event.target.value,
      },
    }));
  };

  const getRowId = (row) => {
    return `${row['device.id']}-${row['timestamp']}`;
  };

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Start Date"
              type="datetime-local"
              value={filterModel.dateRange.startDate || ''}
              onChange={handleStartDateChange}
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="End Date"
              type="datetime-local"
              value={filterModel.dateRange.endDate || ''}
              onChange={handleEndDateChange}
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <div style={{ height: 500, width: '100%' }}>
              <DataGrid
                getRowId={getRowId}
                rows={filteredData}
                columns={columns}
                filterModel={filterModel}
                onFilterModelChange={handleFilterModelChange}
                components={{
                  Toolbar: GridToolbar,
                }}
              />
            </div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}