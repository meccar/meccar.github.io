using GCommerce.Domain.Shared.Localisation;
using Volo.Abp.Application.Services;

namespace GCommerce.Application;

public abstract class GCommerceAppService : ApplicationService
{
    protected GCommerceAppService()
    {
        LocalizationResource = typeof(GCommerceResource);
    }
}