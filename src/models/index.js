// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { CommandeFoodModel, FoodCardModel, FastFoodEntrepriseModel, LivreurModel, TablelivraisonModel } = initSchema(schema);

export {
  CommandeFoodModel,
  FoodCardModel,
  FastFoodEntrepriseModel,
  LivreurModel,
  TablelivraisonModel
};