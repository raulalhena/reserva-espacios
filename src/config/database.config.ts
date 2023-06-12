import { registerAs } from '@nestjs/config';

export default registerAs('db', () => ({
    type: 'mysql',
    entities: ['dist/**/*.entity.js'], // busca las entities pero en js una vez compilado
    synchronize: true, // Crea la tabla si no la encuentra
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'espacios'
}))