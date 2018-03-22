using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens;
using System.Linq;
using System.Security.Claims;
using System.Web;
using System.Web.Security;

namespace SimpleInjectorWeb
{
    public class ClaimsTransformer : ClaimsAuthenticationManager
    {
        //public override ClaimsPrincipal Authenticate(string resourceName, ClaimsPrincipal principal)
        //{

        //}
        public override ClaimsPrincipal Authenticate(string resourceName, ClaimsPrincipal incomingPrincipal)
        {
            if (!incomingPrincipal.Identity.IsAuthenticated)
            {
                return base.Authenticate(resourceName, incomingPrincipal);
            }

            var newPrincipal = CreateApplicationPrincipal(incomingPrincipal.Identity.Name);

            EstablishSession(newPrincipal);

            return newPrincipal;
        }

        private void EstablishSession(ClaimsPrincipal newPrincipal)
        {
            var sessionToken = new SessionSecurityToken(newPrincipal, TimeSpan.FromHours(10)); 
            //FederatedAuthentication.SessionAuthenticationModule.WriteSessionCookie();
        }

        private ClaimsPrincipal CreateApplicationPrincipal(string userName)
        {
            var claims = new List<Claim>();
            if (userName == "richard")
            {
                claims.Add(new Claim(ClaimTypes.Name, userName));
                claims.Add(new Claim(ClaimTypes.GivenName, "Richard"));

                Roles.GetRolesForUser(userName).ToList().ForEach(role => claims.Add(new Claim(ClaimTypes.Role, role)));
            }
            else
            {
                claims.Add(new Claim(ClaimTypes.Name, userName));
                claims.Add(new Claim(ClaimTypes.GivenName, userName));
            }

            return new ClaimsPrincipal(new ClaimsIdentity(claims, "Custom"));
        }
    }
}