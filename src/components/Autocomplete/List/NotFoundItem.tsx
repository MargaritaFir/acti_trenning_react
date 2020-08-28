import React from 'react';

interface IProps {
    notFoundElement: string;
}

const NotFoundItem:React.FC<IProps> = ( { notFoundElement } ) => <div className="item not_found"> <span>{notFoundElement}</span></div>;

export default NotFoundItem;