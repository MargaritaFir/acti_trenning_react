import React, { useState, useEffect } from 'react';
import Item from '../itemsContainer/Item';
import NotFoundItem from './NotFoundItem';
import { IItem } from '../../common/commonInterfaces';


interface IProps {
    items:IItem[] | [];
    getItemInfos:(id:number) => void;  
    notFound:string;
};


const List:React.FC<IProps> = ( { items, getItemInfos, notFound } ) => {

    const [ itemsList, setItemsList ] = useState<IItem[]>([]);

    useEffect(() => {
        if(items) setItemsList(items);

    }, [items]);


    return (
        <div className='autocomplite_list' id='autoList'>

            {(itemsList.length)?  itemsList.map((item:IItem) => <Item key={item.id} {...item} getItemInfos={getItemInfos}/>) : <NotFoundItem notFound={notFound} /> }
        </div>
    )
}

export default List;