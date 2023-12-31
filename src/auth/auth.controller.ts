import { Body, Controller, Get, Post, Req } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto/auth.dto";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('signup')
    signup(@Body() dto: AuthDto) {
        console.log({
            dto,
        }); 
        return this.authService.signup("firsName: el mehdi, lastName: bouabbadi");
    }

    @Post('signin')
    signin() {
        return this.authService.signin("el mehdi, bouabbadi");
    }

    @Get('like')
    like () {
        return "hello word"
    }
}
