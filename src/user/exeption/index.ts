import { CodedException } from "src/utils/code-exception";

export class UserNotFoundException extends CodedException {
  constructor() {
    super('USER_NOT_FOUND', 'User not found.');
  }
}
