export class User{
    userName : string | undefined;
    password : string | undefined;
    email : string | undefined;
    phone : number | undefined;

    constructor(userName:string , password:string , email:string , phone:number ){
        this.userName=userName;
        this.password=password;
        this.email=email;
        this.phone=phone;
    }
}