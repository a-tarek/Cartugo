import {ProductImage} from './product-image';

export interface Product{
    title: string;
    id: string;
    price: number;
    currency: string;
    urlTo: string;
    sizes: string[];
    description: string;
    defimage?:string;
    images: ProductImage[];
}