import { Controller, Post, Body, UsePipes, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/signin.dto';
import { CreateUserDto } from '../users/create-user.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ValidationPipe } from '../pipes/validation.pipe';

@ApiTags('AUTH')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ 
    summary: 'Login',
    description: 'Handles user login. Returns the authenticated user.'    
  })
  @Post('signin')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  async signIn(@Body() signInDto: SignInDto) {
    const foundUser = await this.authService.signin(signInDto);
    return foundUser;
  }




  @ApiOperation({ 
    summary: 'Register user',
    description: 'Handles the registration of a new user. Returns the registered user without the password.'    
  })
  @Post('signup')
  async signUp(@Body() userData: CreateUserDto) {
    const userWithoutPassword = await this.authService.signup(userData);
    const logStatus = await this.authService.signin({
      email: userData.email,
      password: userData.password,
    });
    return {
      user: {
        id: userWithoutPassword.id,
        email: userWithoutPassword.email,
        name: userWithoutPassword.name,
        address: userWithoutPassword.address,
        phone: userWithoutPassword.phone,
        country: userWithoutPassword.country,
        city: userWithoutPassword.city,
      },
    };
  }
}
