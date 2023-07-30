import { Environment } from "vitest";

export default <Environment>{
  name: "prisma",

  //setup method, execute before each test file
  async setup() {
    console.log("Setup");

    return {
      //teardown method, execute after each test file
      teardown() {
        console.log("Teardown");
      },
    };
  },
};

export { Environment } from "vitest";
