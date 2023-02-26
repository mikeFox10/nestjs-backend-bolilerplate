import {MigrationInterface, QueryRunner} from "typeorm";
// import { TextService } from '../../src/shared/services/text.service';
import { UserEntity } from '../../src/modules/user/user.entity';
import { UtilsProvider } from '../../src/providers/utils.provider';

export class users1629601351201 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

   	const rows = [
	      {
	        email: 'adminbackend@yopmail.com',
		    firstName: 'Downey',
		 	lastName: 'Jr',
	        role: 'ADMIN',
		    phone: '78978978',
			avatar: 'None',
		    fullName: 'Robert',
	      }
      ]
     const defaultPass = await UtilsProvider.generateHash('admin');
     const users = rows.map((item) => {
      const u = new UserEntity();
      u.id = UtilsProvider.textToUuid(item.email);
      u.email = item.email;
      u.password = defaultPass;
      u.createdAt = new Date();
      return u;
    });
    await queryRunner.manager.save(users);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
