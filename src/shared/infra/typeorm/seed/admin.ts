import { hash } from "bcrypt";
import { v4 as uuid } from "uuid";

import { connection as connect } from "@shared/infra/typeorm";

async function run() {
  const id = uuid();
  const password = await hash(process.env.ADMIN_PASS || "development", 8);
  const connection = await connect;
  await connection.query(`
    INSERT INTO users (id, name, email, password, driver_license, is_admin) 
    VALUES ('${id}', 'admin', 'admin@rentx.com.br', '${password}', 'XXXXXX', true)
  `);
  await connection.close();
}

run();
