"use strict";
var router_1 = require('@angular/router');
var select_level_component_1 = require('./select-level/select-level.component');
var play_board_component_1 = require('./play-board/play-board.component');
var appRoutes = [
    {
        path: '',
        component: select_level_component_1.SelectLevelComponent
    },
    {
        path: 'board',
        component: play_board_component_1.PlayBoardComponent
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map