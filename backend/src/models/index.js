import Film from "./Film.js";
import Inventory from "./Inventory.js";
import Rental from "./Rental.js";


Film.hasMany(Inventory, { foreignKey: "film_id" });
Inventory.belongsTo(Film, { foreignKey: "film_id" });

Inventory.hasMany(Rental, { foreignKey: "inventory_id" });
Rental.belongsTo(Inventory, { foreignKey: "inventory_id" });

export { Film, Inventory, Rental };
