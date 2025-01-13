using Volo.Abp.Threading;

namespace GCommerce.EntityFrameworkCore;

public static class GCommerceEfCoreEntityExtensionMappings
{
    private static readonly OneTimeRunner OneTimeRunner = new OneTimeRunner();

    public static void Configure()
    {
        // GCommerceGlobalFeatureConfigurator.Configure();
        // GCommerceModuleExtensionConfigurator.Configure();
        
        OneTimeRunner.Run(() =>
        {
            
        });
    }
}