
// Если я здесь убираю id в IItem, то потом в List возникает ошибка, связанная с типизацией

type filterNameType = {id:number, name:string};

export function filterName( items:filterNameType[], value:string ){
   const itemValue = value.toLowerCase().trim();
   if(!itemValue.match(/[a-zA-Z]/i)) return [];
   return items.filter((item) => item.name.toLowerCase().includes(itemValue));
}
