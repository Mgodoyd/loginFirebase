import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuariModel } from '../models/usuario.models';
import { map } from 'rxjs/operators';
import { AuthResponse } from '../models/authResponse';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty';
  //private url='https://identitytoolkit.googleapis.com/v1/accounts';
  //private ApiKey ='AIzaSyDRt0PX4POJWKzTw_7MZHOcVa14nZOx_nM';
  private ApiKey = 'AIzaSyDKMMoz1_xYdMLxd7v_Yjc8SVD2-r0cqFU';
  public userToken: string;
  public userExpiresIn: number;
  //Endpoint
  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
  //https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=<API KEY>.

  constructor(private http: HttpClient) {
    this.userToken = '';
    this.userExpiresIn = 0;
    this.leerToken();
  }

  login(Usuario: UsuariModel) {
    const authData = {
      ...Usuario,
      returnSecureToken: true,
    };
    /*
      return this.http.post(
        `${ this.url }/verifyPassword?key=${this.ApiKey}`,
        authData
      ).pipe(
          map( resp => {
            this.guardarToken( resp['idToken'] );
            return resp;
          })        
      );
      
*/
    return this.http
      .post<AuthResponse>(
        `${this.url}/verifyPassword?key=${this.ApiKey}`,
        authData
      )
      .pipe(
        map((resp) => {
          console.log(resp);

          if (resp && resp.idToken) {
            const token = resp.idToken;
            const expires = resp.expiresIn;
            // console.log("Token:", token);
            // console.log("Expires:", expires);
            this.guardarToken(token, expires);
          }

          return resp;
        })
      );
  }

  private guardarToken(idToken: string, expirtesIn: number) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);
    localStorage.setItem('expiresIn', expirtesIn.toString());
  }
  leerToken() {
    const get_token = localStorage.getItem('token');
    const get_expiresIn = localStorage.getItem('expiresIn');

    if (get_token && get_expiresIn) {
      this.userToken = get_token;
      this.userExpiresIn = parseInt(get_expiresIn);
      // console.log("Token:", this.userToken);
      // console.log("Expires:", this.userExpiresIn);
    } else {
      this.userToken = '';
      this.userExpiresIn = 0;
    }
  
    return this.userToken;
  }
  
}
