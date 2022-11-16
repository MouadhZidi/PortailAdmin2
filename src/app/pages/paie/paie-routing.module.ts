import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeclarationComponent } from './declaration/declaration.component';
import { EtatApresPaieComponent } from './etat-apres-paie/etat-apres-paie.component';



const routes: Routes = [
    {
        path: 'bulletin-paie',
        component: EtatApresPaieComponent
    },
    {
        path: 'declaration',
        component: DeclarationComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PaieRoutingModule {}
