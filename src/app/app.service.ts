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

    getScore()
    {
        return this.http.get('https://api.cricapi.com/v1/cricScore?apikey=0501ad1e-c922-4257-aea0-242f9d9d4973&offset=0');
    }
    getLiveScore()
    {
        return this.http.get('https://api.cricapi.com/v1/currentMatches?apikey=0501ad1e-c922-4257-aea0-242f9d9d4973&offset=0');
    }
    getAllFlags()
    {
        return this.http.get('https://cricketdata.org/how-to-use-cricket-data-api.aspx#api-countries-with-flags-2')
    }
    
}
