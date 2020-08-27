

type IItem = {id:number, name:string};

export function filter( items:IItem[], value:string ){
   const itemValue = value.toLowerCase().trim();

   if(itemValue.match(/[a-zA-Z]/i)){
        return items.filter((item:IItem) => item.name.toLowerCase().includes(itemValue));
   }

   return null;
}