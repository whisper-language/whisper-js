import Scope from "./scope";
import TLVal from "./tlvalue";

export default class Functions {
    parentScope;
    param;
    block;
    constructor(parentScope,param,block) {
        this.parentScope=parentScope;
        this.param=param;
        this.block=block;
    }
    Invoke(args,functions,buildFunction){
        if(args.length!=this.param.length){
            throw "错误的参数调用"
        }
        scopeNest=new Scope(this.parentScope,true);
        for (const p in this.param) {
            scopeNext.assignParam(this.param[i].GetText(), value);
        }

        let evalVistorNext = new EvalVisitor(scopeNext, functions, buildFunction);

            var ret = TLVal.VOID;
            try
            {
                evalVistorNext.Visit(block);
            } catch(error) {
                console.log("捕捉到异常")
                ret = error.value;
            }
            return ret;
    }
}