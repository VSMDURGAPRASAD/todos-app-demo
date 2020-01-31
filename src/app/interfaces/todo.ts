import { ICategory } from './category';
import { ITag } from './tag';

export interface ITodo {
    "_id":string,
    "title":string,
    "isCompleted":string,
    "targetDate":string,
    "category":ICategory,
    "tags":ITag[]
    
}