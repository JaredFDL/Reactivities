using System.ComponentModel.DataAnnotations;

namespace API.Dtos
{
    public class RegisteredDto
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        // [RegularExpression()]
        public string Password { get; set; }

        [Required]
        public string DisplayName { get; set; }

        [Required]
        public string Username { get; set; }
    }
}