using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dto

// DTO is an object that defines how the data will be sent over the network

{
    public class UserForRegisterDTO
{
    // Add validation in order for the spaces not to stay in blank

        [Required]
        public string UserName { get; set; }

        [Required]
        [StringLength(8, MinimumLength = 4, ErrorMessage = "Password must be between 4 and 8 characters")]
        public string Password { get; set; }
    }
}