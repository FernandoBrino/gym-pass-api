import { UsersRepository } from "@/repositories/users-repository";
import { hash } from "bcryptjs";

interface RegisterServiceRequest {
  name: string;
  email: string;
  password: string;
}

// SOLID

// D - Dependency Inversion Principle: invert tha way we use the dependency

export class RegisterService {
  constructor(private usersRepository: UsersRepository) {}

  async execute({ name, email, password }: RegisterServiceRequest) {
    const password_hash = await hash(password, 6);

    // const prismaUsersRepository = new PrismaUsersRepository();
    // Dependency Inversion Principle, instead of instance in the class received repository as parameter.

    const userWithSameEmail = await this.usersRepository.findByEmail(email);

    if (userWithSameEmail) {
      throw new Error("E-mail already exists.");
    }

    await this.usersRepository.create({
      name,
      email,
      password_hash,
    });
  }
}
