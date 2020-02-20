import { Injectable } from '@nestjs/common';
import { Prisma } from './client/generated/prisma-client';

@Injectable()
export class PrismaService {
  client: Prisma;

  constructor() {
    this.client = new Prisma();
  }
}