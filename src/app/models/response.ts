import { User } from './user';

export interface Response{
    success:boolean,
    user:User,
    errors:string,
}