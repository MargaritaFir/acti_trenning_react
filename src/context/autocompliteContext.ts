import React from 'react';
import { placeholder, notFound } from '../common/constants';

interface ContextProps {
    placeholder: string;
    notFound: string;
    getItemInfos: (id:number) => void;
}

const AutocompliteContext = React.createContext<Partial<ContextProps>>({});


export default AutocompliteContext;