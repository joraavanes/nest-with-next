import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { ViewService } from './view.service';

@Controller('/')
export class ViewController {
    constructor(
        private viewService: ViewService
    ) { }

    @Get("*")
    async static(@Req() req: Request, @Res({passthrough: true}) res: Response) {
        await this.viewService.handler(req, res);
        // handle(req, res);
    }
}
