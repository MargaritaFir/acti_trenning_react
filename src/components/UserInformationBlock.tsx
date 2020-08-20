import React from 'react';

interface IUserAddres{
    street: string,
    suite: string,
    city: string 
}

interface IUserInfo {
    id: number,
    name: string,
    username: string,
    email: string,
    address: IUserAddres,
    phone: string,
    website: string,
    company: string
}