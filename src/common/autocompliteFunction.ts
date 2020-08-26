import { IItem } from '../common/commonInterfaces';

export function autocomplite( items:IItem[], query:string ){
   const itemValue = query.toLowerCase().trim();

   if(itemValue.match(/[a-zA-Z]/i)){
        return items.filter((item:IItem) => item.name.toLowerCase().includes(itemValue));
   }

   return null;
}
