using System.Collections.Generic;
using DutchTreat2.Data.Entities;

namespace DutchTreat2.Data{
    public interface IDutchRepository {
        IEnumerable<Product> GetAllProducts();

        IEnumerable<Product> GetProductsByCategory(string category);
        bool SaveAll();
        IEnumerable<Order> GetAllOrders(bool includeItems);
        Order GetOrderById(string userName, int id);
        void AddEntity(object model);
        IEnumerable<Order> GetAllOrdersByUser(string username, bool includeItems);
    }
}