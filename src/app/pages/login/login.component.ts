import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuariModel } from 'src/app/models/usuario.models';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  usuario:UsuariModel = new UsuariModel();
 
  /**
   *
   */
  constructor(private auth:AuthService) {
    

  }

  ngOnInit(){ 
    this.usuario = new UsuariModel();
  };

  login (from:NgForm){
    if(from.invalid){return;}
    console.log(this.usuario); 
    this.auth.login(this.usuario).subscribe(resp =>{
      console.log(resp);
       
    }, (err)=>{
    console.log(err.error.error.message);
    
    });
  
  }


}
