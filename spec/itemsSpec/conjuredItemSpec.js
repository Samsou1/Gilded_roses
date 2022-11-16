import ConjuredItem from '../../src/items/conjuredItem.js'

describe("ConjuredItem class", () => {
    it("should create an item", () => {
      const Q = Math.floor(Math.random() * 50);
      const S = Math.floor(Math.random() * 10);
      const item = new ConjuredItem("Pants", S, Q);
      expect(item.name).toBe("Conjured Pants");
      expect(item.sellIn).toBe(S);
      expect(item.quality).toBe(Q);
    });

    it("should lower the quality twice as fast", () => {
      const Q = Math.floor(Math.random() * 50);
      const S = Math.floor(Math.random() * 10);
      const item = new ConjuredItem("Pants", S, Q);
      item.updateQuality();
      expect(item.quality).toBe(Q - 2 >= 0 ? Q - 2 : 0);
    });

    it("should lower the quality twice as fast while the the expiration date is reached", () => {
      const Q = Math.floor(Math.random() * 50);
      const S = -Math.floor(Math.random() * 10);
      const item = new ConjuredItem("Pants", S, Q);
      item.updateQuality();
      expect(item.quality).toBe(Q - 4 >= 0 ? Q - 4 : 0);
    });

  });