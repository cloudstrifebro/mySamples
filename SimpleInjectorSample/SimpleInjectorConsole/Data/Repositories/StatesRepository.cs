using Interfaces.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using Newtonsoft.Json;

namespace Data.Repositories
{
    public class StatesRepository : IStatesRepository
    {
        public StatesRepository()
        {

        }

        public string GetStates()
        {
            var streamReader = new StreamReader(@"D:\1_github\mySamples\SimpleInjectorSample\SimpleInjectorConsole\Data\states.json");
            var data = streamReader.ReadToEnd();

            return JsonConvert.SerializeObject(data);
        }
    }
}
