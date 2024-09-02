import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';

@Injectable()

export class AppService
{
    private cacheKey = '';
    private apiUrl ='';
    constructor (private http:HttpClient){
       
    }
    getData(){
        //return this.http.get('https://jsonplaceholder.typicode.com/users')
        return this.http.get('http://localhost:5140/Employee')
    }

    getScore(): Observable<any> {
        this.apiUrl = 'https://api.cricapi.com/v1/cricScore?apikey=0501ad1e-c922-4257-aea0-242f9d9d4973&offset=0';
        this.cacheKey = 'getScore';

        const cachedData = localStorage.getItem(this.cacheKey);
        if (cachedData) {
            // Return cached data as an Observable
            return of(JSON.parse(cachedData));
          } else {
            // Fetch data from the API and cache it
            return this.http.get(this.apiUrl).pipe(
              tap((data) => {
                localStorage.setItem(this.cacheKey, JSON.stringify(data));
              }),
              catchError((error) => {
                console.error('Error fetching data', error);
                return of(null); // Return a safe fallback value
              })
            );
          }
        
        //return this.http.get('https://api.cricapi.com/v1/cricScore?apikey=0501ad1e-c922-4257-aea0-242f9d9d4973&offset=0');
    }
    getLiveScore()
    {
        this.apiUrl = 'https://api.cricapi.com/v1/currentMatches?apikey=0501ad1e-c922-4257-aea0-242f9d9d4973&offset=0';
        this.cacheKey = 'getLiveScore';

        const cachedData = localStorage.getItem(this.cacheKey);
        if (cachedData) {
            // Return cached data as an Observable
            return of(JSON.parse(cachedData));
          } else {
            // Fetch data from the API and cache it
            return this.http.get(this.apiUrl).pipe(
              tap((data) => {
                localStorage.setItem(this.cacheKey, JSON.stringify(data));
              }),
              catchError((error) => {
                console.error('Error fetching data', error);
                return of(null); // Return a safe fallback value
              })
            );
          }
    }
    getAllFlags()
    {
        this.apiUrl = 'https://cricketdata.org/how-to-use-cricket-data-api.aspx#api-countries-with-flags-2';
        this.cacheKey = 'getAllFlags';

        const cachedData = localStorage.getItem(this.cacheKey);
        if (cachedData) {
            // Return cached data as an Observable
            return of(JSON.parse(cachedData));
          } else {
            // Fetch data from the API and cache it
            return this.http.get(this.apiUrl).pipe(
              tap((data) => {
                localStorage.setItem(this.cacheKey, JSON.stringify(data));
              }),
              catchError((error) => {
                console.error('Error fetching data', error);
                return of(null); // Return a safe fallback value
              })
            );
          }
     }

    getAllCricketNews()
    {
        this.apiUrl = 'https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=25a22a02a98a4c7ebed31108d2bebb83';
        this.cacheKey = 'getAllCricketNews';

        const cachedData = localStorage.getItem(this.cacheKey);
        if (cachedData) {
            // Return cached data as an Observable
            return of(JSON.parse(cachedData));
          } else {
            // Fetch data from the API and cache it
            return this.http.get(this.apiUrl).pipe(
              tap((data) => {
                localStorage.setItem(this.cacheKey, JSON.stringify(data));
              }),
              catchError((error) => {
                console.error('Error fetching data', error);
                return of(null); // Return a safe fallback value
              })
            );
          }
    }
}
