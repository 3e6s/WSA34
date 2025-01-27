using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using WorldCup.Models;
using WSA34.Models;

namespace WSA34.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            var categores = new List<Categories>()
            {
                new Categories
                {
                    Id = 1,
                    Name="ملاعب",
                    Image="/images/Background.png",
                    Url="Stadiums"
                },
                new Categories
                {
                    Id = 2,
                    Name="فنادق",
                    Image="/images/mov.jpg",
                    Url="Hotels"
                },
                        new Categories
                {
                    Id = 3,
                    Name="النقل",
                    Image="/images/Metro.jpg",
                    Url="Transportation"
                }
            };
            return View(categores);
        }

        public IActionResult Hotels()
        {
            var hotels = new List<Hotels>()
            {
                new Hotels
                {
                    Id = 1,
                    Name="فندق موفمبيك",
                    Icon="/images/mov.png",
                    City="القصيم",
                    Rating=5,
                    Description="فندق موفمبيك بالقصيم",
                    PricePerNight=1200
                }
            };
            return View(hotels);
        }
        public IActionResult Stadiums()
        {
            var stadiums = new List<Stadiums>()
            {
                new Stadiums
                {
                    Id = 1,
                    Name="ملعب الملك سلمان",
                    Icon="/Images/King-Salman-Stadium-Render-4.jpg",
                    City="الرياض",
                    Capacity=93892,
                    Description="ملعب الملك سلمان بالرياض",
                }
            };
            return View(stadiums);
        }
        public IActionResult Transportation()
        {
            var transportation = new List<Transportation>()
            {
                new Transportation
                {
                    Id = 1,
                    Name="ميترو",
                    ImageUrl="/Images/Metro.jpg",
                    City="الرياض",
                    Price=10,
                    Description="ميترو",
                    Type="مواصلات"
                },
                   new Transportation
                {
                    Id = 2,
                    Name="باص",
                    ImageUrl="/Images/Metro.jpg",
                    City="الرياض",
                    Price=10,
                    Description="باص",
                    Type="مواصلات"
                }
            };
            return View(transportation);
        }
        public IActionResult What34()
        {
            return View();
        }
        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
