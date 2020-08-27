import React, { memo } from 'react';
import Item from './Item/Item';
import NotFoundItem from './NotFoundItem';
import { IItem } from '../../../common/interfaces';
import './list.scss'


interface IProps {
    items:IItem[];
    getItemInfos:(id:number) => void;  
    notFound:string;
};


const List:React.FC<IProps> = ( { items, getItemInfos, notFound } ) => {

    return (
        <div className='autocomplite_list' id='autoList'>

            {(items.length)?  items.map((item:IItem) => <Item key={item.id} {...item} getItemInfos={getItemInfos}/>) : <NotFoundItem notFound={notFound} /> }
        </div>
    )
}

export default memo(List);