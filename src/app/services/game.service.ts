import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Iboard } from '../model';
@Injectable({
  providedIn: 'root'
})
export class GameService {

  private boardsDB: Iboard[] = [
    {
      id: '1',
      name: 'Adjust animal types',
      description: 'Drag the image to the right place',
      previewImg: 'https://res.cloudinary.com/duohe6hiw/image/upload/v1642680621/%D7%A8%D7%A7%D7%A2_%D7%97%D7%99%D7%95%D7%AA_1_g949xp.jpg',
      topGroups: [
        {
          type: 'dog',
          top: true,
          images: [
            'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg',
          ],
        },
        {
          type: 'fish',
          top: true,
          images: ['https://cdn.pixabay.com/photo/2018/04/15/17/45/fish-3322230_960_720.jpg'
            ,]
        },
        {
          type: 'horse',
          top: true,
          images: ['https://cdn.pixabay.com/photo/2017/12/10/15/16/white-horse-3010129_960_720.jpg'
            ,]
        },
        {
          type: 'cat',
          top: true,
          images: ['https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_960_720.jpg'
            ,]
        },
        {
          type: 'bird',
          top: true,
          images: ['https://cdn.pixabay.com/photo/2015/08/09/13/30/kingfisher-881594_960_720.jpg'
            ,]
        },
        {
          type: 'lion',
          top: true,
          images: ['https://cdn.pixabay.com/photo/2015/09/22/14/34/lion-951778_960_720.jpg'
            ,]
        },
      ],
      bottomGroups: [
        {
          type: 'dog',
          top: false,
          images: [
            'https://cdn.pixabay.com/photo/2019/08/19/07/45/dog-4415649_960_720.jpg'
            ,],
        },
        {
          type: 'fish',
          top: false,
          images: ['https://cdn.pixabay.com/photo/2016/11/19/14/56/fish-1839706_960_720.jpg'
            ,]
        },
        {
          type: 'horse',
          top: false,
          images: ['https://cdn.pixabay.com/photo/2017/02/13/20/21/horse-2063672_960_720.jpg'
            ,]
        },
        {
          type: 'cat',
          top: false,
          images: ['https://cdn.pixabay.com/photo/2021/12/01/18/17/cat-6838844_960_720.jpg'
            ,]
        },
        {
          type: 'bird',
          top: false,
          images: ['https://cdn.pixabay.com/photo/2017/03/13/10/25/hummingbird-2139278_960_720.jpg'
            ,]
        },
        {
          type: 'lion',
          top: false,
          images: ['https://cdn.pixabay.com/photo/2014/11/03/11/10/lion-515030_960_720.jpg'
            ,]
        },
      ]
    },
    {
      id: '2',
      name: 'Match numbers',
      description: 'Drag the balls to the correct number',
      previewImg: 'https://res.cloudinary.com/duohe6hiw/image/upload/v1642680584/%D7%A8%D7%A7%D7%A2_%D7%9B%D7%93%D7%95%D7%A8%D7%99%D7%9D_1_ysebrs.jpg',
      topGroups: [
        {
          type: 'one',
          top: true,
          images: [
            'https://cdn.pixabay.com/photo/2016/09/11/08/35/mathematics-1660859_960_720.png',
          ],
        },
        {
          type: 'two',
          top: true,
          images: ['https://cdn.pixabay.com/photo/2016/09/11/08/36/mathematics-1660868_960_720.png'
            ,]
        },
        {
          type: 'three',
          top: true,
          images: ['https://cdn.pixabay.com/photo/2016/09/11/08/35/mathematics-1660858_960_720.png'
            ,]
        },
        {
          type: 'four',
          top: true,
          images: ['https://cdn.pixabay.com/photo/2016/09/11/08/36/mathematics-1660867_960_720.png'
            ,]
        },
        {
          type: 'five',
          top: true,
          images: ['https://cdn.pixabay.com/photo/2016/09/11/08/35/mathematics-1660860_960_720.png'
            ,]
        },
        {
          type: 'six',
          top: true,
          images: ['https://cdn.pixabay.com/photo/2016/09/11/08/36/mathematics-1660865_960_720.png'
            ,]
        },
      ],
      bottomGroups: [
        {
          type: 'one',
          top: false,
          images: [
            'https://res.cloudinary.com/duohe6hiw/image/upload/v1642679571/1_opsio8.jpg'
            ,],
        },
        {
          type: 'two',
          top: false,
          images: ['https://res.cloudinary.com/duohe6hiw/image/upload/v1642679571/2_ox2r7q.jpg'
            ,]
        },
        {
          type: 'three',
          top: false,
          images: ['https://res.cloudinary.com/duohe6hiw/image/upload/v1642679571/3_hsyogx.jpg'
            ,]
        },
        {
          type: 'four',
          top: false,
          images: ['https://res.cloudinary.com/duohe6hiw/image/upload/v1642679571/4_d8fpjz.jpg'
            ,]
        },
        {
          type: 'five',
          top: false,
          images: ['https://res.cloudinary.com/duohe6hiw/image/upload/v1642679571/5_jox04i.jpg'
            ,]
        },
        {
          type: 'six',
          top: false,
          images: ['https://res.cloudinary.com/duohe6hiw/image/upload/v1642679572/6_gcgxxc.jpg'
            ,]
        },
      ]
    },
  ]

  private _boards$ = new BehaviorSubject<Iboard[]>([])
  public boards$ = this._boards$.asObservable()
  constructor() { }

  public loadBoards(): void {
    const locals = JSON.parse(localStorage.getItem('games'))
    
    if (!locals.length) {
      localStorage.setItem('games', JSON.stringify(this.boardsDB))
    }
    this.boardsDB = JSON.parse(localStorage.getItem('games'))
    this._boards$.next(this.boardsDB)
  }

  public addGame(newGame) {
    this.boardsDB.push(newGame)
    localStorage.setItem('games', JSON.stringify(this.boardsDB))
    this._boards$.next(this.boardsDB)
  }
  public removeGame(id: string) {
    this.boardsDB=  this.boardsDB.filter(board=>board.id!==id)
    localStorage.setItem('games', JSON.stringify(this.boardsDB))
    this._boards$.next(this.boardsDB)
  }
  public getById(id: string): Observable<Iboard> {
    console.log(this._boards$.value);
    this.loadBoards()
    const board = this._boards$.value.find(board => board.id === id)
    return of({ ...board })
  }
}
