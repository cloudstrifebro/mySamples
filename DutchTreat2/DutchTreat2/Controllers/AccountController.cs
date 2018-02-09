using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using DutchTreat2.Data;
using DutchTreat2.Data.Entities;
using DutchTreat2.ViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace DutchTreat2.Controllers {
    public class AccountController : Controller {
        private readonly ILogger<AccountController> _logger;
        private readonly SignInManager<StoreUser> _signInManager;

        public  AccountController(ILogger<AccountController> logger,
            SignInManager<StoreUser> signInManager)
        {
            _logger = logger;
            _signInManager = signInManager;
        }

        public IActionResult Login(){
            if(this.User.Identity.IsAuthenticated){
                return RedirectToAction("Index", "App");
            }
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Login(LoginViewModel model){
            if(ModelState.IsValid){
                var result = await _signInManager.PasswordSignInAsync(model.Username, 
                    model.Password, 
                    model.RememberMe,
                    false);

                if(result.Succeeded){
                    if(Request.Query.Keys.Contains("ReturnUrl")){
                        Redirect(Request.Query["ReturnUrl"].First());
                    }
                    else{
                        RedirectToAction("Shop", "App");
                    }
                }
            } 

            ModelState.AddModelError("", "Failed to login.");       

            return View();
        }

        [HttpGet]
        public async Task<IActionResult> Logout(LoginViewModel model){
            await _signInManager.SignOutAsync();     

            return RedirectToAction("Index", "App");
        }
    }
}