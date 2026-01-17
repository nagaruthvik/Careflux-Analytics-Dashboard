import { buildSchema } from "graphql";

const schema = buildSchema(`
  type FilmStat {
    title: String
    rentalCount: Int
  }
  type CustomerStat {
  customerId: Int
  fullName: String
  totalRentals: Int
  totalSpent: Float
}


  type RevenueCategory {
    category: String
    totalRevenue: Float
  }
    type KeyMetrics {
  totalRevenue: Float
  activeRentals: Int
}
  type Transaction {
  name: String
  title: String
  amount: Float
  date: String
}



  type Query {
    hello: String

    getTopRentedFilms(
      storeId: Int,
      startDate: String,
      endDate: String
    ): [FilmStat]

    getRevenueByCategory(
      storeId: Int,
      startDate: String,
      endDate: String
    ): [RevenueCategory]

    getTopCustomers(
  storeId: Int,
  startDate: String,
  endDate: String
): [CustomerStat]

getKeyMetrics(
  storeId: Int,
  startDate: String,
  endDate: String
): KeyMetrics

getRecentTransactions(
  storeId: Int,
  startDate: String,
  endDate: String
): [Transaction]



  }
`);

export default schema;
