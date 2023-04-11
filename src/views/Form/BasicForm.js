import { Card, CardContent } from '@material-ui/core'
import React from 'react'
// import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Autocomplete, Stack } from '@mui/material';

import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { DesktopDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker';


const BasicForm = () => {
  const [value, setValue] = React.useState(dayjs('2018-01-01T00:00:00.000Z'));
  const top100Films = [{ label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },]

  

  return (
    <Card>
      <CardContent>

        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >



          <FormLabel>Basic Form</FormLabel>
          <div>
            <TextField
              required
              id="outlined-required"
              label="Name"
              type="text"
              autoComplete="off"
            />

            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              helperText="Enter your password"
            />
            {/*  <TextField
id="outlined-read-only-input"
label="Read Only"
defaultValue="Hello World"
InputProps={{
  readOnly: true,
}}
/>*/}
            <TextField
              id="outlined-number"
              label="Number"
              type="number"
            
            />
            <TextField id="outlined-search" label="Search field" type="search" />

          </div>


          <div>
          <Stack direction="rows" spacing={2} sx={{ width: 300 }}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Movie" />}
            />
         


            
              <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={top100Films.map((option) => option.label)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Search input"
                    InputProps={{
                      ...params.InputProps,
                      type: 'search',
                    }}
                  />
                )}
              />
              
              <Autocomplete
              multiple
                id="free-solo-2-demo"
                disableClearable
                options={top100Films.map((option) => option.label)}
                helperText="Enter your password"
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Multiple selections"
                    InputProps={{
                      ...params.InputProps,
                      type: 'search',
                    }}
                  />
                )}
              />
              
            </Stack>


            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={3}>
              <MobileDateTimePicker
                label="For mobile"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
              <DesktopDateTimePicker
                label="For desktop"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
              <DateTimePicker
                label="Responsive"
                renderInput={(params) => <TextField {...params} />}
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
              />
            </Stack>
          </LocalizationProvider>

          </div>



          <Button variant="text" type='submit' color="primary">
            submit
          </Button>



        </Box>
      </CardContent>
    </Card>
  )
}

export default BasicForm