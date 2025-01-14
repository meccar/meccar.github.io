using GCommerce.Domain.Shared.Localisation;
using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;
using Microsoft.Extensions.Localization;

namespace GCommerce.Web;

[Dependency(ReplaceServices = true)]
public class GCommerceBrandingProvider : DefaultBrandingProvider
{
    private IStringLocalizer<GCommerceResource> _localizer;
}