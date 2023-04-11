import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Card, Grid, CardContent } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
const columns = [
  { id: 'vehicleNo', label: 'Vehicle No', minWidth: 100 },
  { id: 'speed', label: 'Speed', minWidth: 100 },
  {
    id: 'reportingTime',
    label: 'Reporting Time',
    minWidth: 100,
    align: 'right',

  }, 
  {
    id: 'deviceState',
    label: 'Device State',
    minWidth: 100,
    align: 'right',
  },
  {
    id: 'signals',
    label: 'Signals',
    minWidth: 100,
    align: 'right',
  },
  { id: 'maxSpeed', label: 'Max Speed', minWidth: 100 },
  { id: 'runningTime', label: 'Running Time', minWidth: 100 },
  { id: 'stoppingTime', label: 'Stopping Time', minWidth: 100 },
  { id: 'distanceMoved', label: 'Distance Moved', minWidth: 100 },
  { id: 'startTime', label: 'Start Time', minWidth: 170 },
  { id: 'startlocation', label: 'Start Location', minWidth: 250 },

];

function createData(vehicleNo, speed, reportingTime, deviceState, signals, maxSpeed, runningTime, stoppingTime, distanceMoved, startTime, startlocation) {
  return { vehicleNo, speed, reportingTime, deviceState, signals, maxSpeed, runningTime, stoppingTime, distanceMoved, startTime, startlocation };
}



const rows = [
  createData('DL96K0294', 0, '4/21/2017 11:32', 'O', 139, 0, '0:00	  ', '11:34:37', '0 Km	      ', ' 4 / 21 / 2017 0:02', 'Bhandara - Balaghat Rd, Garra Industrial Area, Balaghat, Madhya Pradesh 481331, India'),
  createData('DL96K8870', 0, '4/21/2017 12:42', 'S', 2525, 78, '6:47:55', '	4:24:47', '  206.861 Km	', '4 / 21 / 2017 0:00', 'NH30, Madhya Pradesh 486111, India'),
  createData('DL96K8896', 34, '4/21/2017 12:44', 'M', 1712, 56, '4:18:33', '	7:43:24', '  157.661 Km', '4 / 21 / 2017 0:02', '76/4A, Stanley Rd, Kamla Nagar, Civil Lines, Allahabad, Uttar Pradesh 211002, India'),
  createData('DL96K9134', 0, '4/21/2017 12:39', 'S', 154, 1, '0:00	  ', '12:31:16', '0 Km     ', '4 / 21 / 2017 0:03', 'Unnamed Road, Chhitpalgarh, Uttar Pradesh 230402, India'),
  createData('DL96K9142', 0, '4/21/2017 12:43', 'S', 180, 31, '3:56	  ', '12:29:36', '1.018 Km  ', ' 4 / 21 / 2017 0:03', 'Khandwa - Indore Road, Mukhtyara, Madhya Pradesh 451115, India'),
  createData('DL96K9151', 0, '4/21/2017 12:06', 'S', 8, 0, '0:00	  ', '12:31   ', '0 Km      ', '4 / 21 / 2017 11:47', 'Unknown'),
  createData('DL96K9167', 0, '4/21/2017 12:42', 'S', 2836, 63, '7:40:26', '	3:46:14', ' 234.377 Km', '4 / 21 / 2017 0:00', 'Bypass Rd, Itaura, Madhya Pradesh 486003, India'),
  createData('DL96K9175', 8, '4/21/2017 12:44', 'M', 2151, 77, '5:52:26', '	6:05:59', ' 196.892 Km', '4 / 21 / 2017 0:00', 'Maihar - Rewa Rd, Khutha, Madhya Pradesh 485115, India'),
  createData('DL96K9209', 0, '4/21/2017 12:39', 'S', 1795, 85, '4:35:57', '	7:01:20', ' 179.405 Km ', '4 / 21 / 2017 0:01', 'Bengaluru - Mangaluru Highway, Madanayakahalli, Bengaluru, Karnataka 562123, India'),
  createData('DL96K9812', 0, '4/21/2017 12:43', 'S', 1178, 52, '2:45:25', '	9:14:41', ' 90.417 Km	', '4 / 21 / 2017 0:01', 'NH30, Ghunwara, Madhya Pradesh 485773, India'),

];

const getRowId = () => {
  let n = 5;
  return n++;
};

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const dataGridcols = [
    { field: 'vehicleNo', headerName: 'Vehicle No', minWidth: 170 },
    { field: 'speed', headerName: 'Speed', minWidth: 70 },
    {
      field: 'reportingTime',
      headerName: 'Reporting Time',
      minWidth: 170,


    },
    {
      field: 'deviceState',
      headerName: 'Device State',
      minWidth: 70,

    },
    {
      field: 'signals',
      headerName: 'Signals',
      minWidth: 170,

    },
    { field: 'maxSpeed', headerName: 'Max Speed', minWidth: 170 },
    { field: 'runningTime', headerName: 'Running Time', minWidth: 170 },
    { field: 'stoppingTime', headerName: 'Stopping Time', minWidth: 170 },
    { field: 'distanceMoved', headerName: 'Distance Moved', minWidth: 170 },
    { field: 'startTime', headerName: 'Start Time', minWidth: 170 },
    { field: 'startlocation', headerName: 'Start Location', minWidth: 250 },

  ];



  return (
    <div>
      <Paper sx={{ width: '100%', overflow: 'hidden', marginBottom: '2rem' }}>
        <Card>
          <CardContent>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === 'number'
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </CardContent>
        </Card>
      </Paper>
      <Card >
        <CardContent>
          <Grid item xs={12}>
            <div style={{ height: 500, width: '100%', padding: `12px` }}>
              <DataGrid
                getRowId={getRowId}
                rows={rows}
                columns={dataGridcols}
                components={{
                  Toolbar: GridToolbar,
                }}
              />
            </div>
          </Grid>
        </CardContent>

      </Card>
    </div>
  );
}