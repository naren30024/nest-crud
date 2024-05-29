import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WalletAddress } from './wallet-address.entity';
import { CreateWalletAddressDto } from './dto/wallet-address.dto';

@Injectable()
export class WalletAddressService {
  constructor(
    @InjectRepository(WalletAddress)
    private walletAddressRepository: Repository<WalletAddress>,
  ) {}

  create(createWalletAddressDto: CreateWalletAddressDto): Promise<WalletAddress> {
    const walletAddress = this.walletAddressRepository.create(createWalletAddressDto);
    return this.walletAddressRepository.save(walletAddress);
  }

  findAll(): Promise<WalletAddress[]> {
    return this.walletAddressRepository.find({ relations: ['user'] });
  }

  findOne(id: number): Promise<WalletAddress> {
    return this.walletAddressRepository.findOne({ where: { id }, relations: ['user'] });
  }


  async remove(id: number): Promise<void> {
    await this.walletAddressRepository.delete(id);
  }
}
