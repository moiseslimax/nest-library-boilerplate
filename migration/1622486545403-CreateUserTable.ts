import { MigrationInterface, QueryRunner, Table } from 'typeorm';
/* tslint:disable */
export class userTable1617036632958 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'user',
        columns: [
          {
            type: 'bigint',
            name: 'id',
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            type: 'varchar',
            length: '100',
            name: 'name',
          },
          {
            type: 'varchar',
            length: '100',
            name: 'username',
          },
          {
            type: 'varchar',
            name: 'password',
          },
          {
            type: 'varchar',
            isUnique: true,
            length: '100',
            name: 'password',
          },
          {
            type: 'varchar',
            length: '100',
            name: 'emailAddress',
          },
          {
            type: 'datetime',
            name: 'createdAt',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            type: 'datetime',
            name: 'updatedAt',
            default: 'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('user');
  }
}
