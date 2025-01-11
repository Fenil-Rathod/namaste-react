import { sum } from "../sum";


test("sum the num", () => {
    const res = sum(3,6)
    //Assertion
    expect(res).toBe(9);
});
