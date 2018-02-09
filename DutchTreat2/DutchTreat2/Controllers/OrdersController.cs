using System;
using System.Collections.Generic;
using AutoMapper;
using DutchTreat2.Data;
using DutchTreat2.Data.Entities;
using DutchTreat2.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace DutchTreat2.Controllers {
    [Route("api/[Controller]")]
    public class OrdersController : Controller {
        private readonly IDutchRepository _repository;
        private readonly ILogger<OrdersController> _logger;
        private readonly IMapper _mapper;

        public  OrdersController(IDutchRepository repository, 
            ILogger<OrdersController> logger,
            IMapper mapper)
        {
            _repository = repository;
            _logger = logger;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult Get(bool includeItems = true){
            try{
                var results = _repository.GetAllOrders(includeItems);
                return Ok(_mapper.Map<IEnumerable<Order>, IEnumerable<OrderViewModel>>(results));
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
                    return Ok(_mapper.Map<Order, OrderViewModel>(order));
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
        public IActionResult Post([FromBody] OrderViewModel order){
            try{
                if(ModelState.IsValid){

                    var newOrder = _mapper.Map<OrderViewModel, Order>(order);

                    if(newOrder.OrderDate == DateTime.MinValue){
                        newOrder.OrderDate = DateTime.Now;
                    }

                    _repository.AddEntity(newOrder);

                    if(_repository.SaveAll()){
                        var vm = _mapper.Map<Order, OrderViewModel>(newOrder);
                        return Created($"api/orders/{vm.OrderId}", vm);
                    }  
                    else{
                        throw new Exception("Save failed.");
                    }
                }    
                else{
                    return BadRequest(ModelState);
                } 
            }
            catch(Exception ex){
                _logger.LogError($"Failed to save order: {ex}");
                return BadRequest("Failed to save order");
            }
        }
    }
}