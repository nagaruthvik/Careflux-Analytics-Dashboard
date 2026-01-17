import sequelize from "../config/database.js";

export async function getRecentTransactionsService(storeId, startDate, endDate) {
  let conditions = [];

  if (storeId) conditions.push(`i.store_id = ${storeId}`);
  if (startDate && endDate)
    conditions.push(`p.payment_date BETWEEN '${startDate}' AND '${endDate}'`);

  const whereClause =
    conditions.length > 0 ? "WHERE " + conditions.join(" AND ") : "";

  const [results] = await sequelize.query(`
    SELECT 
      CONCAT(c.first_name, ' ', c.last_name) AS name,
      f.title AS title,
      p.amount AS amount,
      p.payment_date AS date
    FROM payment p
    JOIN rental r ON p.rental_id = r.rental_id
    JOIN inventory i ON r.inventory_id = i.inventory_id
    JOIN film f ON i.film_id = f.film_id
    JOIN customer c ON r.customer_id = c.customer_id
    ${whereClause}
    ORDER BY p.payment_date DESC
    LIMIT 15;
  `);

  return results;
}
