import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Loader from './component/Loader/Loader';
import NavMotion from './layout/NavMotion';
import MainLayout from './layout/MainLayout';
import MinimalLayout from './layout/MinimalLayout';



import BasicForm from './views/Form/BasicForm';
import FrmButton from './views/Form/FrmButton';
import FrmAutocomplete from './views/Form/FrmAutocomplete';
import FrmCheckbox from './views/Form/FrmCheckbox';
import FrmDatetime from './views/Form/FrmDatetime';
import FrmSelect from './views/Form/FrmSelect/index';


// device
import Trip from './views/Device/Trip';
import Live from './views/Device/Live';
import GeoFence from './views/Device/GeoFence';


// Reports
import BasicReport from './views/Reports/BasicReport';
import ReportOne from './views/Reports/ReportOne';
import ReportTwo from './views/Reports/ReportTwo';
import ReportFour from './views/Reports/ReportFour.js';
import Tripdetails from './views/Reports/tripdetails';
import CurrentOverview from './views/Reports/CurrentOverview';
import MovingOverview from './views/Reports/MovingOverview';
import StoppageReport from './views/Reports/StoppageReport';
import TransitReport from './views/Reports/TransitReport';
import EquipmentProdReport from './views/Reports/EquipmentProdReport';
import LatestLocationReport from './views/Reports/LatestLocationReport';
import SpeedReport from './views/Reports/SpeedReport';
import AreawiseProductionReport from './views/Reports/AreawiseProductionReport';
import TripWeighbridgesReport from './views/Reports/TripWeighbridgesReport';
import MachineHealthCheckReport from './views/Reports/MachineHelathCheck';



const AuthLogin = lazy(() => import('./views/Login'));

const Price = lazy(() => import('./views/Application/Price/Price2'));
const Page404 = lazy(() => import('./pages/Page404'))

const DashboardDefault = lazy(() => import('./views/Dashboard/Default'));

const RtlLayout = lazy(() => import('./views/RtlLayout'));

const TableBasic = lazy(() => import('./views/Tables/TableBasic'));

const UtilsIcons = lazy(() => import('./views/Utils/Icons'));
const UtilsTypography = lazy(() => import('./views/Utils/Typography'));

const MultiLanguage = lazy(() => import('./views/MultiLanguage'));




const Routes = () => {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Suspense fallback={<Loader />}>
                <Switch>
                    <Redirect exact from="/" to="/dashboard/default" />
                    <Route path={[]}>
                        <MinimalLayout>
                            <Switch location={location} key={location.pathname}>
                                <NavMotion></NavMotion>
                            </Switch>
                        </MinimalLayout>
                    </Route>
                    <Route
                        path={[
                            '/register',
                            '/application/register',
                            '/forgot-password',
                            '/application/forgot-password',
                            '/application/login',
                            '/pages/error/error1',
                            '/pages/error/error2',
                            '/pages/comingsoon',

                            '/dashboard/default',
                            '/device/trip',
                            '/device/geofence',
                            '/device/live',


                            '/rtl',
                            '/user/account',
                            '/user/card',
                            '/user/list',
                            '/user/profile',
                            '/user/socialprofile',
                            '/application/ecommerce/account',
                            '/application/ecommerce/addproduct',
                            '/application/ecommerce/product',
                            '/application/ecommerce/customerlist',
                            '/application/ecommerce/orderlist',
                            '/application/ecommerce/orderdetails',
                            '/application/ecommerce/productreview',
                            '/application/contacts/list',
                            '/application/contacts/card',
                            '/application/price/price1',
                            '/application/price/price2',
                            '/application/price/price3',
                            '/application/mail',
                            '/application/chat',
                            '/basic/accordion',
                            '/basic/avatar',
                            '/basic/badges',
                            '/basic/breadcrumb',
                            '/basic/cards',
                            '/basic/chip',
                            '/basic/list',
                            '/basic/tabs',
                            '/advance/alert',
                            '/advance/dialog',
                            '/advance/pagination',
                            '/advance/progress',
                            '/advance/rating',
                            '/advance/snackbar',
                            '/advance/speeddial',
                            '/advance/timeline',
                            '/advance/toggle-button',
                            '/advance/treeview',


                            '/forms/frm-basicform',
                            '/forms/frm-autocomplete',
                            '/forms/frm-button',
                            '/forms/frm-checkbox',
                            '/forms/frm-datetime',
                            '/forms/frm-listbox',
                            '/forms/frm-radio',
                            '/forms/frm-select',
                            '/forms/frm-slider',
                            '/forms/frm-switch',
                            '/forms/frm-text-field',

                            // Reports Path
                            '/reports/rpt-basicReport',
                            '/reports/rpt-reportOne',
                            '/reports/rpt-reportTwo',
                            '/reports/rpt-reportfour',
                            '/reports/rpt-tripdetails',
                            '/reports/rpt-currentoverview',
                            '/reports/rpt-movingoverview',
                            '/reports/rpt-stoppagereport',
                            '/reports/rpt-transitreport',
                            '/reports/rpt-equipmentprodreport',
                            '/reports/rpt-latestlocationreport',
                            '/reports/rpt-seedreport',
                            '/reports/rpt-areawiseproductionreport',
                            '/reports/rpt-tripweighbridgesreport',
                            '/reports/rpt-machinehelthcheck',


                            '/tables/table-basic',
                            '/tables/dense-table',
                            '/tables/enhanced-table',
                            '/tables/data-table',
                            '/tables/customized-table',
                            '/tables/sticky-header-table',
                            '/tables/collapse-table',
                            '/mui-datatables/mui-simple',
                            '/mui-datatables/mui-column-filters',
                            '/mui-datatables/mui-column-options-update',
                            '/mui-datatables/mui-column-sort',
                            '/mui-datatables/mui-component-edit',
                            '/mui-datatables/mui-csv-export',
                            '/mui-datatables/mui-custom-action-button',
                            '/mui-datatables/mui-custom-components',
                            '/mui-datatables/mui-customize-columns',
                            '/mui-datatables/mui-customize-filter',
                            '/mui-datatables/mui-draggable-columns',
                            '/mui-datatables/mui-expandable-rows',
                            '/mui-datatables/mui-fixed-header',
                            '/mui-datatables/mui-resizable-columns',
                            '/mui-datatables/mui-selectable-rows',
                            '/utils/util-modal',
                            '/utils/util-tooltip',
                            '/utils/util-popover',
                            '/utils/util-popper',
                            '/utils/util-transitions',
                            '/utils/util-icons',
                            '/utils/util-typography',
                            '/sample-page',
                            '/multi-language',
                        ]}
                    >
                        <MainLayout>
                            <Switch location={location} key={location.pathname}>
                                <NavMotion>
                                    <Route path="/application/login" component={AuthLogin} />
                                    <Route path="/application/register" component={Page404} />
                                    <Route path="/register" component={Page404} />
                                    <Route path="/application/forgot-password" component={Page404} />
                                    <Route path="/forgot-password" component={Page404} />
                                    <Route path="/pages/error/error1" component={Page404} />
                                    <Route path="/pages/error/error2" component={Page404} />
                                    <Route path="/pages/comingsoon" component={Price} />

                                    <Route path="/dashboard/default" component={DashboardDefault} />
                                    <Route path="/utils/util-typography" component={UtilsTypography} />
                                    <Route path="/multi-language" component={MultiLanguage} />
                                    <Route path="/rtl" component={RtlLayout} />
                                    <Route path="/utils/util-icons" component={UtilsIcons} />
                                    <Route path="/tables/table-basic" component={TableBasic} />

                                    
                                    <Route path="/device/trip" component={Trip} />
                                    <Route path="/device/geofence" component={GeoFence} />
                                    <Route path="/device/live" component={Live} />


                                    <Route path="/user/account" component={Page404} />
                                    <Route path="/user/card" component={Page404} />
                                    <Route path="/user/list" component={Page404} />
                                    <Route path="/user/profile" component={Page404} />
                                    <Route path="/user/socialprofile" component={Page404} />
                                    <Route path="/application/ecommerce/account" component={Page404} />
                                    <Route path="/application/ecommerce/product" component={Page404} />
                                    <Route path="/application/ecommerce/customerlist" component={Page404} />
                                    <Route path="/application/ecommerce/orderlist" component={Page404} />
                                    <Route path="/application/ecommerce/orderdetails" component={Page404} />
                                    <Route path="/application/ecommerce/addproduct" component={Page404} />
                                    <Route path="/application/ecommerce/productreview" component={Page404} />
                                    <Route path="/application/contacts/list" component={Page404} />
                                    <Route path="/application/contacts/card" component={Page404} />
                                    <Route path="/application/mail" component={Page404} />
                                    <Route path="/application/chat" component={Page404} />
                                    <Route path="/application/price/price1" component={Page404} />
                                    <Route path="/application/price/price2" component={Page404} />
                                    <Route path="/application/price/price3" component={Page404} />
                                    <Route path="/basic/accordion" component={Page404} />
                                    <Route path="/basic/avatar" component={Page404} />
                                    <Route path="/basic/badges" component={Page404} />
                                    <Route path="/basic/breadcrumb" component={Page404} />
                                    <Route path="/basic/cards" component={Page404} />
                                    <Route path="/basic/chip" component={Page404} />
                                    <Route path="/basic/list" component={Page404} />
                                    <Route path="/basic/tabs" component={Page404} />
                                    <Route path="/advance/alert" component={Page404} />
                                    <Route path="/advance/dialog" component={Page404} />
                                    <Route path="/advance/pagination" component={Page404} />
                                    <Route path="/advance/progress" component={Page404} />
                                    <Route path="/advance/rating" component={Page404} />
                                    <Route path="/advance/snackbar" component={Page404} />
                                    <Route path="/advance/speeddial" component={Page404} />
                                    <Route path="/advance/timeline" component={Page404} />
                                    <Route path="/advance/toggle-button" component={Page404} />
                                    <Route path="/advance/treeview" component={Page404} />



                                    <Route path="/forms/frm-basicform" component={BasicForm} />
                                    <Route path="/forms/frm-autocomplete" component={FrmAutocomplete} />
                                    <Route path="/forms/frm-button" component={FrmButton} />
                                    <Route path="/forms/frm-checkbox" component={FrmCheckbox} />
                                    <Route path="/forms/frm-datetime" component={FrmDatetime} />
                                    <Route path="/forms/frm-listbox" component={Page404} />
                                    <Route path="/forms/frm-radio" component={Page404} />
                                    <Route path="/forms/frm-select" component={FrmSelect} />
                                    <Route path="/forms/frm-slider" component={Page404} />
                                    <Route path="/forms/frm-switch" component={Page404} />
                                    <Route path="/forms/frm-text-field" component={Page404} />

                                    {/* Reports */}
                                    <Route path="/reports/rpt-basicReport" component={BasicReport} />
                                    <Route path="/reports/rpt-reportOne" component={ReportOne} />
                                    <Route path="/reports/rpt-reportTwo" component={ReportTwo} />
                                    <Route path="/reports/rpt-reportfour" component={ReportFour} />
                                    <Route path="/reports/rpt-tripdetails" component={Tripdetails} />
                                    <Route path="/reports/rpt-currentoverview" component={CurrentOverview} />
                                    <Route path="/reports/rpt-movingoverview" component={MovingOverview} />
                                    <Route path="/reports/rpt-stoppagereport" component={StoppageReport} />
                                    <Route path="/reports/rpt-transitreport" component={TransitReport} />
                                    <Route path="/reports/rpt-equipmentprodreport" component={EquipmentProdReport} />
                                    <Route path="/reports/rpt-latestlocationreport" component={LatestLocationReport} />
                                    <Route path="/reports/rpt-seedreport" component={SpeedReport} />
                                    <Route path="/reports/rpt-areawiseproductionreport" component={AreawiseProductionReport} />
                                    <Route path="/reports/rpt-tripweighbridgesreport" component={TripWeighbridgesReport} />
                                    <Route path="/reports/rpt-machinehelthcheck" component={MachineHealthCheckReport} />






                                    <Route path="/tables/dense-table" component={Page404} />
                                    <Route path="/tables/enhanced-table" component={Page404} />
                                    <Route path="/tables/data-table" component={Page404} />
                                    <Route path="/tables/customized-table" component={Page404} />
                                    <Route path="/tables/sticky-header-table" component={Page404} />
                                    <Route path="/tables/collapse-table" component={Page404} />
                                    <Route path="/mui-datatables/mui-simple" component={Page404} />
                                    <Route path="/mui-datatables/mui-column-filters" component={Page404} />
                                    <Route path="/mui-datatables/mui-column-options-update" component={Page404} />
                                    <Route path="/mui-datatables/mui-component-edit" component={Page404} />
                                    <Route path="/mui-datatables/mui-column-sort" component={Page404} />
                                    <Route path="/mui-datatables/mui-csv-export" component={Page404} />
                                    <Route path="/mui-datatables/mui-custom-action-button" component={Page404} />
                                    <Route path="/mui-datatables/mui-custom-components" component={Page404} />
                                    <Route path="/mui-datatables/mui-customize-columns" component={Page404} />
                                    <Route path="/mui-datatables/mui-customize-filter" component={Page404} />
                                    <Route path="/mui-datatables/mui-draggable-columns" component={Page404} />
                                    <Route path="/mui-datatables/mui-expandable-rows" component={Page404} />
                                    <Route path="/mui-datatables/mui-fixed-header" component={Page404} />
                                    <Route path="/mui-datatables/mui-resizable-columns" component={Page404} />
                                    <Route path="/mui-datatables/mui-selectable-rows" component={Page404} />
                                    <Route path="/utils/util-modal" component={Page404} />
                                    <Route path="/utils/util-tooltip" component={Page404} />
                                    <Route path="/utils/util-popover" component={Page404} />
                                    <Route path="/utils/util-popper" component={Page404} />
                                    <Route path="/utils/util-transitions" component={Page404} />

                                    <Route path="/sample-page" component={Page404} />
                                </NavMotion>
                            </Switch>
                        </MainLayout>
                    </Route>
                </Switch>
            </Suspense>
        </AnimatePresence>
    );
};

export default Routes;
