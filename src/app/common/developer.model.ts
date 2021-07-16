import { Skill } from './skill.model';

export class Developer {
  public lastname: string;
  public firstname: string;
  public age: number;
  public sexe: string;
  public bio: string;
  public skills: Skill[];

  constructor(lastName: string,firstName: string,age: number,sexe: string,bio: string) {
      (this.lastname = lastName),
      (this.firstname = firstName),
      (this.age = age),
      (this.sexe = sexe),
      (this.bio = bio),
      (this.skills = new Array<Skill>());
  }

  addSkill(skill: Skill) {
    this.skills.push(skill);
  }
  getSkills(): Skill[] {
    return this.skills;
  }
}
