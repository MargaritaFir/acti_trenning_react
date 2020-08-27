import React, {useContext} from 'react';
import { IItemProps } from '../../common/commonInterfaces';
import AutocompliteContext from '../../context/autocompliteContext';



const Item:React.FC<IItemProps>  = ( props:IItemProps ) => {
    
const {getItemInfos} = useContext(AutocompliteContext);

    return (
        <div className="item" id={`item_${props.id}`} onClick={() => getItemInfos!(props.id)}>
            <span>{props.name}</span>
        </div>
    )
};

export default Item;