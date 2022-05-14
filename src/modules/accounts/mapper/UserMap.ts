import { instanceToInstance } from "class-transformer";

import { IUserResponseDTO } from "@modules/dtos/IUserResponseDTO";

import { User } from "../infra/typeorm/entities/User";

class UserMap {
  static toDTO({
    email,
    name,
    id,
    driver_license,
    avatar_url,
  }: User): IUserResponseDTO {
    const user = instanceToInstance({
      email,
      name,
      id,
      driver_license,
      avatar_url,
    });
    return user;
  }
}

export { UserMap };
