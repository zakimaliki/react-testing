import { add, div, mul, sub } from "./arith"

test('penambahan',()=>{
    expect(add(2,3)).toBe(5)
});

test('perkalian',()=>{
    expect(mul(2,3)).toBe(6)
});

test('pengurangan',()=>{
    expect(sub(10,4)).toBe(6)
});

test('pembagian', ()=>{
    expect(div(10,5)).toBe(2)
})
