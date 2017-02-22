"use strict";
var router_1 = require("@angular/router");
var app_component_1 = require("./ListComponent/app.component");
var app_child_1 = require("./QuoteComponent/app.child");
exports.routes = [
    { path: 'list', component: app_component_1.ListComponent },
    { path: 'quote', component: app_child_1.QuoteComponent },
    { path: 'quote/:id', component: app_child_1.QuoteComponent }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
