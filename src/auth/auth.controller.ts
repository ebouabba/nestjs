import { Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('signup')
    signup() {
        return this.authService.signup("firsName: el mehdi, lastName: bouabbadi");
    }

    @Post('signin')
    signin() {
        return this.authService.signin("el mehdi, bouabbadi");
    }

    @Get('like')
    like () {
        return this.authService.like('ebouabba');
    }
}
