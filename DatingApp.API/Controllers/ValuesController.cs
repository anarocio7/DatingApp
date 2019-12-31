using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DatingApp.API.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace DatingApp.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]

    // Get API Values
    public class ValuesController : ControllerBase
    {
        private readonly DataContext _context;
        public ValuesController(DataContext context)
        {
            _context = context;

        }
        [AllowAnonymous]
        [HttpGet]
        // IActionResult allows us to get HTTP responeses
        public async Task<IActionResult> GetValues()
        {
            var values = await _context.Values.ToListAsync();
            return Ok(values);
        }

        // Get with ID
        [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<IActionResult> GetValue(int id)
        {
            var value = await _context.Values.FirstOrDefaultAsync(x => x.Id == id);
            return Ok(value);
        }

        // Post API Values
        [HttpPost]
        public void Post([FromBody] string value)
        {

        }
        // Put API Values
        [HttpPut]

        public void Put(int id, [FromBody] string value)
        {

        }
        // Delete API Values
        [HttpDelete]

        public void Delete(int id)
        {

        }
    }
}
