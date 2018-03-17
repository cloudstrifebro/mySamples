using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using System.IO;
using Interfaces.Services;
using Interfaces.Repositories;

namespace Logic.Services
{
    public class StatesService : IStatesService
    {
        private readonly IStatesRepository _statesRepository;

        public StatesService(IStatesRepository statesRepository)
        {
            _statesRepository = statesRepository;
        }

        public string GetStates()
        {
            return _statesRepository.GetStates();
        }

    }
}
