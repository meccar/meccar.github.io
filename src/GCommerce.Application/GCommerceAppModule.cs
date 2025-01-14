using Volo.Abp.AutoMapper;
using Volo.Abp.Modularity;

namespace GCommerce.Application;

// [DependsOn()]
public class GCommerceAppModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpAutoMapperOptions>(options =>
        {
            options.AddMaps<GCommerceAppModule>();
        });
    }
}