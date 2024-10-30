import { Controller, Get, Put, Param, Body, Query, UseGuards, NotFoundException, InternalServerErrorException,} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { CreateUserDto } from './create-user.dto';
import { AuthGuard } from '../guards/auth.guard';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from 'src/roles.enum';
import { RolesGuard } from 'src/guards/roles.guard';
import { ApiBearerAuth, ApiTags, ApiOperation } from '@nestjs/swagger';
import { UpdateUserDto } from './update-user.dto';
import internal from 'stream';

@ApiTags('USERS')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiBearerAuth()
  @ApiOperation({ 
    summary: 'Get all users',
    description: 'Returns a list of all users with pagination.'    
  })
  @Get()
  @Roles(Role.Admin)
  @UseGuards(AuthGuard, RolesGuard)
  async findAll(@Query('page') page: number = 1, @Query('limit') limit: number = 5): Promise<Omit<User, 'password'>[]> {
    const users = await this.usersService.findAll(page, limit);
    return users.map(user => {
      const { password, ...rest } = user;
      return rest;
    });
  }

  @ApiBearerAuth()
  @ApiOperation({ 
    summary: 'Get user by ID',
    description: 'Returns a specific user by their ID, including orders if they have any.'    
  })
  @Get(':id')
  @Roles(Role.Admin)
  @UseGuards(AuthGuard, RolesGuard)
  async findById(@Param('id') id: string): Promise<Omit<User, 'password'>> {
    const user = await this.usersService.findUserWithOrders(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const { password, ...rest } = user;
    return rest;
  }

  @ApiBearerAuth()
  @ApiOperation({ 
    summary: 'Create a new user',
    description: 'Creates a new user and returns the data of the created user.'    
  })
  //@Post()
  async create(@Body() userDto: CreateUserDto): Promise<Partial<User>> {
    console.log('Creating user with data:', userDto);
    const user = await this.usersService.create(userDto);
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      phone: user.phone,
      country: user.country,
      city: user.city,
    };
  }



  
  @ApiBearerAuth()
  @ApiOperation({ 
    summary: 'Update a user',
    description: 'Updates an existing user and returns the data of the updated user.'    
  })
  @Put(':id')
  @Roles(Role.Admin)
  @UseGuards(AuthGuard, RolesGuard)
  async update(@Param('id') id: string, @Body() userDto: UpdateUserDto): Promise<Partial<User>> {
    const updatedUser = await this.usersService.update(id, userDto);
    const { id: _, password, isAdmin, ...rest } = updatedUser;
    return rest;
  }


  //________________________________________________________________________________________________



  @ApiBearerAuth()
  @ApiOperation({ 
    summary: 'Update a user',
    description: 'Updates an existing user and returns the data of the updated user.'    
  })
  @Put('updateUserRole/:id')
  @Roles(Role.Admin)
  @UseGuards(AuthGuard, RolesGuard)
  async updateUserRole(@Param('id') id: string, @Body() UpdateUserDto: UpdateUserDto): Promise<Partial<User>> {
   try{
    const UpdateUser = await this.usersService.updateRole(id, UpdateUserDto.isAdmin);
    const { password, ...rest} = UpdateUser;
      return rest;
   } catch(error){
    throw new InternalServerErrorException(error.message)
   }
  
  }

  





}
