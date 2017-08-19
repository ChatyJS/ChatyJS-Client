import {User} from 'app/_models/User';

export class Group {
  id?:string;
  name: string;
  members?: User[];
  email: string;
  status:boolean;
  password:string;
  age:number;
  createdAt?: Date;
  updatedAt?: Date;

  constructor(id?: string, name?: string, members?:User[], createdAt?: Date, updatedAt?:Date) {
    this.id = id
    this.name = name
    this.members = members;
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }
}
