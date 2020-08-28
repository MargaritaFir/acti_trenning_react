import React, {useCallback} from 'react';
import './item.scss';

interface IProps {
    id: number,
    name: string,
    onSelect:(id:number) => void;
};

const Item:React.FC<IProps> = ( { id, name, onSelect } ) => {

    const handleClick = useCallback(() => onSelect(id), [id, onSelect])

    return (
        <div className="item" id={`item_${id}`} onClick={handleClick}>
            <span>{name}</span>
        </div>
    )
};

export default Item;