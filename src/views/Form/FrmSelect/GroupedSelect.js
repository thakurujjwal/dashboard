import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

export default function GroupedSelect() {
    const classes = useStyles();

    return (
        <div>
            <FormControl variant='standard' className={classes.formControl}>
                <InputLabel htmlFor="grouped-native-select">Grouping</InputLabel>
                <Select native defaultValue="" id="grouped-native-select">
                    <option aria-label="None" value="" />
                    <optgroup label="Category 1">
                        <option value={1}>Option 1</option>
                        <option value={2}>Option 2</option>
                    </optgroup>
                    <optgroup label="Category 2">
                        <option value={3}>Option 3</option>
                        <option value={4}>Option 4</option>
                    </optgroup>
                </Select>
            </FormControl>
            <FormControl variant='standard' className={classes.formControl}>
                <InputLabel htmlFor="grouped-select">Grouping</InputLabel>
                <Select defaultValue="" id="grouped-select">
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <ListSubheader>Category 1</ListSubheader>
                    <MenuItem value={1}>Option 1</MenuItem>
                    <MenuItem value={2}>Option 2</MenuItem>
                    <ListSubheader>Category 2</ListSubheader>
                    <MenuItem value={3}>Option 3</MenuItem>
                    <MenuItem value={4}>Option 4</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
