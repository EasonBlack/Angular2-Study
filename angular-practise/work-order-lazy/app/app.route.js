"use strict";
var router_1 = require('@angular/router');
var appRoutes = [
    {
        path: '', redirectTo: '/dashboard', pathMatch: 'full'
    },
    {
        path: 'dashboard',
        loadChildren: './app/dashboard/dashboard.module#DashboardModule',
    },
    {
        path: 'project',
        loadChildren: './app/project/project.module#ProjectModule',
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true });
