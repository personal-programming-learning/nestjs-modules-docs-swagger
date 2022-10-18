import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
  usersList: any = [
    {
      id: 0,
      name: 'Ludwing Rivera Amador',
      age: 33,
    },
    {
      id: 1,
      name: 'Jessica Paolsa Sandoval',
      age: 29,
    },
    {
      id: 2,
      name: 'Kevin Rivera Sandoval',
      age: 8,
    },
  ];

  @Get()
  getUsers(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    // return `Users: Limit => ${limit}, offset => ${offset}`;
    return { data: this.usersList, limit, offset };
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    return `User id ${id}`;
  }
}
