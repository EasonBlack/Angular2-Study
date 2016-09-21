"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard.component');
var appRoutes = [
    {
        path: '', component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'dashboard', component: dashboard_component_1.DashboardComponent,
    }
];
exports.routing = router_1.RouterModule.forChild(appRoutes);
