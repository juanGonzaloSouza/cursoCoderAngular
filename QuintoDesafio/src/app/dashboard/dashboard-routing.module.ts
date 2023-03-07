import { NgModule } from '@angular/core';
import { Routes , RouterModule} from '@angular/router';
import { GokuComponent } from './pages/goku/goku.component';
import { VegetaComponent } from './pages/vegeta/vegeta.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
    {
        path:'',
        component:HomeComponent,
        children:[
            {
              path: 'goku',
              component:GokuComponent,
            },
            {
              path: 'vegeta',
              component:VegetaComponent,
            },
        ]
    }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class DashboardRoutingModule { }

