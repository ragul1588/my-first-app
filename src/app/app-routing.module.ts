import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllmatchesComponent } from './allmatches/allmatches.component';
import { MainpageComponent } from './mainpage/mainpage.component';


const routes: Routes = [
{ path: '', component: MainpageComponent},
//{ path: 'mainpage', component: MainpageComponent},
 {path: 'allmatches', component: AllmatchesComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}