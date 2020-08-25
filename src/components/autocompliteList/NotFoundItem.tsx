import React from 'react';
import { INotFoundProps } from '../../common/commonInterfaces';

const NotFoundItem:React.FC<INotFoundProps> = ( props:INotFoundProps ) => <div className="item not_found"> <span>{props.notFound}</span></div>;
export default NotFoundItem;