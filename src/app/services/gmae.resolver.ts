import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Iboard } from '../model';
import { GameService } from './game.service';

@Injectable({
  providedIn: 'root'
})
export class GmaeResolver implements Resolve<Promise<Iboard>> {
  constructor(private gameService: GameService) { }
  async resolve(route: ActivatedRouteSnapshot) {
    console.log('id');
    const id = route.params['id']

    const board = await this.gameService.getById(id).toPromise()
    return JSON.parse(JSON.stringify(board));
  }
}
