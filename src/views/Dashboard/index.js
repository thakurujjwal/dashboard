import React from 'react';
import { Grid, Card, CardContent, } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import AddIcon from '@mui/icons-material/Add';
import Box from '@material-ui/core/Box'

import { gridSpacing } from './../../store/constant';
import TableBasic from '../Tables';
import DashboardCard from '../ReportCard/DashboardCard';

// Charts
import BarChart from '../ApexChart/BarChart';
import LineChart from '../ApexChart/LineChart';
import RadialChart from '../ApexChart/RadialChart';
import MixedChart from '../ApexChart/MixedChart';
import Map from "../Map/Map";
import TopChartDash from '../ApexChart/TopChartDash';
import TriggerCard from '../ReportCard/TriggerCard';






const Default = () => {
    return (
        <>
            <Grid container spacing={gridSpacing}  >
                <Grid item xs={12}>
                    <Box display="flex" flexDirection="row-reverse" p={1} m={1} >
                        <Button variant="contained" color="primary" y={{ m: '2rem' }} startIcon={<AddIcon />}>
                            Add
                        </Button>
                    </Box>
                    <DashboardCard />
                    <TriggerCard />
                </Grid>
                <TopChartDash />
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
                    <Map />
                </Grid>
                <Grid item xs={12}>
                    <TableBasic />
                </Grid>
            </Grid>
        </>
    );
};

export default Default;
