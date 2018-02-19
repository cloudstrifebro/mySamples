using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using DutchTreat2.Data;
using DutchTreat2.Data.Entities;
using DutchTreat2.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;

namespace DutchTreat2.Controllers {
    [Route("api/orders/{orderId}/items")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class OrderItemsController : Controller {
        private readonly IDutchRepository _repository;
        private readonly ILogger<OrderItemsController> _logger;
        private readonly IMapper _mapper;

        public  OrderItemsController(IDutchRepository repository, 
        ILogger<OrderItemsController> logger,
        IMapper mapper)
        {
            _repository = repository;
            _logger = logger;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult Get(int orderId){
            try{
                var order = _repository.GetOrderById(User.Identity.Name, orderId);

                if(order != null) return Ok(_mapper.Map<IEnumerable<OrderItem>, IEnumerable<OrderItemViewModel>>(order.Items));                
                else{
                    return NotFound();
                }
            }
            catch(Exception ex){
                _logger.LogError($"Failed to get products: {ex}");
                return BadRequest("Failed to get products");
            }
        }

            [HttpGet("{id}")]
            public IActionResult Get(int orderId, int id){
            try{
                var order = _repository.GetOrderById(User.Identity.Name, orderId);
                var item = order.Items
                    .Where(i => i.Id == id)
                    .FirstOrDefault();

                if(item != null) return Ok(_mapper.Map<OrderItem, OrderItemViewModel>(item));                
                else{
                    return NotFound();
                }
            }
            catch(Exception ex){
                _logger.LogError($"Failed to get products: {ex}");
                return BadRequest("Failed to get products");
            }
        }
    }
}