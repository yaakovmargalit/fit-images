import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Iboard } from 'src/app/model';
import { GameService } from 'src/app/services/game.service';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss']
})
export class NewGameComponent implements OnInit {
  form: FormGroup
  groups: FormArray
  topImg: string = ''
  bottomImg: string = ''
  constructor(private fb: FormBuilder, private gameService: GameService, private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: 'New Game',
      description: 'Drag the image to the right place',
      previewImg: 'https://cdn.pixabay.com/photo/2017/10/16/08/53/cat-2856531__340.jpg',
      groups: this.getGroupArray(),
    })
  }

  getGroupArray() {
    this.groups = this.fb.array([this.getEmptyGroup()])
    return this.groups
  }

  getEmptyGroup() {
    return this.fb.group({
      type: uuidv4(),
      topImg: '',
      bottomImg: ''
    })
  }

  onAddGroup() {
    if (!this.topImg || !this.bottomImg) {
      alert('You must select 2 images before adding a new group')
      return
    }
    this.topImg = ''
    this.bottomImg = ''
    this.groups.controls[this.groups.controls.length-1]
    this.groups.push(this.getEmptyGroup())
    console.log(this.form.value);
  }
  fixImgs(idx) {
    this.groups.controls[idx].value['topImg'] = this.topImg
    this.groups.controls[idx].value['bottomImg'] = this.bottomImg
  }
  async onUploadImgTop(ev: any, idx: number) {
    console.log(ev);
    let res = await this.uploadImg(ev); 
    this.topImg = res.url
    this.fixImgs(idx)
    // this.groups.controls[idx].patchValue(   {
    //   "type": "c0dc9c90-6685-471a-a397-e2a80d001078",
    //   topImg: res.url,
    //   bottomImg: ""
    // })
    console.log(this.groups.controls[idx]);
  }

  async onUploadImgBottom(ev: any, idx: number) {
    console.log(ev);
    let res = await this.uploadImg(ev);

    this.bottomImg = res.url
    this.fixImgs(idx)


  }
  saveGame() {

    if (!this.topImg || !this.bottomImg) {
      alert('You must select all images before saveing')
      return
    }    const game = this.form.value
    const newGame = {
      id: uuidv4(),
      name: game.name,
      description: game.description,
      previewImg: game.previewImg,
      topGroups: game.groups.map(group => {
        return {
          type: group.type,
          top: true,
          images: [
            group.topImg
          ]
        }
      }

      ),
      bottomGroups: game.groups.map(group => {
        return {
          type: group.type,
          top: false,
          images: [
            group.bottomImg
          ]
        }
      }

      )
    }
    console.log(newGame);
    this.gameService.addGame(newGame)
    this.router.navigate([''])
  }

  uploadImg = (ev) => {
    const UPLOAD_PRESET = 'jd56ekef'//insert yours
    const CLOUD_NAME = 'duohe6hiw'//insert yours
    const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`
    const FORM_DATA = new FormData();
    FORM_DATA.append('file', ev.target.files[0])
    FORM_DATA.append('upload_preset', UPLOAD_PRESET)
    return fetch(UPLOAD_URL, {
      method: 'POST',
      body: FORM_DATA
    })
      .then(res => res.json())
      .then(res => res)
      .catch(err => console.error(err))
  }
}
