import Scope from "../src/scope";

test('scope test', () => {
    var scope=new Scope(null,false);
    scope.assignParam("aa",300);
});