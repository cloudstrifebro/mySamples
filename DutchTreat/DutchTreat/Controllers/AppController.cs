using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DutchTreat.Data;
using DutchTreat.Services;
using DutchTreat.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;
using DutchTreat.Data.Entities;

namespace DutchTreat.Controllers
{
    public class AppController : Controller
    {
        private readonly IMailService _mailService;
        private readonly IDutchRepository _repository;
        private readonly IMapper _mapper;

        public AppController(IMailService mailService, IDutchRepository repository, IMapper mapper)
        {
            _mailService = mailService;
            _repository = repository;
            _mapper = mapper;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("contact")]
        public IActionResult Contact()
        {
            return View();
        }

        [HttpPost("contact")]
        public IActionResult Contact(ContactViewModel model)
        {
            if (ModelState.IsValid)
            {
                // Send the email
                _mailService.SendMessage("shawn@wildermuth.com", model.Subject, $"From: {model.Name} - {model.Email}, Message: {model.Message}");
                ViewBag.UserMessage = "Mail Sent";
                ModelState.Clear();
            }

            return View();
        }

        public IActionResult About()
        {
            ViewBag.Title = "About Us";

            return View();
        }

        public IActionResult Shop()
        {
            return View();
        }

        public IActionResult Search(int searchId = 0, string artistName = null, bool isOrderDesc = false)
        {
            var items = _repository.GetAllProducts();
            var model = _mapper.Map<IEnumerable<Product>, IEnumerable<ProductViewModel>>(items);

            model = model.Where(p => !string.IsNullOrWhiteSpace(p.Title));

            if (searchId > 0)
            {
                model = model.Where(p => p.Id == searchId);
            }
            else
            {
                if (!string.IsNullOrWhiteSpace(artistName))
                {
                    model = model.Where(p => p.Artist.ToUpperInvariant().Contains(artistName.ToUpperInvariant()));
                }

                if (isOrderDesc)
                {
                    model = model.OrderByDescending(p => p.Artist);
                }
            }

            return View(model.Take(500).ToList());
        }
    }
}
