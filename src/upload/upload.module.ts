import { Module } from '@nestjs/common';
import { UploadService } from './upload.service';
import { ExcelController } from './upload.controller';

@Module({
  controllers: [ExcelController],
  providers: [UploadService],
})
export class UploadModule {}
