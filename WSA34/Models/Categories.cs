using System.ComponentModel.DataAnnotations;

public class Categories
{
    public int Id { get; set; }

    [Required(ErrorMessage = "Name is required.")]
    public string Name { get; set; }

    [Required(ErrorMessage = "URL is required.")]
    [Url(ErrorMessage = "Please enter a valid URL.")]
    public string Url { get; set; }

    public string Image { get; set; }
}
