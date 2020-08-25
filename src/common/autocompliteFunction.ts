import { IItem } from '../common/commonInterfaces';

export function autocomplite( users:IItem[], query:string ){
   const userValue = query.toLowerCase().trim();

   if(userValue.match(/[a-zA-Z]/i)){
        return users.filter((user:IItem) => user.name.toLowerCase().includes(userValue));
   }

   return null;
}
