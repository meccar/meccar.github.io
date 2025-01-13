using GCommerce.Domain;
using GCommerce.Domain.Brands;
using GCommerce.Domain.Phones;
using GCommerce.Domain.Shared.Brands;
using Microsoft.EntityFrameworkCore;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore.Modeling;
using Volo.Abp.Identity;
using Volo.Abp.Identity.EntityFrameworkCore;

namespace GCommerce.EntityFrameworkCore;

[ReplaceDbContext(typeof(IIdentityDbContext))]
[ConnectionStringName("Default")]
public class GCommerceDbContext 
    : AbpDbContext<GCommerceDbContext>, IIdentityDbContext
{
    public DbSet<Phone> Phones { get; set; }
    public DbSet<Brand> Brands { get; set; }
    
    public DbSet<IdentityUser> Users { get; set; }
    public DbSet<IdentityRole> Roles { get; set; }
    public DbSet<IdentityClaimType> ClaimTypes { get; set; }
    public DbSet<OrganizationUnit> OrganizationUnits { get; set; }
    public DbSet<IdentitySecurityLog> SecurityLogs { get; set; }
    public DbSet<IdentityLinkUser> LinkUsers { get; set; }
    public DbSet<IdentityUserDelegation> UserDelegations { get; set; }
    public DbSet<IdentitySession> Sessions { get; set; }
    
    public GCommerceDbContext(
        DbContextOptions<GCommerceDbContext> options
    ) : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        // builder.ConfigurePermissionManagement();
        // builder.ConfigureSettingManagement();
        // builder.ConfigureBackgroundJobs();
        // builder.ConfigureAuditLogging();
        // builder.ConfigureFeatureManagement();
        builder.ConfigureIdentity();
        // builder.ConfigureOpenIddict();
        // builder.ConfigureTenantManagement();
        // builder.ConfigureBlobStoring();
        
        builder.Entity<Phone>(p =>
        {
            p.ToTable(GCommerceConsts.DbTablePrefix + "Phones"
                , GCommerceConsts.DbSchema);
            p.ConfigureByConvention(); //auto configure for the base class props
            p.Property(x => x.Name).IsRequired().HasMaxLength(128);
            p.HasOne<Brand>().WithMany().HasForeignKey(x => x.BrandId).IsRequired();
        });

        builder.Entity<Brand>(p =>
        {
            p.ToTable(GCommerceConsts.DbTablePrefix + "Brands",
                GCommerceConsts.DbSchema);
            p.ConfigureByConvention();
            p.Property(x => x.Name).IsRequired().HasMaxLength(BrandConst.MaxNameLength);
            p.HasIndex(x => x.Name).IsUnique();
        });
    }
}