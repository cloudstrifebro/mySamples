using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SimpleInjectorConsole
{
    public class BusinessLayer
    {
        private ICart _objcart;

        public BusinessLayer(ICart objcart)
        {
            _objcart = objcart;
        }

        public void InserttoCart()
        {
            _objcart.AddtoCart();
        }
    }
}
