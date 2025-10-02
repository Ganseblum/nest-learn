import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('v1/api');
  await app.listen(process.env.PORT ?? 3000);
  console.log('🔍 module.hot 状态：', module.hot ? '存在' : 'undefined');

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose((): any => app.close());
  }
}
void bootstrap();
