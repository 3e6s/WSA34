namespace WorldCup.Models
{
    public class Hotels
    {
        public int Id { get; set; } // Unique identifier for the hotel
        public string Name { get; set; } // Name of the hotel
        public string City { get; set; } // City where the hotel is located
        public int Rating { get; set; } // Hotel rating (e.g., 1-5 stars)
        public string Icon { get; set; } // URL or path for the hotel image
        public string Description { get; set; } // Short description of the hotel
        public decimal PricePerNight { get; set; } // Price per night for the hotel
    }
}
