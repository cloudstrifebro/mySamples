using Microsoft.AspNetCore.Identity;

namespace DutchTreat2.Data.Entities{
    public class StoreUser : IdentityUser{
        public string FirstName { get; set; }
        public string LastName { get; set; }
        
    }
}