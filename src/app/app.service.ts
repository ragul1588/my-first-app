import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()

export class AppService{
    constructor (private http:HttpClient){
       
    }
    getData(){
        //return this.http.get('https://jsonplaceholder.typicode.com/users')
        return this.http.get('http://localhost:5140/Employee')
    }
}
