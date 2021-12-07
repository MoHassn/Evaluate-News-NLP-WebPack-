import { checkURL } from "../src/client/js/urlChecker";

describe("Testing the check url functionality", () => {
  test("Testing the checkURL() function", () => {
    expect(checkURL).toBeDefined();
  });
});
