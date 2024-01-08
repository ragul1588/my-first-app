import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllmatchesComponent } from './allmatches/allmatches.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { MainpagedetailComponent } from './mainpage/mainpagedetail/mainpagedetail.component';


const routes: Routes = [
{ path: '', component: MainpageComponent},
{ path: 'mainpage/mainpagedetail/:id', component: MainpagedetailComponent},
//{ path: 'mainpage/mainpagedetail', component: MainpagedetailComponent},
 {path: 'allmatches', component: AllmatchesComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}