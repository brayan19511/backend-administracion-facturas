import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class BasicConsultaService extends PrismaClient implements OnModuleInit {
    async onModuleInit() {
      await this.$connect();
    }

    async hellow(){
      
      return this.aREA.findMany()  
      
    }


}
