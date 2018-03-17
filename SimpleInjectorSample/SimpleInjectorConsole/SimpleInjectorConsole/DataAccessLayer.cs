using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SimpleInjectorConsole
{
    public class DataAccessLayer : ICart
    {
        public string AddtoCart()
        {
            var val = "Simple Injector is the Fastest DI compared to";
            Console.WriteLine(val);
            return val;
        }
    }
}
