using Microsoft.EntityFrameworkCore;
using WorldCup.Models;
using WSA34.Models;

namespace WSA34.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        // DbSets for your models
        public DbSet<Hotels> Hotels { get; set; }
        public DbSet<Transportation> Transportations { get; set; }
        public DbSet<Stadiums> Stadiums { get; set; }
        public DbSet<Categories> Categories { get; set; }
    }
}
