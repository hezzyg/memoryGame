import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent }  from './app.component';
import { SelectLevelComponent} from './select-level/select-level.component'
import { PlayBoardComponent }  from './play-board/play-board.component';
import {CardComponent} from './card/card.component';

const appRoutes : Routes = [
    {
        path:'',
        component: SelectLevelComponent
    },
    {
        path: 'board',
        component: PlayBoardComponent
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);