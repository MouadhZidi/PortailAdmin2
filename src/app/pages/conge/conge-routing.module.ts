import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCongeComponent } from './list-conge/list-conge.component';
import { SoldeCongeComponent } from './solde-conge/solde-conge.component';


const routes: Routes = [
    {
        path: 'list',
        component: ListCongeComponent
    },
    {
        path: 'solde',
        component: SoldeCongeComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CongeRoutingModule {}
