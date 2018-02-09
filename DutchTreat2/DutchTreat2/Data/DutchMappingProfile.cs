using System;
using System.Collections.Generic;
using AutoMapper;
using DutchTreat2.Data.Entities;
using DutchTreat2.ViewModels;

namespace DutchTreat2.Data{
    public class DutchMappingProfile : Profile{
        public DutchMappingProfile()
        {
            CreateMap<Order, OrderViewModel>()
                .ForMember(o => o.OrderId, ex => ex.MapFrom(o => o.Id))
                .ReverseMap();

            CreateMap<OrderItem, OrderItemViewModel>()
                .ReverseMap();
        }
    }
}