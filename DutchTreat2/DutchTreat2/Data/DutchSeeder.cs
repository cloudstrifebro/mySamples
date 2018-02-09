using Microsoft.EntityFrameworkCore;
using DutchTreat2.Data.Entities;
using System.Linq;
using System.IO;
using Microsoft.AspNetCore.Hosting;
using Newtonsoft.Json;
using System.Collections.Generic;
using System;
using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;

namespace DutchTreat2.Data {
    public class DutchSeeder {
        private readonly DutchContext _context;
        private readonly IHostingEnvironment _hosting;
        private readonly UserManager<StoreUser> _userManager;

        public DutchSeeder(DutchContext context, 
            IHostingEnvironment hosting,
            UserManager<StoreUser> userManager)
        {
            _context = context;
            _hosting = hosting;
            _userManager = userManager;
        }

        public async Task Seed(){
            _context.Database.EnsureCreated();//ensures the db is created (duh)

            var user = await _userManager.FindByEmailAsync("shawn@dutchtreat.com");

            if(user == null){
                user = new StoreUser{
                    FirstName = "Shawn",
                    LastName = "Wildermuth",
                    UserName = "shawn@dutchtreat.com",
                    Email = "shawn@dutchtreat.com"
                };

                var result = await _userManager.CreateAsync(user, "P@ssw0rd!");

                if(result != IdentityResult.Success){
                    throw new InvalidOperationException("Failed to create default user.");
                }
            }

            if(!_context.Products.Any()){
                var filepath = Path.Combine(_hosting.ContentRootPath, "Data/art.json");
                var json = File.ReadAllText(filepath);
                var products = JsonConvert.DeserializeObject<IEnumerable<Product>>(json);

                _context.AddRange(products);

                var order = new Order{
                    OrderDate = DateTime.Now,
                    OrderNumber = "12345",
                    User = user,
                    Items = new List<OrderItem>(){
                        new OrderItem{
                            Product = new Product(),
                            Quantity = 5,
                            UnitPrice = products.First().Price,                            
                        }
                    }
                };

                _context.Orders.Add(order);

                _context.SaveChanges();
            }
        }
    }
}