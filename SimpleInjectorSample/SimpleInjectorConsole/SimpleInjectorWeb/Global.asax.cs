using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace SimpleInjectorWeb
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);

            Bootstrap.Start();
        }

        protected void Application_PostAuthenticateRequest()
        {
            var principal = ClaimsPrincipal.Current;
            var transformer = new ClaimsTransformer();

            var newPrincipal = transformer.Authenticate(string.Empty, principal);
            Thread.CurrentPrincipal = newPrincipal;
            HttpContext.Current.User = newPrincipal;
        }
    }
}
