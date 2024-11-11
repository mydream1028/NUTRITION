import { TFail, TNext } from "./basic.type";

export type TAddFood = {
  date: Date | null;
  food: string;
  calrory: number;
};

export type TFoodError = {
  date: string;
  food: string;
};

export type TFood = TAddFood & { uuid: string };

export type TAddFoodRequest = TAddFood & TNext & TFail;

export type TPeriod = {
  from: Date | null;
  to: Date | null;
};

export type TPeriodError = {
  from: string;
  to: string;
};

export type TGetFoodRequest = TPeriod & TFail;
