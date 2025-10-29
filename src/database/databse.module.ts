import { Module } from '@nestjs/common';
import { databaseProvider } from './database.providers';
import { ConfigService } from '../config/config.service';
import { ConfigModule } from '../config/config.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
                useFactory: (config: ConfigService) => {
                    const host = config.get('HOST') || 'localhost';
                    const port = +(config.get('PORT_BD') || config.get('PORT') || 5432);
                    const username = config.get('DB_USERNAME') || config.get('USERNAME') || config.get('USER') || process.env.USER || 'postgres';
                    const password = config.get('PASSWORD_BD') || config.get('PASSWORD') || config.get('PASS') || '12345';
                    const database = (config.get('DATABASE') || 'BACKEND.AN').replace(/(^['"]|['"]$)/g, '');
                    console.log('TypeOrm config ->', { host, port, username, database });
                    return {
                        type: 'postgres',
                        host,
                        port,
                        username,
                        password,
                        database,
                        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                    };
                },
        }),
    ],
    providers: [...databaseProvider],
    exports: [...databaseProvider],
})
export class DatabseModule {

}
