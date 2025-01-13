using GCommerce.Domain.Brands;
using Volo.Abp.Domain.Entities.Auditing;

namespace GCommerce.Domain.Phones;

public class Phone : FullAuditedAggregateRoot<Guid>
{
    public Guid BrandId { get; set; }
    public string Name { get; set; }
    public string ModelNumber { get; set; }
    public decimal Price { get; set; }
    public int StockQuantity { get; set; }
    public string Description { get; set; }
    public string ImageUrl { get; set; }

    // Specifications
    public string OperatingSystem { get; set; }
    public string Processor { get; set; }
    public int RAM { get; set; }
    public int Storage { get; set; }
    public double ScreenSize { get; set; }
    public int BatteryCapacity { get; set; }
    public bool Is5GSupported { get; set; }

    // Relationships
    public virtual Brand Brand { get; set; }
}