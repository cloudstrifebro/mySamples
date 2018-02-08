using Microsoft.EntityFrameworkCore;
using DutchTreat2.Data.Entities;
using System.Linq;
using System.IO;
using Microsoft.AspNetCore.Hosting;
using Newtonsoft.Json;
using System.Collections.Generic;
using System;

namespace DutchTreat2.Data {
    public class DutchSeeder {
        private readonly DutchContext _context;
        private readonly IHostingEnvironment _hosting;

        public DutchSeeder(DutchContext context, IHostingEnvironment hosting)
        {
            _context = context;
            _hosting = hosting;
        }

        public void Seed(){
            _context.Database.EnsureCreated();//ensures the db is created (duh)

            if(!_context.Products.Any()){
                var filepath = Path.Combine(_hosting.ContentRootPath, "Data/art.json");
                var json = File.ReadAllText(filepath);
                var products = JsonConvert.DeserializeObject<IEnumerable<Product>>(json);

                _context.AddRange(products);

                var order = new Order{
                    OrderDate = DateTime.Now,
                    OrderNumber = "12345",
                    Items = new List<OrderItem>(){
                        new OrderItem{
                            Product = new Product(),
                            Quantity = 5,
                            UnitPrice = products.First().Price
                        }
                    }
                };

                _context.Orders.Add(order);

                _context.SaveChanges();
            }
        }
    }
}