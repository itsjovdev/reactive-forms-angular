import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'reactive',
        //Para poder traer la importacion tenemos que poner then
        loadChildren: () => import('./reactive/reactive.routes').then(m => m.reactiveRoutes)
    },
    {
        path: 'auth',
        //Para poder traer la importacion tenemos que poner then
        loadChildren: () => import('./auth/auth.routes')
    },
    {
        path: 'country',
        //Para poder traer la importacion tenemos que poner then
        loadChildren: () => import('./country/country.routes').then(m => m.countryRoutes)
    },
    {
        path: '**',
        redirectTo: 'reactive'
    }
];
