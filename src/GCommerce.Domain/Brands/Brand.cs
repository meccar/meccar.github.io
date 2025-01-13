using GCommerce.Domain.Shared.Brands;
using Volo.Abp;
using Volo.Abp.Domain.Entities.Auditing;

namespace GCommerce.Domain.Brands;

public class Brand : FullAuditedAggregateRoot<Guid>
{
    public string Name { get; set; }
    public string Description { get; set; }
    public string LogoUrl { get; set; }

    private Brand()
    {
    }
    
    internal Brand(
        Guid id,
        string name,
        string description,
        string logoUrl
    ) : base(id)
    {
        SetName(name);
        Description = description;
        LogoUrl = logoUrl;
    }

    internal Brand ChangeName(string name)
    {
        SetName(name);
        return this;
    }

    internal Brand ChangeLogo(string logoUrl)
    {
        SetLogo(logoUrl);
        return this;
    }

    private void SetName(string name)
    {
        Name = Check.NotNullOrWhiteSpace(
            name,
            nameof(name),
            maxLength: BrandConst.MaxNameLength
        );
    }
    
    private void SetLogo(string logoUrl)
    {
        LogoUrl = Check.NotNullOrWhiteSpace(
            logoUrl,
            nameof(logoUrl),
            maxLength: BrandConst.MaxLogoUrlLength
        );
    }
}