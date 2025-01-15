import { FullAuditedAggregateRootWithId } from '@Domain/Aggregates/full-audited-aggregated-root';
import { Guid } from 'guid-typescript';

export class Phone extends FullAuditedAggregateRootWithId<Guid> {
  public name: string;
  public brand: string;
  public model: string;
  public price: number;
  public stock: number;
  public description: string;
  public images: string[];
  public releaseDate: Date;
  public colorOptions: string[];
  public dimensions: { width: number; height: number; depth: number };
  public weight: number;
  public operatingSystem: string;
  public processor: string;
  public ram: number;
  public storageOptions: number[];
  public batteryCapacity: number;
  public display: {
    size: number;
    type: string;
    resolution: string;
  };
  public cameras: {
    front: { resolution: string; features: string[] };
    rear: { resolution: string; features: string[] }[];
  };
  public connectivity: {
    network: string[];
    bluetooth: string;
    wifi: string;
    usb: string;
    gps: boolean;
  };
  public features: {
    waterProof: boolean;
    wirelessCharging: boolean;
    fastCharging: boolean;
    fingerprintScanner: boolean;
    facialRecognition: boolean;
    fiveGSupport: boolean;
    dualSIM: boolean;
    expandableStorage: boolean;
    NFC: boolean;
    infrared: boolean;
    bluetooth5: boolean;
    stereoSpeakers: boolean;
    wirelessAudioStreaming: boolean;
    waterproofRating: string;
  };
  public warrantyPeriod: number;
  public rating: {
    average: number;
    reviews: number;
  };
  public tags: string[];
}
