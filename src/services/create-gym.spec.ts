import { expect, describe, it, beforeEach } from "vitest";
import { InMemoryGymsRepository } from "@/repositories/in-memory/in-memory-gym-repository";
import { CreateGymService } from "./create-gym";

let gymsRepository: InMemoryGymsRepository;
let sut: CreateGymService;

describe("Register Service", () => {
  beforeEach(() => {
    gymsRepository = new InMemoryGymsRepository();
    sut = new CreateGymService(gymsRepository);
  });

  it("should be able to register ", async () => {
    const { gym } = await sut.execute({
      title: "Typescript Academy",
      description: "",
      phone: "",
      latitude: -23.9675882,
      longitude: -46.3912777,
    });

    expect(gym.id).toEqual(expect.any(String));
  });
});
