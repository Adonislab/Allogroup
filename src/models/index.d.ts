import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerCommandeFoodModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CommandeFoodModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly FoodCard?: (FoodCardModel | null)[] | null;
  readonly heure?: string | null;
  readonly Livreur?: (LivreurModel | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCommandeFoodModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CommandeFoodModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly FoodCard: AsyncCollection<FoodCardModel>;
  readonly heure?: string | null;
  readonly Livreur: AsyncCollection<LivreurModel>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CommandeFoodModel = LazyLoading extends LazyLoadingDisabled ? EagerCommandeFoodModel : LazyCommandeFoodModel

export declare const CommandeFoodModel: (new (init: ModelInit<CommandeFoodModel>) => CommandeFoodModel) & {
  copyOf(source: CommandeFoodModel, mutator: (draft: MutableModel<CommandeFoodModel>) => MutableModel<CommandeFoodModel> | void): CommandeFoodModel;
}

type EagerFoodCardModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FoodCardModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly price?: string | null;
  readonly description?: string | null;
  readonly categorie?: string | null;
  readonly imageproduit?: string | null;
  readonly EntrepriseFood?: (FastFoodEntrepriseModel | null)[] | null;
  readonly commandefoodmodelID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFoodCardModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FoodCardModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly price?: string | null;
  readonly description?: string | null;
  readonly categorie?: string | null;
  readonly imageproduit?: string | null;
  readonly EntrepriseFood: AsyncCollection<FastFoodEntrepriseModel>;
  readonly commandefoodmodelID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type FoodCardModel = LazyLoading extends LazyLoadingDisabled ? EagerFoodCardModel : LazyFoodCardModel

export declare const FoodCardModel: (new (init: ModelInit<FoodCardModel>) => FoodCardModel) & {
  copyOf(source: FoodCardModel, mutator: (draft: MutableModel<FoodCardModel>) => MutableModel<FoodCardModel> | void): FoodCardModel;
}

type EagerFastFoodEntrepriseModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FastFoodEntrepriseModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nom_entreprise?: string | null;
  readonly telephone?: number | null;
  readonly logo?: string | null;
  readonly foodcardmodelID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFastFoodEntrepriseModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FastFoodEntrepriseModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nom_entreprise?: string | null;
  readonly telephone?: number | null;
  readonly logo?: string | null;
  readonly foodcardmodelID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type FastFoodEntrepriseModel = LazyLoading extends LazyLoadingDisabled ? EagerFastFoodEntrepriseModel : LazyFastFoodEntrepriseModel

export declare const FastFoodEntrepriseModel: (new (init: ModelInit<FastFoodEntrepriseModel>) => FastFoodEntrepriseModel) & {
  copyOf(source: FastFoodEntrepriseModel, mutator: (draft: MutableModel<FastFoodEntrepriseModel>) => MutableModel<FastFoodEntrepriseModel> | void): FastFoodEntrepriseModel;
}

type EagerLivreurModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LivreurModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nom?: string | null;
  readonly prenom?: string | null;
  readonly numero?: number | null;
  readonly photoprofil?: string | null;
  readonly tablelivraisonmodelID: string;
  readonly commandefoodmodelID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLivreurModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LivreurModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nom?: string | null;
  readonly prenom?: string | null;
  readonly numero?: number | null;
  readonly photoprofil?: string | null;
  readonly tablelivraisonmodelID: string;
  readonly commandefoodmodelID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type LivreurModel = LazyLoading extends LazyLoadingDisabled ? EagerLivreurModel : LazyLivreurModel

export declare const LivreurModel: (new (init: ModelInit<LivreurModel>) => LivreurModel) & {
  copyOf(source: LivreurModel, mutator: (draft: MutableModel<LivreurModel>) => MutableModel<LivreurModel> | void): LivreurModel;
}

type EagerTablelivraisonModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TablelivraisonModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nomlivraison?: string | null;
  readonly message?: string | null;
  readonly lieudedepart?: string | null;
  readonly lieuarrivee?: string | null;
  readonly numerodepart?: number | null;
  readonly numeroarrivee?: number | null;
  readonly Livreur?: (LivreurModel | null)[] | null;
  readonly personnedepart?: string | null;
  readonly personnearrivee?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTablelivraisonModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TablelivraisonModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nomlivraison?: string | null;
  readonly message?: string | null;
  readonly lieudedepart?: string | null;
  readonly lieuarrivee?: string | null;
  readonly numerodepart?: number | null;
  readonly numeroarrivee?: number | null;
  readonly Livreur: AsyncCollection<LivreurModel>;
  readonly personnedepart?: string | null;
  readonly personnearrivee?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TablelivraisonModel = LazyLoading extends LazyLoadingDisabled ? EagerTablelivraisonModel : LazyTablelivraisonModel

export declare const TablelivraisonModel: (new (init: ModelInit<TablelivraisonModel>) => TablelivraisonModel) & {
  copyOf(source: TablelivraisonModel, mutator: (draft: MutableModel<TablelivraisonModel>) => MutableModel<TablelivraisonModel> | void): TablelivraisonModel;
}