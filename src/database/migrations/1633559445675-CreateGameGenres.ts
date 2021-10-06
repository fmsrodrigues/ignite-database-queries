import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateGameGenres1633559445675 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'gameGenres',
      columns: [
        { name: 'id', type: 'uuid', isPrimary: true },
        { name: 'game_id', type: 'uuid' },
        { name: 'genre_id', type: 'uuid' },
        { name: 'created_at', type: 'timestamptz', default: 'now()' },
        { name: 'updated_at', type: 'timestamptz', default: 'now()' },
      ],
      foreignKeys: [{
        name: 'genresGames',
        referencedTableName: 'games',
        referencedColumnNames: ['id'],
        columnNames: ['game_id'],
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }, {
        name: 'gamessGenres',
        referencedTableName: 'genres',
        referencedColumnNames: ['id'],
        columnNames: ['genre_id'],
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('gameGenres');
  }

}
