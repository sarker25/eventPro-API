const app = require("../src/app");

describe("app", () => {
  it("should export express app", () => {
    expect(app).toBeDefined();
  });
});
