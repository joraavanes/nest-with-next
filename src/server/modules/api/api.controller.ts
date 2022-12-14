import { Controller, Get } from '@nestjs/common';

@Controller('api')
export class ApiController {
    @Get('')
    index(){
        return 'This nest server';
    }

    @Get('/items')
    items(){
        return [{
            id: 1,
            title: 'prod1',
            price: 12.99
        },{
            id: 2,
            title: 'prod2',
            price: 12.99
        },{
            id: 3,
            title: 'prod3',
            price: 12.99
        },{
            id: 4,
            title: 'prod4',
            price: 12.99
        },{
            id: 5,
            title: 'prod5',
            price: 12.99
        },]
    }
}
