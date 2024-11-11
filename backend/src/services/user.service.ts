import { Repository } from "typeorm";
import { UserEntity } from "@/entities";
import { AppDataSource } from "@/setup";
import { Role, UserType } from "@/types";

export const createUser = async (
  data: UserType
): Promise<Omit<UserEntity, "password"> | null> => {
  const { name, email, password, calrory } = data;
  const userRepository: Repository<UserEntity> =
    AppDataSource.getRepository(UserEntity);
  const existingUser = await userRepository.findOne({
    where: { email },
  });

  if (existingUser) {
    return null;
  }

  const user: UserEntity = userRepository.create({
    name,
    email,
    password,
    role: Role.USER,
    calrory,
  });
  await userRepository.save(user);

  return user;
};

export const getOneUser = async (
  data: Partial<Pick<UserEntity, "uuid" | "email">>
): Promise<UserEntity> | null => {
  const userRepository: Repository<UserEntity> =
    AppDataSource.getRepository(UserEntity);
  const findUser: UserEntity = await userRepository.findOne({
    where: { ...data },
  });

  if (!findUser) {
    return null;
  }

  return findUser;
};

export const updateUser = async (
  data: Partial<Omit<UserEntity, "password">>,
  user: UserEntity
): Promise<UserEntity | null> => {
  const userRepository: Repository<UserEntity> =
    AppDataSource.getRepository(UserEntity);
  Object.assign(user, data);
  await userRepository.save(user);
  return user;
};
