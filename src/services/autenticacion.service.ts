import {injectable, /* inject, */ BindingScope} from '@loopback/core';
const generador= require("password-generator");
const cryptoJS = require("crypto-js");

@injectable({scope: BindingScope.TRANSIENT})
export class AutenticacionService {
  constructor(/* Add @inject to inject parameters */) {}

  /*
   * Add service methods here
   */
  GenerarClave(){
    let password = generador(10, false);
    return password;
  }

  Encriptar(password:string){
    let passCifrado = cryptoJS.MD5(password).toString();
    return passCifrado;
  }
}
