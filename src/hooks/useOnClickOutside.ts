import { useEffect } from 'react';

//Не знаю как здесь типизировать ref

export const useOnClickOutside = (ref:any, handler:() => void) => {
    
    useEffect(() => {

        const listener = (e:MouseEvent) => { if(ref.current && !ref.current.contains(e.target)) handler(); }

        document.addEventListener('click', listener)

        return () => document.removeEventListener('click', listener );

    }, [ref, handler]);
}