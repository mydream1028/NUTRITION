import { FoodEntity } from "@/entities";
import { AppDataSource } from "@/setup";
import { FoodType, GetFoodType } from "@/types";
import { LessThanOrEqual, MoreThanOrEqual, Repository } from "typeorm";

export const addFood = async (data: FoodType): Promise<FoodEntity> => {
  const { date, calrory, food, user } = data;
  const foodRepository: Repository<FoodEntity> =
    AppDataSource.getRepository(FoodEntity);
  const newFood = await foodRepository.save({
    date,
    calrory,
    food,
    userId: user,
  });
  return newFood;
};

export const getFoods = async (data: GetFoodType): Promise<FoodEntity[]> => {
  const { from, to, user } = data;
  const foodRepository: Repository<FoodEntity> =
    AppDataSource.getRepository(FoodEntity);
  return await foodRepository.find({
    where: [
      { userId: { uuid: user.uuid }, date: MoreThanOrEqual(from) },
      { userId: { uuid: user.uuid }, date: LessThanOrEqual(to) },
    ],
    select: ["uuid", "date", "food", "calrory"],
    order: {
      date: "ASC"
    }
  });
};
