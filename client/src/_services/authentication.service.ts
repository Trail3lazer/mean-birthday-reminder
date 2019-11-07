import { Injectable } from '@angular/core';
import {Observable} from "rxjs"

@Injectable({ providedIn: 'root' })
export class AuthService {
    private user = {};
    readonly user$ = new Observable<{}>();
    constructor(){
        this.checkSession()
    }

    public getuser() {
        return this.user;
    }

    public checkSession(){
        let user = sessionStorage.getItem('userForBirthdayApp');
        if(user !== null){
            this.user = JSON.parse(user);
        }
    }

    public signup(user: any, cb: any) {
        fetch(`/api/users/signup`, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        }).then(res=>res.json()).then(res=>{
            console.log(res)
            if(res){
                this.user = res;
                sessionStorage.setItem('userForBirthdayApp', JSON.stringify(this.user))
                cb(true);
            } else {
                cb(false);
            }
        })
    }

    public login(name: string, password: string, cb) {
        fetch(`/api/users/authenticate`, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name: name, password: password})
        }).then(res=>res.json()).then(res=>{
            if(res.password === password){
                this.user = res;
                sessionStorage.setItem('userForBirthdayApp', JSON.stringify(this.user))
                cb(true);
            } else {
                cb(false);
            }
        })
    }

    public logout() {
        this.user = null;
        sessionStorage.setItem('userForBirthdayApp', 'false')
        window.location.reload()
    }


}