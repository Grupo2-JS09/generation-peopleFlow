import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cadastro } from './entities/cadastro.entity';
import { CadastroService } from './services/cadastro.service';

@Module({
  imports: [TypeOrmModule.forFeature([Cadastro])],
  providers: [CadastroService],
  controllers: [],
  exports: [],
})
export class CadastroModule {}
