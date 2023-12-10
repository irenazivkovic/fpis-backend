import { Injectable } from '@nestjs/common';
import { ArtikalRepository } from './artikal.repository';

@Injectable()
export class ArtikalService {
  constructor(private readonly repository: ArtikalRepository) {}

  public async find(katalogID: number) {
    return await this.repository.find(katalogID);
  }
}
