export class CreateProductDto {
  id: number;
  productName: string;
  description: string;
  amount: number;
  price: number;
  isActive: boolean;
  imagePath: string;
}
