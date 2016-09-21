"use strict";
var router_1 = require('@angular/router');
var project_component_1 = require('./project.component');
var info_component_1 = require('./info/info.component');
var order_component_1 = require('./order/order.component');
var appRoutes = [
    {
        path: '', component: project_component_1.ProjectComponent
    },
    {
        path: 'project', component: project_component_1.ProjectComponent,
        children: [
            {
                path: '',
                component: info_component_1.InfoComponent
            },
            {
                path: 'info',
                component: info_component_1.InfoComponent
            }, {
                path: 'order',
                component: order_component_1.OrderComponent
            }
        ]
    }
];
exports.routing = router_1.RouterModule.forChild(appRoutes);
