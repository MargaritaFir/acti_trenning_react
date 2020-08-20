import React from 'react';

interface  IListProps {
    type: string
}


const List: React.FC<IListProps> = (props: IListProps) => {
    return (
    <div>{props.type}</div>
    )
}

export default List;