import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { parse } from 'url';
import { ViewService } from './view.service';

@Controller('/')
export class ViewController {
    constructor(
        private viewService: ViewService
    ) { }

    async handle(req: Request, res: Response, url: string) {
        const parsedUrl = parse(req.url, true);

        await this.viewService
            .getNextServer()
            .render(
                req,
                res,
                parsedUrl.pathname
            );
    }

    @Get("*")
    async home(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
        await this.handle(
            req,
            res,
            req.url
        );
    }
}
