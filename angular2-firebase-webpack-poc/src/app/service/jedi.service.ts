import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Rx";
import { Jedi } from "./../entity/jedi";

const FIREBASE_URL = '<PUT HERE>';

@Injectable()
export class JediService {
	constructor(private http: Http) {}

	save(jedi: Jedi) {
  	const body = JSON.stringify(jedi);
  	const headers = new Headers();
  	headers.append('Content-Type', 'application/json');
  	return this.http.post(FIREBASE_URL + '.json', body, {
    		headers: headers
  	})
  	  .map((data: Response) => data.json())
    	.catch(this.handleError);
	}

	getAll() {
  	return this.http.get(FIREBASE_URL + '.json')
    	.map((data: Response) => data.json())
    	.catch(this.handleError);
	}

	update(jedi: Jedi) {
  	const headers = new Headers();
  	const randomName = Math.random().toString(36).substring(2, 15);
  	headers.append('Content-Type', 'application/json');
  	return this.http.put(FIREBASE_URL + jedi.id + '.json', {
    		status:jedi.status, name:randomName
  	}, {
    		headers: headers
  	})
    	.map((data: Response) => data.json())
    	.catch(this.handleError);
	}

	delete(id: string) {
  	return this.http.delete(FIREBASE_URL + id + '.json')
    	.map((data: Response) => data.json())
    	.catch(this.handleError);
	}

	private handleError (error: any) {
  	console.log(error);
  	return Observable.throw(error.json());
	}
}