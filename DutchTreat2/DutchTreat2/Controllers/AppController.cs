﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace DutchTreat2.Controllers
{
    public class AppController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}