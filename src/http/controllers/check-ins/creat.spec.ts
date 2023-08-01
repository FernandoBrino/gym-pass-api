import request from "supertest";
import { app } from "@/app";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { createAndAuthenticateUser } from "@/utils/test/create-and-authenticate-user";
import { prisma } from "@/lib/prisma";

describe("Create Check-in (e2e)", () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it("should be able to creat a check-in", async () => {
    const { token } = await createAndAuthenticateUser(app, true);

    const gym = await prisma.gym.create({
      data: {
        title: "Javascript Gym",
        latitude: -23.9675882,
        longitude: -46.3912777,
      },
    });

    const response = await request(app.server)
      .post(`/gyms/${gym.id}/check-ins`)
      .set("Authorization", `Bearer ${token}`)
      .send({
        latitude: -23.9675882,
        longitude: -46.3912777,
      });

    expect(response.statusCode).toEqual(201);
  });
});
