import { StringDecoder } from "node:string_decoder";

export interface UserRepository {
  create(user: string): Promise<void>
}