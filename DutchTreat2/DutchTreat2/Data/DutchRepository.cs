using System.Collections.Generic;
using System.Linq;
using DutchTreat2.Data.Entities;

namespace DutchTreat2.Data{
    public class DutchRepository : IDutchRepository{
        private readonly DutchContext _context;
        private readonly ILogger<DutchRepository> _logger;

        public DutchRepository(DutchContext context, ILogger<DutchRepository> logger)
        {
            _context = context;
            _logger = logger;

        }

        public IEnumerable<Product> GetAllProducts(){
            _logger.LogInformation("Get all products was called.");

            return _context.Products
                .OrderBy(p => p.Title)
                .ToList();
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