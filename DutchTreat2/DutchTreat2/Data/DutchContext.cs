using Microsoft.EntityFrameworkCore;
using DutchTreat2.Data.Entities;

namespace DutchTreat2.Data {
    public class DutchContext : DbContext{

        public DutchContext(DbContextOptions<DutchContext> options) : base(options)
        {
            
        }
        
        public DbSet<Product> Products { get; set; }
        public DbSet<Order> Orders { get; set; }
    }
}