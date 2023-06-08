import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as XLSX from 'xlsx';

@Controller()
export class ExcelController {
  constructor(
    @InjectModel('ExcelData') private readonly excelDataModel: Model<any>,
  ) {}

  @Post('/upload-excel')
  @UseInterceptors(FileInterceptor('file'))
  async uploadExcel(@UploadedFile() file: Express.Multer.File) {
    const workbook = XLSX.readFile(file.path);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const excelData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

    // Map the data to the Mongoose schema
    const mappedData = excelData.map((row: any[]) => ({
      // Map the columns to the schema properties
      property1: row[0],
      property2: row[1],
      // Add more properties as needed
    }));

    // Save the data to MongoDB
    await this.excelDataModel.create(mappedData);

    return { message: 'Excel data uploaded successfully' };
  }
}
