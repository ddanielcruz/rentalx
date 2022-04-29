import { hash } from "bcrypt";

import { UnauthorizedError } from "@errors/unauthorized-error";
import { User } from "@modules/accounts/entities/user";
import { MemoryUsersRepository } from "@modules/accounts/repositories/memory/memory-users-repository";

import { AuthenticateUserUseCase } from "./authenticate-user-use-case";

describe("AuthenticateUserUseCase", () => {
  let repositoryStub: MemoryUsersRepository;
  let sut: AuthenticateUserUseCase;
  let user: User;

  const FAKE_CREDENTIALS = {
    email: "any-email",
    password: "any-password",
  };

  beforeAll(async () => {
    user = new User();
    user.name = "any-name";
    user.email = FAKE_CREDENTIALS.email;
    user.password = await hash(FAKE_CREDENTIALS.password, 1);
    Object.assign(process.env, { SECRET: "any-secret" });
  });

  beforeEach(() => {
    repositoryStub = new MemoryUsersRepository();
    repositoryStub.users.push(user);
    sut = new AuthenticateUserUseCase(repositoryStub);
  });

  it("should be able to authenticate an user", async () => {
    const session = await sut.execute(FAKE_CREDENTIALS);
    const { id, name, email } = user;
    expect(session).toEqual({
      user: { id, name, email },
      token: expect.any(String),
    });
  });

  it("should throw an error if user does not exist", async () => {
    const promise = sut.execute({ ...FAKE_CREDENTIALS, email: "other-email" });
    await expect(promise).rejects.toBeInstanceOf(UnauthorizedError);
  });

  it("should throw an error if password is incorrect", async () => {
    const promise = sut.execute({
      ...FAKE_CREDENTIALS,
      email: "other-password",
    });
    await expect(promise).rejects.toBeInstanceOf(UnauthorizedError);
  });
});
