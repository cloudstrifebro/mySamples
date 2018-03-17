using Interfaces.Services;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using System.Web.Http.Results;

namespace SimpleInjectorWeb.Controllers
{
    public class StatesController : ApiController
    {
        private readonly IStatesService _statesService;

        public StatesController(IStatesService statesService)
        {
            _statesService = statesService;
        }

        // GET: api/States
        public IHttpActionResult Get()
        {
            var states =  _statesService.GetStates();

            return Ok(states);
        }

        // GET: api/States/5
        public string Get(int id)
        {
            return _statesService.GetStates();
        }

        // POST: api/States
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/States/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/States/5
        public void Delete(int id)
        {
        }
    }
}
