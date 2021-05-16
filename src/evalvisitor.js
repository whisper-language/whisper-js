import TLVisitor from "./gen/TLVisitor"
import RTVal from "./returnValue";
import TLVal from "./tlvalue";

export default class EvalVisitor extends TLVisitor {
    static returnValue=new RTVal();
    scope;
    functions;
    buildFunctions;
    constructor(scope,functions,buildFunctions){
        super();
        this.scope=scope;
        this.functions=functions;
        this.buildFunctions=buildFunctions;
    }

    visitFunctionDecl(ctx){
        console.log("函数定义")
    }

    visitPrintlnFunctionCall(ctx){
        if (ctx.expression() != null) {
            console.log(this.visit(ctx.expression()))
        }
        console.log("\r\n");
        return TLVal.VOID;
    }
    visitPrintFunctionCall(ctx){
        if (ctx.expression() != null) {
            console.log(this.visit(ctx.expression()))
        }
        return TLVal.VOID;
    }

    visitAssertFunctionCall(ctx){
        var v = this.visit(ctx.expression());
        if (!v.isBoolean()) {
            throw "不是boolean表达式";
        }
        if (!value.asBoolean()) {
            throw "无法转换为bool表达式:" + ctx.expression().getText() + " ("+ctx.start.getInputStream().getSourceName()+":" + ctx.start.getLine()+")";
        }
        return TLVal.VOID;
    }

    visitStringExpression(ctx){
        var text = ctx.getText();
        text=text.substring(1, text.length - 1);
        text.replace("/\\\\(.)/g", "$1");
        var v = new TLVal(text);
        if (ctx.indexes() != null) {
            exps = ctx.indexes().expression();
            v = resolveIndexes(v, exps);
        }
        return v;
    }
    visitBoolExpression(ctx){
        //字符串转换成bool
        return new TLVal(ctx.getText().toLocaleLowerCase()=="true");
    }
    visitNumberExpression(ctx){
        return new TLVal(parseFloat(ctx.getText()));
    }

}