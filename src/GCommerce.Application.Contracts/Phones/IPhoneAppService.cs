using System;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace GCommerce.Application.Contracts.Phones;

public interface IPhoneAppService :
    ICrudAppService<
        PhoneDto,
        Guid,
        PagedAndSortedResultRequestDto,
    CreateUpdatePhoneDto>
{
    // Task<ListResultDto<BrandLookupDto>> GetBrandLookupAsync();
}