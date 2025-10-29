import { Injectable } from '@nestjs/common'
import * as fs from 'fs'
import * as path from 'path'
import { parse } from 'dotenv'

@Injectable()
export class ConfigService {
    private readonly envConfig: { [key: string]: string };

    constructor() {
        try {
            const env = process.env.NODE_ENV || 'development';
            // Construir ruta absoluta desde la raíz del proyecto
            const envFilePath = path.join(process.cwd(), `.env.${env}`);
            
            console.log(`Buscando archivo de configuración: ${envFilePath}`);
            
            if (!fs.existsSync(envFilePath)) {
                console.error(`Error: El archivo .env.${env} no existe en ${envFilePath}`);
                process.exit(1);
            }
            
            this.envConfig = parse(fs.readFileSync(envFilePath, 'utf8'));
            console.log(`Variables de entorno cargadas correctamente desde .env.${env}`);
        } catch (error) {
            console.error('Error al cargar la configuración:', error);
            process.exit(1);
        }
    }
    get(key: string): string {
        return this.envConfig[key];
    }
}
