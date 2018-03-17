using SimpleInjector;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SimpleInjectorConsole
{
    class Program
    {
        static void Main(string[] args)
        {
            var container = new Container();
            container.Register<ICart, DataAccessLayer>();

            var BL = container.GetInstance<BusinessLayer>();
            BL.InserttoCart();

            Console.ReadLine();
        }
    }
}
