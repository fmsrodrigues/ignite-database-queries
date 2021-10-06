import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateOrderGames1633558973717 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: 'orderGames',
        columns: [
          { name: 'id', type: 'uuid', isPrimary: true },
          { name: 'order_id', type: 'uuid' },
          { name: 'game_id', type: 'uuid' },
          { name: 'created_at', type: 'timestamptz', default: 'now()' },
          { name: 'updated_at', type: 'timestamptz', default: 'now()' },
        ],
        foreignKeys: [{
          name: 'gamesOrders',
          referencedTableName: 'orders',
          referencedColumnNames: ['id'],
          columnNames: ['order_id'],
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        }, {
          name: 'ordersGames',
          referencedTableName: 'games',
          referencedColumnNames: ['id'],
          columnNames: ['game_id'],
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        }]
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('orderGames');
    }

}
