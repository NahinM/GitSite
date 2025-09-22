import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./home/home').then(m => m.Home)
    },
    {
        path: 'about',
        loadComponent: () => import('./about/about').then(m => m.About)
    },
    {
        path: 'games',
        loadComponent: () => import('./games/games').then(m => m.Games)
    },
    {
        path: 'tictactoe',
        loadComponent: () => import('./tictactoe/tictactoe').then(m => m.Tictactoe)
    },
    {
        path: 'g2048',
        loadComponent: () => import('./g2048/g2048').then(m => m.G2048)
    }
];
