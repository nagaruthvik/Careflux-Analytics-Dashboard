import sequelize from "../config/database.js";

export async function getRevenueByCategoryService(storeId, startDate, endDate) {
  let conditions = [];

  if (storeId) conditions.push(`i.store_id = ${storeId}`);
  if (startDate && endDate)
    conditions.push(`p.payment_date BETWEEN '${startDate}' AND '${endDate}'`);

  const whereClause =
    conditions.length > 0 ? "WHERE " + conditions.join(" AND ") : "";

  const [results] = await sequelize.query(`
    SELECT c.name AS category, SUM(p.amount) AS totalRevenue
    FROM payment p
    JOIN rental r ON p.rental_id = r.rental_id
    JOIN inventory i ON r.inventory_id = i.inventory_id
    JOIN film f ON i.film_id = f.film_id
    JOIN film_category fc ON f.film_id = fc.film_id
    JOIN category c ON fc.category_id = c.category_id
    ${whereClause}
    GROUP BY c.category_id
    ORDER BY totalRevenue DESC;
  `);

  return results;
}
