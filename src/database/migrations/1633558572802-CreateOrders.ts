import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateOrders1633558572802 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'orders',
      columns: [
        { name: 'id', type: 'uuid', isPrimary: true },
        { name: 'buyer_id', type: 'uuid' },
        { name: 'order_number', type: 'integer', generationStrategy: 'increment', isGenerated: true, isUnique: true },
        { name: 'created_at', type: 'timestamptz', default: 'now()' },
        { name: 'updated_at', type: 'timestamptz', default: 'now()' },
      ],
      foreignKeys: [{
        name: 'orderUsers',
        referencedTableName: 'users',
        referencedColumnNames: ['id'],
        columnNames: ['buyer_id'],
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('orders');
  }

}
