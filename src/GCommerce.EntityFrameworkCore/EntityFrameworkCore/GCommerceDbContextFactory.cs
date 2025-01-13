using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace GCommerce.EntityFrameworkCore;

public class GCommerceDbContextFactory : IDesignTimeDbContextFactory<GCommerceDbContext>
{
    public GCommerceDbContext CreateDbContext(string[] args)
    {
        var configuration = BuildConfiguration();

        // GCommerceEfCoreEntityExtensionMappings.Configure();
        
        var builder = new DbContextOptionsBuilder<GCommerceDbContext>()
            .UseMySql(configuration.GetConnectionString("Default"), MySqlServerVersion.LatestSupportedServerVersion);
        
        return new GCommerceDbContext(builder.Options);
    }

    private static IConfigurationRoot BuildConfiguration()
    {
        var builder = new ConfigurationBuilder()
            .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "../GCommerce.DbMigrator/"))
            .AddJsonFile("appsettings.json", optional: false);
        
        return builder.Build();
    }
}