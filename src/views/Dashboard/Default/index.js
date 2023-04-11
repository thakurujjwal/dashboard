import React from 'react';
import { makeStyles, Grid, Card, CardHeader, CardContent, Hidden, Typography, Divider, LinearProgress } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
// import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import MonetizationOnTwoTone from '@material-ui/icons/MonetizationOnTwoTone';
import DescriptionTwoTone from '@material-ui/icons/DescriptionTwoTone';
import ThumbUpAltTwoTone from '@material-ui/icons/ThumbUpAltTwoTone';
import CalendarTodayTwoTone from '@material-ui/icons/CalendarTodayTwoTone';
import Box from '@material-ui/core/Box'
import SalesLineCard from './SalesLineCard';
import SalesLineCardData from './chart/sale-chart-1';
// import Charts from './Charts';
import RevenuChartCard from './RevenuChartCard';
import RevenuChartCardData from './chart/revenu-chart';
// import Slider from './Slider';
import ReportCard from './ReportCard';
// import LatestorderCard from './LatestorderCard';
import Testtable from './Testtable';
import { gridSpacing } from './../../../store/constant';
// import Map from './Map';
import TableBasic from '../../Tables/TableBasic';
// import { Link } from 'react-router-dom';
// import Breadcrumb from './../../../component/Breadcrumb';
import DataGridTable from '../../Tables/DataGridTable';

// Charts
import BarChart from './ApexChart/BarChart';
import LineChart from './ApexChart/LineChart';
// import DonutChart from './ApexChart/DonutChart';
import RadialChart from './ApexChart/RadialChart';
import MixedChart from './ApexChart/MixedChart';
// import { AddCard } from '@mui/icons-material';
import AdddivCard from '../../../component/AddCard/AddCard';

import TriggerCard from '../../../component/DashboardPrameter/TriggerCard';


import Map from "./Map";

const locations = [
    { latitude: 37.7749, longitude: -122.4194, title: "San Francisco" },
    { latitude: 37.7749, longitude: -122.4313, title: "Golden Gate Park" },
    { latitude: 37.7883, longitude: -122.4078, title: "Fisherman's Wharf" },
    { latitude: 37.8010, longitude: -122.4479, title: "Golden Gate Bridge" },
];

const useStyles = makeStyles((theme) => ({
    arrowicon: {
        '& svg': {
            width: '20px',
            height: '20px',
            verticalAlign: 'top',
        },
    },

    flatcardbody: {
        padding: '0px !important',
        '& svg': {
            width: '40px',
            height: '40px',
        },
    },
    flatcardblock: {
        padding: '25px 25px',
        borderLeft: '1px solid' + theme.palette.background.default,
        [theme.breakpoints.down('sm')]: {
            borderLeft: 'none',
            borderBottom: '1px solid' + theme.palette.background.default,
        },
        [theme.breakpoints.down('md')]: {
            borderBottom: '1px solid' + theme.palette.background.default,
        },
    },
    textsuccess: {
        color: theme.palette.success.main,
    },
    texterror: {
        color: theme.palette.error.main,
    },
}));

const Default = () => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <>
            { /*  <Breadcrumb title="Basic">
                <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
                    Home
                </Typography>
                <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
                    Tables
                </Typography>
                <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
                    Basic
                </Typography>
    </Breadcrumb> */}


            <Grid container spacing={gridSpacing}  >
                <Grid item xs={12}>
                    <Box display="flex" flexDirection="row-reverse" p={1} m={1} >
                        <Button variant="contained" color="primary" y={{ m: '2rem' }} startIcon={<AddIcon />}>
                            Add
                        </Button>
                    </Box>
                    <Grid container spacing={gridSpacing}>

                        <Grid item lg={3} sm={6} xs={12}>

                            <ReportCard
                                primary="302"
                                secondary="Total "
                                color={theme.palette.warning.main}
                                footerData="Last updated 30 sec ago"
                            // iconPrimary={MonetizationOnTwoTone}
                            // iconFooter={TrendingUpIcon}
                            />
                        </Grid>
                        <Grid item lg={3} sm={6} xs={12}>
                            <ReportCard
                                primary={145}
                                secondary="Active"
                                color={theme.palette.error.main}
                                footerData="Last updated 2 min ago"
                            // iconPrimary={CalendarTodayTwoTone}
                            // iconFooter={TrendingDownIcon}
                            />
                        </Grid>
                        <Grid item lg={3} sm={6} xs={12}>
                            <ReportCard
                                primary="290+"
                                secondary="Offline"
                                color={theme.palette.success.main}
                                footerData="Last updated 10 sec ago"
                            // iconPrimary={DescriptionTwoTone}
                            // iconFooter={TrendingUpIcon}
                            />
                        </Grid>
                        <Grid item lg={3} sm={6} xs={12}>
                            <ReportCard
                                primary={500}
                                secondary="Moving"
                                color={theme.palette.primary.main}
                                footerData="Live data"
                            // iconPrimary={ThumbUpAltTwoTone}
                            // iconFooter={TrendingUpIcon}
                            />
                        </Grid>

                    </Grid>
                </Grid>
                <TriggerCard />

                <Grid item xs={12}>
                    <Grid container spacing={gridSpacing}>
                        <Grid item lg={8} xs={12}>
                            <Grid container spacing={gridSpacing}>
                                <Grid item xs={12} sm={6}>
                                    <Grid container spacing={gridSpacing} direction="column">
                                        <Grid item xs={12}>
                                            <SalesLineCard
                                                chartData={SalesLineCardData}
                                                title="Sales Per Day"
                                                percentage="3%"
                                                icon={<TrendingDownIcon />}
                                                footerData={[
                                                    {
                                                        value: '$4230',
                                                        label: 'Total Revenue',
                                                    },
                                                    {
                                                        value: '321',
                                                        label: 'Today Sales',
                                                    },
                                                ]}
                                            />
                                        </Grid>
                                        <Hidden only="sm">
                                            <Grid item xs={12}>
                                                <Card>
                                                    <CardContent className={classes.flatcardbody}>
                                                        <Grid container alignItems="center" spacing={0}>
                                                            <Grid item sm={6} xs={12} className={classes.flatcardblock}>
                                                                <Grid container alignItems="center" spacing={1}>
                                                                    <Grid item>
                                                                        <Typography variant="subtitle2" align="left">
                                                                            REALTY
                                                                        </Typography>
                                                                    </Grid>
                                                                    <Grid item sm zeroMinWidth>
                                                                        <Typography variant="h5" className={classes.texterror} align="right">
                                                                            -0.99
                                                                        </Typography>
                                                                    </Grid>
                                                                </Grid>
                                                            </Grid>
                                                            <Grid item sm={6} xs={12} className={classes.flatcardblock}>
                                                                <Grid container alignItems="center" spacing={1}>
                                                                    <Grid item>
                                                                        <Typography variant="subtitle2" align="left">
                                                                            INFRA
                                                                        </Typography>
                                                                    </Grid>
                                                                    <Grid item sm zeroMinWidth>
                                                                        <Typography variant="h5" className={classes.textsuccess} align="right">
                                                                            -7.66
                                                                        </Typography>
                                                                    </Grid>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </CardContent>
                                                </Card>
                                            </Grid>
                                        </Hidden>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <RevenuChartCard chartData={RevenuChartCardData} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <Card>
                                <CardHeader
                                    title={
                                        <Typography component="div" className="card-header">
                                            Fleet Overview
                                        </Typography>
                                    }
                                />
                                <Divider />
                                <CardContent>
                                    <Grid container spacing={gridSpacing}>
                                        <Grid item xs={12}>
                                            <Grid container alignItems="center" spacing={1}>
                                                <Grid item sm zeroMinWidth>
                                                    <Typography variant="body2">Total Vehicles</Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="body2" align="right">
                                                        100
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Grid container alignItems="center" spacing={1}>
                                                <Grid item sm zeroMinWidth>
                                                    <Typography variant="body2">Online Vehicles</Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="body2" align="right">
                                                        80
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            <LinearProgress variant="determinate" value={80} />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Grid container alignItems="center" spacing={1}>
                                                <Grid item sm zeroMinWidth>
                                                    <Typography variant="body2">Offline Vehicles</Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="body2" align="right">
                                                        20
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            <LinearProgress variant="determinate" value={20} color="primary" />

                                        </Grid>
                                        <Grid item xs={12}>
                                            <Grid container alignItems="center" spacing={1}>
                                                <Grid item sm zeroMinWidth>
                                                    <Typography variant="body2">Maintenance Due</Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="body2" align="right">
                                                        10
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            <LinearProgress variant="determinate" value={10} color="primary" />

                                        </Grid>
                                        <Grid item xs={12}>
                                            <Grid container alignItems="center" spacing={1}>
                                                <Grid item sm zeroMinWidth>
                                                    <Typography variant="body2">Maintenance Overdue</Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="body2" align="right">
                                                        50
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            <LinearProgress variant="determinate" value={50} color="secondary" />

                                        </Grid>
                                        <Grid item xs={12}>
                                            <Grid container alignItems="center" spacing={1}>
                                                <Grid item sm zeroMinWidth>
                                                    <Typography variant="body2">Active Vehicles`</Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="body2" align="right">
                                                        70
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            <LinearProgress variant="determinate" value={70} color="secondary" />

                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>

                    </Grid>
                </Grid>

                <Grid container item xs={12} spacing={1} >
                    <Grid item xs={12} md={7} lg={8} >
                        <Card >
                            <BarChart />

                        </Card>
                    </Grid>

                    <Grid item xs={12} md={5} lg={4}  >

                        <Card >
                            <CardContent>
                                <LineChart />
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Grid item xs={12} container spacing={1} >
                    <Grid item xs={12} md={5} lg={4} >
                        <Card  >
                            <CardContent>
                                <RadialChart />
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={7} lg={8} >
                        <Card >
                            <CardContent>
                                <MixedChart />
                            </CardContent>
                        </Card>

                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Map locations={locations} />
                </Grid>
                {/* <Grid item xs={12}>
                < LatestorderCard title="Latest Order" />
                            </Grid>
                            <Grid item xs={12}>
                            <Testtable />
                            </Grid>
                        */}
                <Grid item xs={12}>
                    <TableBasic />
                </Grid>
                {/* <Grid item xs={12}>

                    <DataGridTable />

                        </Grid>
                        {
                            <Grid item xs={12}>
                            <AdddivCard />
                            </Grid>
                        }
                    */}



            </Grid>
        </>
    );
};

export default Default;
