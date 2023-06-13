import { registerAs } from '@nestjs/config';

export default registerAs('db', () => ({
    type: 'mysql',
    entities: ['dist/**/*.entity.js'], // busca las entities pero en js una vez compilado
    synchronize: true, // Crea la tabla si no la encuentra
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_DATABASE || 'espacios'
}));