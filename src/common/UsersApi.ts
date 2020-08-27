//Получение списка пользователя

class UsersApi {
    private url:string;
    constructor(url: string){
        this.url = url
    }
    getUsers() {
        return fetch(`${this.url}/users`)
        .then((response) => response.json())
        .then(data => {
            return data;           
        });
    }

}

export default UsersApi;