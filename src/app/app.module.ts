import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { GameBoardComponent } from './pages/game-board/game-board.component';
import { HomeComponent } from './pages/home/home.component';
import { TopGroupsComponent } from './cmps/top-groups/top-groups.component';
import { BottomGroupsComponent } from './cmps/bottom-groups/bottom-groups.component';
import { GroupComponent } from './cmps/group/group.component';
import { ShufflePipe } from './shuffle.pipe';
import { HeaderComponent } from './cmps/header/header.component';
import { GamePreviewComponent } from './cmps/game-preview/game-preview.component';
import { NewGameComponent } from './pages/new-game/new-game.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    HomeComponent,
    TopGroupsComponent,
    BottomGroupsComponent,
    GroupComponent,
    ShufflePipe,
    HeaderComponent,
    GamePreviewComponent,
    NewGameComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
