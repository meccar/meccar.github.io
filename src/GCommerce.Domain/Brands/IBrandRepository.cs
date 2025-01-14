using Volo.Abp.Domain.Repositories;

namespace GCommerce.Domain.Brands;

public interface IBrandRepository : IRepository<Brand, Guid>
{
    Task<Brand> FindByNameAsync(string name);
    Task<List<Brand>> GetListAsync(
        int skipCount,
        int maxResultCount,
        string sorting,
        string filter = null
        );
}