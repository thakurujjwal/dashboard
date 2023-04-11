import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    CardContent,
    Card
} from '@material-ui/core';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const rows = [
    {
        id: 1,
        vehicle: 'Truck 1',
        driver: 'Raja',
        deliveryDate: '2022-01-01',
        deliveryTime: '12:00 PM',
        deliveryStatus: 'Delivered',
        deliveryLocation: 'New York, NY',
    },
    {
        id: 2,
        vehicle: 'Truck 2',
        driver: 'Vikash',
        deliveryDate: '2022-01-02',
        deliveryTime: '1:00 PM',
        deliveryStatus: 'Delivered',
        deliveryLocation: 'Los Angeles, CA',
    },
    {
        id: 3,
        vehicle: 'Truck 3',
        driver: 'Ranjan',
        deliveryDate: '2022-01-03',
        deliveryTime: '2:00 PM',
        deliveryStatus: 'In Transit',
        deliveryLocation: 'Chicago, IL',
    },
    {
        id: 4,
        vehicle: 'Truck 4',
        driver: 'Tahir',
        deliveryDate: '2022-01-01',
        deliveryTime: '12:00 PM',
        deliveryStatus: 'Delivered',
        deliveryLocation: 'New York, NY',
    },
    {
        id: 5,
        vehicle: 'Truck 5',
        driver: 'Roshan',
        deliveryDate: '2022-01-02',
        deliveryTime: '1:00 PM',
        deliveryStatus: 'Delivered',
        deliveryLocation: 'Los Angeles, CA',
    },
    {
        id: 6,
        vehicle: 'Truck 6',
        driver: 'Samar',
        deliveryDate: '2022-01-03',
        deliveryTime: '2:00 PM',
        deliveryStatus: 'In Transit',
        deliveryLocation: 'Chicago, IL',
    },
];

export default function DataTable() {
    const classes = useStyles();

    return (
        <Card>
            <CardContent>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Vehicle</TableCell>
                                <TableCell>Driver</TableCell>
                                <TableCell>Delivery Date</TableCell>
                                <TableCell>Delivery Time</TableCell>
                                <TableCell>Delivery Status</TableCell>
                                <TableCell>Delivery Location</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">
                                        {row.id}
                                    </TableCell>
                                    <TableCell>{row.vehicle}</TableCell>
                                    <TableCell>{row.driver}</TableCell>
                                    <TableCell>{row.deliveryDate}</TableCell>
                                    <TableCell>{row.deliveryTime}</TableCell>
                                    <TableCell>{row.deliveryStatus}</TableCell>
                                    <TableCell>{row.deliveryLocation}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </CardContent>
        </Card>
    );
}
