import RTVal from "../src/returnValue";

test('scope test', () => {
    var v=new RTVal("111");
    expect(v.v=="111")
});