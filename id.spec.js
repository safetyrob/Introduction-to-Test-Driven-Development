const { expect } = require("@jest/globals");

test("generates a unique number", () => {
  mockIds = [1, 2, 3, 4, 5];
  let id = getRandomId(1, 5, mockIds);
  expect(id).toBe("failed");

  id = getRandomId(1, 6, mockIds);
  expect(id).toBe(6);
});

function getNewId(min = 0, max = 100, ids = []) {
  let id;
  do {
    id = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (id.indexOf(id > -1));
  return id;
}

function getRandomId(min = 0, max = 0, ids = []) {
  let id;
  let a = [];
  do {
    id = Math.floor(Math.random() * (max - min + 1)) + min;
    if (a.indexOf(id) === -1) {
      a.push(id);
    }
    if (a.length === max - min + 1) {
      if (ids.indexOf(id) > -1) {
        return "failed";
      }
    }
  } while (ids.indexOf(id) > -1);
  return id;
}
