import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameBoardComponent } from './pages/game-board/game-board.component';
import { HomeComponent } from './pages/home/home.component';
import { NewGameComponent } from './pages/new-game/new-game.component';
import { GmaeResolver } from './services/gmae.resolver';

const routes: Routes = [
  {path:'game/:id', component:GameBoardComponent,resolve:{board:GmaeResolver}},
  {path:'new-game', component:NewGameComponent},
  {path:'',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
