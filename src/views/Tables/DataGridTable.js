import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import {Card} from '@material-ui/core';
// import { theme } from './../../themes/index';



export default function DataGridTable() {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
    maxColumns: 40,
  });

  return (
   

        
      <Card style={{ height: 500, width: '100%' }}>
      
      <DataGrid
        {...data}
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </Card>
  
  
   
  );
}