import DecreasingQualityItem from '../../src/items/decreasingQualityItem.js'

describe("DecreasingQualityItem class", () => {
  it("should create an item", () => {
    const Q = Math.floor(Math.random() * 50);
    const S = Math.floor(Math.random() * 10);
    const item = new DecreasingQualityItem("Pants", S, Q);
    expect(item.name).toBe("Pants");
    expect(item.sellIn).toBe(S);
    expect(item.quality).toBe(Q);
  });

  it("should lower the quality", () => {
    const Q = Math.floor(Math.random() * 50 + 1);
    const S = Math.floor(Math.random() * 10);
    const item = new DecreasingQualityItem("Pants", S, Q);
    item.updateQuality();
    expect(item.quality).toBe(Q === 0 ? 0 : Q - 1);
  });

  it("should lower the sellIn", () => {
    const Q = Math.floor(Math.random() * 50);
    const S = Math.floor(Math.random() * 10);
    const item = new DecreasingQualityItem("Pants", S, Q);
    item.updateQuality();
    expect(item.sellIn).toBe(S - 1);
  });

  it("should lower the quality twice as fast when we reach the expirable date", () => {
    const Q = Math.floor(Math.random() * 50);
    const S = -Math.floor(Math.random() * 10);
    const item = new DecreasingQualityItem("Pants", S, Q);
    item.updateQuality();
    expect(item.quality).toBe(Q <= 1 ? 0 : Q - 2);
  });

  it("shouldn't create an item with quality over 50", () => {
    const S = Math.floor(Math.random() * 10);
    const Q = Math.floor(Math.random() * 50) + 50;
    expect(() => {new DecreasingQualityItem("Pants", S, Q)}).toThrow(new Error("You need to set the quality between 0 and 50")) ;
  });

  it("shouldn't create an item with quality over 50", () => {
    const S = Math.floor(Math.random() * 10);
    const Q = - Math.floor(Math.random() * 50) - 1;
    expect(() => {new DecreasingQualityItem("Pants", S, Q)}).toThrow(new Error("You need to set the quality between 0 and 50")) ;
  });

  it("shouldn't create an item with no quality", () => {
    const S = Math.floor(Math.random() * 10);
    expect(() => {new DecreasingQualityItem("Pants", S, undefined)}).toThrow(new Error("You need to set the quality")) ;
  });

  it("shouldn't create an item with no sellIn", () => {
    const Q = Math.floor(Math.random() * 50);
    expect(() => {new DecreasingQualityItem("Pants", undefined, Q)}).toThrow(new Error("You need to set the expiration date")) ;
  });


});