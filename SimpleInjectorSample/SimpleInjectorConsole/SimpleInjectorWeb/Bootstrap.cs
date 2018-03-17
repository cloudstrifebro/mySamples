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
using SimpleInjector.Integration.Web.Mvc;
using SimpleInjector.Integration.WebApi;

namespace SimpleInjectorWeb
{
    public class Bootstrap
    {
        public static void Start()
        {
            var container = new Container();

            // Register your types, for instance:
            container.Register<IStatesService, StatesService>();
            container.Register<IStatesRepository, StatesRepository>();


            container.RegisterWebApiControllers(GlobalConfiguration.Configuration);

            // Optionally verify the container.
            container.Verify();

            //DependencyResolver.SetResolver(
            //    new SimpleInjectorDependencyResolver(container));
            GlobalConfiguration.Configuration.DependencyResolver =
                new SimpleInjectorWebApiDependencyResolver(container);



        }
    }
}