using Microsoft.AspNetCore.Mvc;
using WSA34.Data;
using WSA34.Models;
using System.Linq;

namespace WSA34.Controllers
{
    public class DashboardController : Controller
    {
        private readonly ApplicationDbContext _context;

        public DashboardController(ApplicationDbContext context)
        {
            _context = context;
        }
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult CreateCategories()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult CreateCategories(Categories category, IFormFile Image)
        {
            if (!ModelState.IsValid)
            {
                var errors = ModelState.Values.SelectMany(v => v.Errors).Select(e => e.ErrorMessage).ToList();
                TempData["ErrorMessage"] = "Model state is invalid. Errors: " + string.Join(", ", errors);
                return View(category);
            }

            // Proceed with saving the category
            try
            {
                if (Image != null && Image.Length > 0)
                {
                    var filePath = Path.Combine("wwwroot/uploads", Image.FileName);
                    using (var stream = new FileStream(filePath, FileMode.Create))
                    {
                        Image.CopyTo(stream);
                    }

                    category.Image = "/uploads/" + Image.FileName;
                }

                _context.Categories.Add(category);
                _context.SaveChanges();

                TempData["SuccessMessage"] = "Category created successfully.";
                return RedirectToAction("CreateCategories");
            }
            catch (Exception ex)
            {
                TempData["ErrorMessage"] = "An error occurred: " + ex.Message;
                return View(category);
            }
        }


        // GET: Edit a category
        [HttpGet]
        public IActionResult EditCategories(int id)
        {
            var category = _context.Categories.FirstOrDefault(c => c.Id == id);
            if (category == null)
            {
                return NotFound();
            }
            return View(category);
        }

        // POST: Update a category
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult EditCategories(Categories updatedCategory)
        {
            if (ModelState.IsValid)
            {
                _context.Categories.Update(updatedCategory);
                _context.SaveChanges();
                return RedirectToAction("Categories");
            }
            return View(updatedCategory);
        }

        // POST: Delete a category
        [HttpPost]
        public IActionResult DeleteCategory(int id)
        {
            var category = _context.Categories.FirstOrDefault(c => c.Id == id);
            if (category != null)
            {
                _context.Categories.Remove(category);
                _context.SaveChanges();
            }
            return RedirectToAction("Categories");
        }
    }
}
