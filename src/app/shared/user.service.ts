import { EventEmitter } from '@angular/core';

export class UserService{
    statusChanged = new EventEmitter<any>();

    set(getdataFromDatabase){
        localStorage.setItem('user' , JSON.stringify(getdataFromDatabase));
        this.statusChanged.emit(getdataFromDatabase);
    };

    getProfile(){
        const user = localStorage.getItem('user');
        return JSON.parse(user);
    }

    destroy(){
        localStorage.removeItem('user');
        this.statusChanged.emit(null);
    }
}