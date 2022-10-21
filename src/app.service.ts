import { Injectable, Inject } from '@nestjs/common';
import { ConfigService, ConfigType } from '@nestjs/config';
import config from './config';

@Injectable()
export class AppService {

  constructor(
    @Inject('API_KEY') private apiKey: string,
    @Inject('TASKS') private tasks: any[],
    private configService: ConfigService,
    @Inject(config.KEY) private configServiceType: ConfigType<typeof config>,
  ) {}

  getHello(): any[] {
    // console.log(this.tasks)
    // return `Hello World! ${this.apiKey}`;
    const apiKey = this.configService.get<string>('API_KEY');
    const db = this.configService.get('BATABASE_NAME');
    console.log(apiKey,db);
    console.log(this.apiKey);

    const apiKeyType = this.configServiceType.apiKey;
    console.log(apiKeyType)

    return this.tasks;
  }
}
