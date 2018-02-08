using System;
using System.Collections.Generic;
using DutchTreat2.Data;
using DutchTreat2.Data.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace DutchTreat2.Controllers {
    [Route("api/[Controller]")]
    public class ProductsController : Controller {
        private readonly IDutchRepository _repository;
        private readonly ILogger<ProductsController> _logger;

        public  ProductsController(IDutchRepository repository, ILogger<ProductsController> logger)
        {
            _repository = repository;
            _logger = logger;
        }

        [HttpGet]
        public IActionResult Get(){
            try{
                return Ok(_repository.GetAllProducts());
            }
            catch(Exception ex){
                _logger.LogError($"Failed to get products: {ex}");
                return BadRequest("Failed to get products");
            }
        }
    }
}