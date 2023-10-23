import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
 
@Injectable({})
export class AuthService {

    constructor (private prisma: PrismaService) {}
    signin(msg: string){
        return {msg: `I am signed in -> ${msg}`};
    }
    signup(msg: string){
        return {msg: `I am signup up ${msg}`};
    }
    like (msg:string) {
        return {msg: `${msg} Like this!!`};
    }
}