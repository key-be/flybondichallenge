import { AmenityTypes } from "../components/packagesBox/amenities";

interface Package {
  name: string;
  price: number;
  discount?: number;
  amenities: AmenityTypes[]
  id: number;
}
export const PACKAGES: Package[] = [
  {
    name: 'Liviano', price: 1250, amenities: ['tarifa', 'equipaje'], id: 1
  },
  {
    name: 'Viajero Light', price: 1650, discount: 15,  amenities: ['tarifa', 'equipaje', 'asiento', 'carryOn'], id: 2
  },
  {
    name: 'Viajero Pro', price: 1850,   discount: 20, amenities: ['tarifa', 'equipaje', 'asiento', 'carryOn', 'valija'], id: 3
  }
] 