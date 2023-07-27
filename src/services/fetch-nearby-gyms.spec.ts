import { expect, describe, it, beforeEach } from "vitest";
import { InMemoryGymsRepository } from "@/repositories/in-memory/in-memory-gym-repository";
import { FetchNearbyGymsService } from "./fetch-nearby-gyms";

let gymsRepository: InMemoryGymsRepository;
let sut: FetchNearbyGymsService;

describe("Fetch Nearby Gyms Service", () => {
  beforeEach(async () => {
    gymsRepository = new InMemoryGymsRepository();
    sut = new FetchNearbyGymsService(gymsRepository);
  });

  it("should be able to fetch nearby gyms", async () => {
    await gymsRepository.create({
      title: "Near Gym",
      description: "",
      phone: "",
      latitude: -23.9675882,
      longitude: -46.3912777,
    });

    await gymsRepository.create({
      title: "Far Gym",
      description: "",
      phone: "",
      latitude: -23.6765523,
      longitude: -46.5250751,
    });

    const { gyms } = await sut.execute({
      userLatitude: -23.9675882,
      userLongitude: -46.3912777,
    });

    expect(gyms).toHaveLength(1);
    expect(gyms).toEqual([expect.objectContaining({ title: "Near Gym" })]);
  });
});
