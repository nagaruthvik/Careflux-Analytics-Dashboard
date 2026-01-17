import sequelize from "../config/database.js";

export async function getKeyMetricsService(storeId, startDate, endDate) {
  let conditions = [];
  let rentalConditions = [];

  if (storeId) {
    conditions.push(`i.store_id = ${storeId}`);
    rentalConditions.push(`i.store_id = ${storeId}`);
  }

  if (startDate && endDate) {
    conditions.push(`p.payment_date BETWEEN '${startDate}' AND '${endDate}'`);
    rentalConditions.push(`r.rental_date BETWEEN '${startDate}' AND '${endDate}'`);
  }

  const wherePayments =
    conditions.length > 0 ? "WHERE " + conditions.join(" AND ") : "";

  const whereRentals =
    rentalConditions.length > 0 ? "WHERE " + rentalConditions.join(" AND ") : "";

  
  const [[revenueResult]] = await sequelize.query(`
    SELECT SUM(p.amount) AS totalRevenue
    FROM payment p
    JOIN rental r ON p.rental_id = r.rental_id
    JOIN inventory i ON r.inventory_id = i.inventory_id
    ${wherePayments};
  `);

  
  const [[activeResult]] = await sequelize.query(`
    SELECT COUNT(r.rental_id) AS activeRentals
    FROM rental r
    JOIN inventory i ON r.inventory_id = i.inventory_id
    ${whereRentals}
    AND r.return_date IS NULL;
  `);

  return {
    totalRevenue: revenueResult.totalRevenue || 0,
    activeRentals: activeResult.activeRentals || 0
  };
}
