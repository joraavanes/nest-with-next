import { Controller, Get } from '@nestjs/common';

@Controller('api')
export class ApiController {
    @Get('')
    index(){
        return 'This nest server';
    }
}
