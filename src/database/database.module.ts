import { Module } from '@nestjs/common';
import { databaseProvider } from './database.providers';
import { ConfigService } from '../config/config.service';
import { ConfigModule } from '../config/config.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        ConfigModule,
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (config: ConfigService) => ({
                type: 'postgres',
                host: config.get('HOST'),
                port: +config.get('PORT_BD'),
                username: config.get('USER') || config.get('DB_USERNAME'),
                password: config.get('PASSWORD') || config.get('PASSWORD_BD'),
                database: config.get('DATABASE'),
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],
            }),
        }),
    ],
    providers: [...databaseProvider],
    exports: [...databaseProvider],
})
export class DatabaseModule {}
