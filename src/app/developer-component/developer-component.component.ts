
import { Component, OnInit } from '@angular/core';
import { Developer } from '../common/developer.model';
import { Skill } from '../common/skill.model';

@Component({
  selector: 'app-developer-component',
  templateUrl: './developer-component.component.html',
  styleUrls: ['./developer-component.component.css']
})
export class DeveloperComponentComponent implements OnInit {

  public developer!: Developer;
  constructor() {}

  ngOnInit(): void {
    this.developer = new Developer("Saignant","michel",54,"Homme","okok");
    this.developer.addSkill(new Skill("C#", "https://avataaars.io/?avatarStyle=Circle&topType=LongHairFroBand&accessoriesType=Round&hairColor=Auburn&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=Overall&clotheColor=Gray01&eyeType=Squint&eyebrowType=FlatNatural&mouthType=Eating&skinColor=Yellow", "Wikipedia"));
    this.developer.addSkill(new Skill("developpeur", "https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurvy&accessoriesType=Round&hairColor=Black&facialHairType=Blank&facialHairColor=Red&clotheType=Overall&clotheColor=Heather&eyeType=Dizzy&eyebrowType=Default&mouthType=Smile&skinColor=Pale", "azdadazd"));
  }
}
