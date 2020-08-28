import React, { memo } from 'react';
import Item from './Item/Item';
import NotFoundItem from './NotFoundItem';
import { IItem } from '../../../common/interfaces';
import './list.scss';

interface IProps {
    items:IItem[];
    onSelect:(id:number) => void;  
    notFoundElement:string;
};

const List:React.FC<IProps> = ( { items, onSelect, notFoundElement } ) => {

    return (
        <div className='autocomplite_list' id='autoList'>
            {(items.length)?  items.map((item:IItem) => <Item key={item.id} {...item} onSelect={onSelect}/>) : <NotFoundItem notFoundElement={notFoundElement} /> }
        </div>
    )
}

export default memo(List);