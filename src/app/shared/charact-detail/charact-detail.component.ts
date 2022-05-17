import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-charact-detail',
  templateUrl: './charact-detail.component.html',
  styleUrls: ['./charact-detail.component.scss'],
})
export class CharactDetailComponent implements OnInit {
  @Input() charact: any;


  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log(this.charact);
  }

  async close(){
    await this.modalCtrl.dismiss();
  }

}
