import React, { useState, useEffect } from 'react';
import ItemsContainer from '../itemsContainer/ItemsContainer';
import NotFoundItem from './NotFoundItem';
import { IItem, IList } from '../../common/commonInterfaces';


const List:React.FC<IList> = ( props: IList ) => {
    const { items, getItemInfos, notFound } = props;

    const [ itemsList, setItemsList ] = useState<IItem[]>([]);

    useEffect(() => {
        if(items) setItemsList(items);

    }, [items]);


    return (
        <div className='autocomplite_list' id='autoList'>
            {(itemsList.length)? <ItemsContainer itemsList={itemsList} getItemInfos={getItemInfos}/> : <NotFoundItem notFound={notFound} /> }
        </div>
    )
}

export default List;