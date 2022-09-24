// import { Injectable, OnModuleInit } from '@nestjs/common';
// import next from 'next';
// import NextServer from 'next/dist/server/next-server';

// @Injectable()
// export class ViewService implements OnModuleInit {
//     constructor(
//         private server: NextServer
//     ) { }

//     async onModuleInit(): Promise<void> {
//         try {
//             this.server = next({ dev: true, dir: './src/client', port: 3001,hostname: 'localhost' });
//             await this.server.prepare();
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     getNextServer(): NextServer {
//         return this.server;
//     }
// }

import { Injectable, OnModuleInit } from '@nestjs/common';
import createServer from 'next';
import { NextServer } from 'next/dist/server/next';
import { Request, Response } from 'express';

@Injectable()
export class ViewService implements OnModuleInit {
  private server: NextServer;

  constructor() {}

  async onModuleInit(): Promise<void> {
    try {
      this.server = createServer({
        dev: true,
        dir: './src/client',
      });
      await this.server.prepare();
    } catch (error) {
      console.error(error);
    }
  }

  handler(req: Request, res: Response) {
    return this.server.getRequestHandler()(req, res);
  }
}