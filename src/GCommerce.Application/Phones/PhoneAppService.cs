using GCommerce.Application.Contracts.Phones;
using GCommerce.Domain.Brands;
using GCommerce.Domain.Phones;
using Microsoft.AspNetCore.Authorization;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace GCommerce.Application.Phones;

// [Authorize()]
public class PhoneAppService : 
        CrudAppService<
                Phone,
                PhoneDto,
                Guid,
                PagedResultRequestDto,
                CreateUpdatePhoneDto>,
        IPhoneAppService
{
        private readonly IBrandRepository _brandRepository;

        public PhoneAppService(
                IRepository<Phone, Guid> repository,
                IBrandRepository brandRepository
        ) : base(repository)
        {
                _brandRepository = brandRepository;
        }

        public override async Task<PhoneDto> GetAsync(Guid id)
        {
                var queryable = await Repository.GetQueryableAsync();

                var query = from phone in queryable
                        join brand in await _brandRepository.GetQueryableAsync() on phone.BrandId equals brand.Id
                        where phone.Id == id
                        select new { phone, brand };
                                
                                
                return null;
        }

        public Task<PagedResultDto<PhoneDto>> GetListAsync(PagedAndSortedResultRequestDto input)
        {
                throw new NotImplementedException();
        }
}