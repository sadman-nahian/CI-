import sql from './configs/db.js';

const test = async () => {
  try {
    const response = await sql`select * from creations`;
    console.log('db connected table data are ');
    console.log(response);
  } catch (e) {
    console.log(`not connected ${e}`);
  }
};
test();
