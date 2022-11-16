import Shop from "../src/item.js";
import {items} from "./items.js"

describe("Shop class", () => {

    it("should create a shop", () => {
      const shop = new Shop(items);
      expect(shop.items[0]).toBe(items[0]);
    });
  });