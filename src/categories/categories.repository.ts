import { Injectable } from '@nestjs/common';
import { Category } from './category.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoriesRepository {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async getCategories(): Promise<Category[]> {
    return await this.categoryRepository.find();
  }

  async addCategory(category: Category): Promise<void> {
    await this.categoryRepository.save(category);
  }

  async findOneByName(name: string): Promise<Category | undefined> {
    return await this.categoryRepository.findOne({ where: { name } });
  }
}
