import { executeQuery } from '../config/db';

export default (id) => {
    let sql = `
    SELECT p.*, c.name, u.name FROM prosthetics p
    JOIN users u on u.id = p.userid
    JOIN categories c on c.id = p.category_id
    WHERE p.category_id = ${id}
    `;
    return executeQuery(sql);
};