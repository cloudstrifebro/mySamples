using Microsoft.EntityFrameworkCore;
using DutchTreat2.Data.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace DutchTreat2.Data {
    public class DutchContext : IdentityDbContext<StoreUser>{

        public DutchContext(DbContextOptions<DutchContext> options) : base(options)
        {
            
        }
        
        public DbSet<Product> Products { get; set; }
        public DbSet<Order> Orders { get; set; }
    }
}