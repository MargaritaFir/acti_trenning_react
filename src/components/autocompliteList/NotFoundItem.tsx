import React from 'react';

interface IProps {
    notFound: string;
}

const NotFoundItem:React.FC<IProps> = ( { notFound } ) => <div className="item not_found"> <span>{notFound}</span></div>;

export default NotFoundItem;