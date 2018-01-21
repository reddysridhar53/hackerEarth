import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UtilityService{

    constructor ( private http: Http ) {}

    fetchData( params:any = {} ): Observable<any>{

        let headers = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions( { headers: headers } );
        if( params && params.url ){
            return this.http.get( params.url, options )
                .map( this.extractData )
                .catch( this.handleError );
        }
    }

    private extractData( res: Response ) {
	    let body = res.json();
	    return body;
	}

  	private handleError ( error: Response | any ) {

	    let errMsg: string;
	    if ( error instanceof Response ) {
	      const body = error.json() || '';
	      const err = body.error || JSON.stringify( body );
	      errMsg = `${err}`;
	    } else {
	      errMsg = error.message ? error.message : error.toString();
	    }
	    return Observable.throw(errMsg);
  	}
}
