import { Module } from '@nestjs/common';
import { ApiModule } from './modules/api/api.module';
import { ViewModule } from './modules/view/view.module';

@Module({
  imports: [ViewModule, ApiModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
