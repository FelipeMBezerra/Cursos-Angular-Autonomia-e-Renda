import { Routes } from '@angular/router';
import { authGuard } from './core/auth.guard';
import { Cheakout } from './features/cheakout/cheakout/cheakout';


export const routes: Routes = [{
    path: 'home',
    loadComponent: () =>
        import('./features/home/home/home').then(m => m.Home)
},
{
    path: 'produtos',
    loadComponent: () =>
        import('./features/produtos/lista-produtos/lista-produtos').then(m => m.ListaProdutos)
},
{
    path: 'carrinho',
    canActivate: [authGuard],
    loadComponent: () =>
        import('./features/carrinho/carrinho/carrinho').then(m => m.Carrinho)
},
{
    path: 'checkout',
    loadComponent:() => import('./features/cheakout/cheakout/cheakout').then((m) => m.Cheakout),
},
{
    path: '*',
    
    redirectTo: ''
}
];
