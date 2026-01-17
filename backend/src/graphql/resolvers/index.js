import { getTopRentedFilmsService } from "../../services/filmService.js";
import { getRevenueByCategoryService } from "../../services/revenueService.js";
import { getTopCustomersService } from "../../services/customerService.js";
import { getKeyMetricsService } from "../../services/kpiService.js";

import { getRecentTransactionsService } from "../../services/transactionService.js";

const resolvers = {
  hello: () => "GraphQL + Sequelize + ES Modules working ",

  getTopRentedFilms: async ({ storeId, startDate, endDate }) => {
    return await getTopRentedFilmsService(storeId, startDate, endDate);
  },

  getRevenueByCategory: async ({ storeId, startDate, endDate }) => {
    return await getRevenueByCategoryService(storeId, startDate, endDate);
  },
  getTopCustomers: async ({ storeId, startDate, endDate }) => {
  return await getTopCustomersService(storeId, startDate, endDate);
},
getKeyMetrics: async ({ storeId, startDate, endDate }) => {
  return await getKeyMetricsService(storeId, startDate, endDate);
},
getRecentTransactions: async ({ storeId, startDate, endDate }) => {
  return await getRecentTransactionsService(storeId, startDate, endDate);
},


};

export default resolvers;
