import { Injectable, NotFoundException } from '@nestjs/common';

import { Product } from 'src/products/entities/product.entity';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dto';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Product 1 Description',
      price: 122,
      stock: 5,
      image: 'https://img.shields.io',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Product 2 Description',
      price: 123,
      stock: 5,
      image: 'https://img.shields.io',
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException(
        `The product with id ${id} could not be found`,
      );
    }
    return product;
  }

  create(payload: CreateProductDto) {
    console.log(payload);
    const newProduct = {
      id: this.products.length + 1,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: UpdateProductDto) {
    const findProduct = this.findOne(id);
    if (findProduct) {
      const index = this.products.findIndex((item) => item.id === id);
      this.products[index] = {
        ...findProduct,
        ...payload,
      };
      return this.products[index];
    }
    return null;
  }

  delete(id: number) {
    const findProduct = this.findOne(id);
    const index = this.products.findIndex((item) => item.id === id);
    this.products.splice(index, 1);
    return findProduct;
  }
}
