import sequelize from "../config/database.js";

export async function getTopCustomersService(storeId, startDate, endDate) {
  let conditions = [];

  if (storeId) conditions.push(`i.store_id = ${storeId}`);
  if (startDate && endDate)
    conditions.push(`p.payment_date BETWEEN '${startDate}' AND '${endDate}'`);

  const whereClause =
    conditions.length > 0 ? "WHERE " + conditions.join(" AND ") : "";

  const [results] = await sequelize.query(`
    SELECT 
      c.customer_id AS customerId,
      CONCAT(c.first_name, ' ', c.last_name) AS fullName,
      COUNT(r.rental_id) AS totalRentals,
      SUM(p.amount) AS totalSpent
    FROM customer c
    JOIN rental r ON c.customer_id = r.customer_id
    JOIN payment p ON r.rental_id = p.rental_id
    JOIN inventory i ON r.inventory_id = i.inventory_id
    ${whereClause}
    GROUP BY c.customer_id
    ORDER BY totalSpent DESC
    LIMIT 10;
  `);

  return results;
}
