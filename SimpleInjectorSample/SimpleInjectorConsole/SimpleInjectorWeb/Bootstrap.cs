using SimpleInjector;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Logic.Services;
using Interfaces.Services;
using Interfaces.Repositories;
using Data.Repositories;
using System.Web.Http;
using System.Web.Mvc;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin;
using SimpleInjector.Integration.Web.Mvc;
using SimpleInjector.Integration.WebApi;
using SimpleInjector.Lifestyles;

namespace SimpleInjectorWeb
{
    public class Bootstrap
    {
        public static void Start()
        {
            var container = new Container();
            container.Options.DefaultScopedLifestyle = new AsyncScopedLifestyle();

            // Register your types, for instance:
            container.Register<IStatesService, StatesService>();
            container.Register<IStatesRepository, StatesRepository>();

            container.Register<SignInManager<IdentityUser, string>>(Lifestyle.Scoped);
            container.Register(() => container.IsVerifying ? new OwinContext().Authentication : HttpContext.Current.GetOwinContext().Authentication, Lifestyle.Scoped);

            const string connectionString =
                @"Data Source=(LocalDb)\MSSQLLocalDB;Database=Pluralsight.AspNetIdentityDemo.Module3.3;trusted_connection=yes;";
            container.Register(() => new IdentityDbContext(connectionString), Lifestyle.Scoped);
            container.Register(() => new UserStore<IdentityUser>(container.GetInstance<IdentityDbContext>()), Lifestyle.Scoped);
            container.Register(() =>
            {
                var usermanager = new UserManager<IdentityUser, string>(container.GetInstance<UserStore<IdentityUser>>());
                usermanager.RegisterTwoFactorProvider("SMS", new PhoneNumberTokenProvider<IdentityUser> { MessageFormat = "Token: {0}" });
                //usermanager.SmsService = new SmsService();

                //usermanager.EmailService = new EmailService();

                usermanager.UserValidator = new UserValidator<IdentityUser, string>(usermanager) { RequireUniqueEmail = true };
                usermanager.PasswordValidator = new PasswordValidator
                {
                    RequireDigit = true,
                    RequireLowercase = true,
                    RequireNonLetterOrDigit = true,
                    RequireUppercase = true,
                    RequiredLength = 8
                };

                usermanager.UserLockoutEnabledByDefault = true;
                usermanager.MaxFailedAccessAttemptsBeforeLockout = 2;
                usermanager.DefaultAccountLockoutTimeSpan = TimeSpan.FromMinutes(3);

                return usermanager;
            }, Lifestyle.Scoped);

            container.Register<SignInManager<IdentityUser, string>>(Lifestyle.Scoped);

            container.Register(() => container.IsVerifying
                    ? new OwinContext().Authentication
                    : HttpContext.Current.GetOwinContext().Authentication,
                Lifestyle.Scoped);

            container.RegisterWebApiControllers(GlobalConfiguration.Configuration);

            // Optionally verify the container.
            container.Verify();


            DependencyResolver.SetResolver(
                new SimpleInjectorDependencyResolver(container));

            GlobalConfiguration.Configuration.DependencyResolver =
                new SimpleInjectorWebApiDependencyResolver(container);
        }
    }
}