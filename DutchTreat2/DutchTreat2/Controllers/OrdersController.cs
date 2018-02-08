using System;
using System.Collections.Generic;
using DutchTreat2.Data;
using DutchTreat2.Data.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace DutchTreat2.Controllers {
    [Route("api/[Controller]")]
    public class OrdersController : Controller {
        private readonly IDutchRepository _repository;
        private readonly ILogger<OrdersController> _logger;

        public  OrdersController(IDutchRepository repository, ILogger<OrdersController> logger)
        {
            _repository = repository;
            _logger = logger;
        }

        [HttpGet]
        public IActionResult Get(){
            try{
                return Ok(_repository.GetAllOrders());
            }
            catch(Exception ex){
                _logger.LogError($"Failed to get products: {ex}");
                return BadRequest("Failed to get products");
            }
        }

        [HttpGet("{id:int}")]
        public IActionResult Get(int id){
            try{
                var order = _repository.GetOrderById(id);

                if(order != null){
                    return Ok(order);
                }               
                else{
                    return NotFound();
                } 
            }
            catch(Exception ex){
                _logger.LogError($"Failed to get products: {ex}");
                return BadRequest("Failed to get products");
            }
        }

        [HttpPost()]
        public IActionResult Post([FromBody] Order order){
            try{
                // var order = _repository.GetOrderById(id);

                _repository.AddEntity(order);

                if(_repository.SaveAll()){
                    return Created($"api/orders/{order.Id}", order);
                }               
                else{
                    return BadRequest("Failed to save order.");
                } 
            }
            catch(Exception ex){
                _logger.LogError($"Failed to save order: {ex}");
                return BadRequest("Failed to save order");
            }
        }
    }
}