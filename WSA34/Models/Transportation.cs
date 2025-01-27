namespace WSA34.Models
{
    public class Transportation
    {
        public int Id { get; set; } // Unique identifier for transportation
        public string Type { get; set; } // Type of transportation (e.g., Bus, Taxi, Metro)
        public string Name { get; set; } // Name of the transportation provider or service
        public string Description { get; set; } // Description of the transportation service
        public string City { get; set; } // City where the transportation is available
        public decimal Price { get; set; } // Price for using the transportation service
        public string ImageUrl { get; set; } // URL or path to the image of the transportation
    }
}
