export class CreateProductDto {
  id: number;
  productName: string;
  description: string;
  amount: number;
  size: string;
  price: number;
  availability: string;
  isActive: boolean;
}
