import { UserEntity } from "@/entities";

export type FoodType = {
  date: Date;
  food: string;
  calrory: number;
  user: UserEntity;
};

export type GetFoodType = {
  from: Date;
  to: Date;
  user: UserEntity;
};
