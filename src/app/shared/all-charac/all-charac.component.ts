import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { CharacterDetailComponent } from '../character-detail/character-detail.component';

@Component({
  selector: 'app-all-charac',
  templateUrl: './all-charac.component.html',
  styleUrls: ['./all-charac.component.scss'],
})
export class AllCharacComponent implements OnInit {
  

    allCharac: any;

  constructor( private randmService: RickAndMortyService,
    private modalControllerr: ModalController) {
         }


  ngOnInit() {this.randmService.getAllCharacters().then( (res: any) => {
      this.allCharac = res;
      console.log (this.allCharac);
    });
  }

  async openModal(data: any) {
    const modal = await this.modalControllerr.create({
    component: CharacterDetailComponent,
    componentProps: { character: data }
    });
    return await modal.present();
   }

}