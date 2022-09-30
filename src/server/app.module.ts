import { Module } from '@nestjs/common';
import { ApiModule } from './modules/api/api.module';
import ApiService from './modules/api/api.service';
import { ViewModule } from './modules/view/view.module';

@Module({
  imports: [ApiModule, ViewModule],
  controllers: [],
  providers: [ApiService],
})
export class AppModule {}
