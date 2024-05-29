import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { WalletAddressService } from './wallet-address.service';
import { CreateWalletAddressDto } from './dto/wallet-address.dto';

@Controller('wallet-address')
export class WalletAddressController {
  constructor(private readonly walletAddressService: WalletAddressService) {}

  @Post()
  create(@Body() createWalletAddressDto: CreateWalletAddressDto) {
    return this.walletAddressService.create(createWalletAddressDto);
  }

  @Get()
  findAll() {
    return this.walletAddressService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.walletAddressService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.walletAddressService.remove(+id);
  }
}

