import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Cadastro } from './entities/cadastro.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cadastro])],
  providers: [],
  controllers: [],
  exports: [],
})
export class CadastroModule {}
