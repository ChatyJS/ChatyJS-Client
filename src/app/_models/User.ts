export class User {
  id?:string;
  name: string;
  email: string;
  status:boolean;
  password:string;
  age:number;
  createdAt?: Date;
  updatedAt?: Date;

  constructor(id?: string, name?: string, createdAt?: Date, updatedAt?:Date) {
    this.id = id
    this.name = name
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }
}
