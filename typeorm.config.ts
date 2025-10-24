import {config} from 'dotenv';
import {DataSource} from 'typeorm';

const env=process.env.NODE_ENV||'development';

config({
    override: true,
    path: `.env.${env}`,
    debug: true
})

export default new DataSource({
    type: 'postgres',
    host: process.env.HOST || 'localhost',
    port: +(process.env.PORT_BD || 5432),
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.PASSWORD_BD || '12345',
    database: process.env.DATABASE || 'BACKEND.AN',
    entities: ['src/**/*.entity.ts'],
    migrations: ['src/database/migrations/*.ts'],

});