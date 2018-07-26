export interface IProduct {
     productId: number;
     productName: string;
     productCode: string;
     releaseDate: string;
     price: number;
     description: string;
     starRating: number;
     imageUrl: string;
}

export interface IProductKendo {
     ProductID: number;
     ProductName: string;
     Discontinued: boolean;
     UnitsInStock: number;
     UnitPrice: number;
 }