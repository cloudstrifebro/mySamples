using System;
using System.Collections.Generic;
using System.Linq;
using DutchTreat2.Data.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace DutchTreat2.Data{
    public class DutchRepository : IDutchRepository{
        private readonly DutchContext _context;
        private readonly ILogger<DutchRepository> _logger;

        public DutchRepository(DutchContext context, ILogger<DutchRepository> logger)
        {
            _context = context;
            _logger = logger;

        }

        public void AddEntity(object model)
        {
            _context.Add(model);
        }

        public IEnumerable<Order> GetAllOrders(bool includeItems)
        {
            if(includeItems){
                return _context.Orders
                .Include(o => o.Items)
                .ThenInclude(i => i.Product)
                .OrderBy(p => p.OrderNumber)
                .ToList();
            }
            else{
                return _context.Orders
                .ToList();
            }
        }

        public IEnumerable<Order> GetAllOrdersByUser(string username, bool includeItems)
        {
            if (includeItems)
            {
                return _context.Orders
                        .Where(o => o.User.UserName == username)
                        .Include(o => o.Items)
                        .ThenInclude(i => i.Product)
                        .ToList();
            }
            else
            {
                return _context.Orders
                    .Where(o => o.User.UserName == username)
                    .ToList();
            }
        }

        public IEnumerable<Product> GetAllProducts(){
            // _logger.LogInformation("Get all products was called.");
            try{
                return _context.Products
                .OrderBy(p => p.Title)
                .ToList();
            }
             catch(Exception ex){
                _logger.LogInformation($"Failed to get all products: {ex}");
                return null;
            }
        }

        public Order GetOrderById(string username, int id)
        {
                 try{
                return _context.Orders
                .Include(o => o.Items)
                .ThenInclude(i => i.Product)
                .Where(o => o.Id == id && o.User.UserName == username)
                .FirstOrDefault();
            }
             catch(Exception ex){
                _logger.LogInformation($"Failed to get all orders: {ex}");
                return null;
            }
        }

        public IEnumerable<Product> GetProductsByCategory(string category){
            return _context.Products
                .Where(p => p.Category == category)
                .ToList();
        }

        public bool SaveAll(){
            return _context.SaveChanges() > 0;
        }
    }
}