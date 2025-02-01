import { Routes } from '@angular/router';
import { EmpleadosComponent } from './empleados/empleados.component';
import { NominaComponent } from './nomina/nomina.component';

export const routes: Routes = [
    {path:'empleados', component:EmpleadosComponent},
    {path:'nomina', component:NominaComponent}
];
