import {
  Cable,
  Cpu,
  FileText,
  Globe,
  HardDrive,
  Landmark,
  Laptop,
  Monitor,
  PenTool,
  Printer,
  Receipt,
  Router,
  ShieldCheck,
  Smartphone,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import type { ProductCategory } from "@/data/products";
import type { ServiceId } from "@/data/services";

export const serviceIcons: Record<ServiceId, LucideIcon> = {
  "it-services": Cpu,
  "web-design": Globe,
  "rdb-services": Landmark,
  "rra-services": Receipt,
  "digital-services": Sparkles,
  "computer-electronics": Monitor,
  "online-government": ShieldCheck,
  "graphic-design": PenTool,
  "printing-documents": FileText,
};

export const productIcons: Record<ProductCategory, LucideIcon> = {
  Computers: Monitor,
  Laptops: Laptop,
  Phones: Smartphone,
  Accessories: Cable,
  "Networking Equipment": Router,
  Printers: Printer,
  "Storage Devices": HardDrive,
  "Other Electronics": Sparkles,
};
