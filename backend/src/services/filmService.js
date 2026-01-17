import sequelize from "../config/database.js";

export async function getTopRentedFilmsService(storeId, startDate, endDate) {
  let conditions = [];

  if (storeId) conditions.push(`i.store_id = ${storeId}`);
  if (startDate && endDate)
    conditions.push(`r.rental_date BETWEEN '${startDate}' AND '${endDate}'`);

  const whereClause =
    conditions.length > 0 ? "WHERE " + conditions.join(" AND ") : "";

  const [results] = await sequelize.query(`
    SELECT f.title, COUNT(r.rental_id) AS rentalCount
    FROM film f
    JOIN inventory i ON f.film_id = i.film_id
    JOIN rental r ON i.inventory_id = r.inventory_id
    ${whereClause}
    GROUP BY f.film_id
    ORDER BY rentalCount DESC
    LIMIT 5;
  `);

  return results;
}
