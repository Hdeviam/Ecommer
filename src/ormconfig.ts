import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: +process.env.DB_PORT || 5432,
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || '1234',
  database: process.env.DB_NAME || 'ecommerce',
  entities: [`dist/**/*.entity{.ts,.js}`],
  migrations: ['dist/migrations/*{.ts,.js}'],
  synchronize: true,
  dropSchema: false,
  logging: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log('Base de datos conectada con éxito!');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });
