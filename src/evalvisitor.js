import WhisperLanguageLexer  from "./gen/WhisperLanguageLexer";
import WhisperLanguageParser from "./gen/WhisperLanguageParser";
import WhisperLanguageVisitor from "./gen/WhisperLanguageVisitor"
import RTVal from "./returnValue";
import Scope from "./scope";
import TLVal from "./tlvalue";

export default class EvalVisitor extends WhisperLanguageVisitor {
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
        var params = ctx.idList() != null ? ctx.idList().Identifier() : [];
        var block = ctx.block();
        var id = ctx.Identifier().getText() + params.size();
        // TODO: throw exception if function is already defined?
        functions.put(id, new Function(scope, params, block));
        return TLVal.VOID;
    }

    visitList_Alias(ctx) {
        var list = [];
        if (ctx.exprList() != null) {
            ctx.exprList().expression().forEach(e => {
                list.add(this.visit(e));
            });
        }
        return new TLVal(list);
    }

    visitUnaryMinusExpression(ctx){
        var v = this.visit(ctx.expression());
        if (!v.isNumber()) {
            throw v+"不是数字";
        }
        return new TLVal(-1 * v.asDouble());
    }

    visitNotExpression(ctx) {
        var v = this.visit(ctx.expression());
        if (!v.isBoolean()) {
            throw "表达式错误"+ctx;
        }
        return new TLVal(!v.asBoolean());
    }

    visitPowerExpression(ctx) {
        var lhs = this.visit(ctx.expression(0));
        var rhs = this.visit(ctx.expression(1));
        if (lhs.isNumber() && rhs.isNumber()) {
            return new TLVal(Math.pow(lhs.asDouble(), rhs.asDouble()));
        }
        throw "** 表达式错误"+ctx;
    }

    // 比较操作符
    visitCompExpression(ctx) {
        switch (ctx.op.type) {
            case WhisperLanguageLexer.LT:
                return this.lt(ctx);
            case WhisperLanguageLexer.LTEquals:
                return this.ltEq(ctx);
            case WhisperLanguageLexer.GT:
                return this.gt(ctx);
            case WhisperLanguageLexer.GTEquals:
                return this.gtEq(ctx);
            default:
                throw "未知比较操作符: " + ctx.op.text;
        }
    }

    // expression op=( '*' | '/' | '%' ) expression         #multExpression
    visitMultExpression(ctx) {
        switch (ctx.op.type) {
            case WhisperLanguageLexer.Multiply:
                return this.multiply(ctx);
            case WhisperLanguageLexer.Divide:
                return this.divide(ctx);
            case WhisperLanguageLexer.Modulus:
                return this.modulus(ctx);
            default:
                throw "未知操作符 1: " + ctx.op.text;
        }
    }

    // 加减操作符
    visitAddExpression(ctx) {
        switch (ctx.op.type) {
            case WhisperLanguageLexer.Add:
                return add(ctx);
            case WhisperLanguageLexer.Subtract:
                return subtract(ctx);
            default:
                throw "未知操作符 2: " + ctx.op.text;
        }
    }


    //赋值操作符
    // expression op=( '==' | '!=' ) expression             #eqExpression
    visitEqExpression(ctx) {
        switch (ctx.op.type) {
            case WhisperLanguageLexer.Equals:
                return eq(ctx);
            case WhisperLanguageLexer.NEquals:
                return nEq(ctx);
            default:
                throw "未知操作符: " + ctx.op.type;
        }
    }

    multiply( ctx) {
        var lhs = this.visit(ctx.expression(0));
        var rhs = this.visit(ctx.expression(1));
        if (lhs == null || rhs == null) {
            throw "表达式错误"+ctx;
        }

        // number * number
        if (lhs.isNumber() && rhs.isNumber()) {
            return new TLVal(lhs.asDouble() * rhs.asDouble());
        }

        // string * number
        if (lhs.isString() && rhs.isNumber()) {
            var str="";
            var stop = rhs.asInt();
            for (i = 0; i < stop; i++) {
                str=str+lhs.asString();
            }
            return new TLVal(str);
        }

        // list * number
        if (lhs.isList() && rhs.isNumber()) {
            var total = [];
            var stop = rhs.asInt();
            for (i = 0; i < stop; i++) {
                total[lhs.asList()]
            }
            return new TLVal(total);
        }
        throw "表达式错误"+ctx;
    }

    divide(ctx) {
        var lhs = this.visit(ctx.expression(0));
        var rhs = this.visit(ctx.expression(1));
        if (lhs.isNumber() && rhs.isNumber()) {
            return new TLVal(lhs.asDouble() / rhs.asDouble());
        }
        throw "表达式错误"+ctx;
    }

    modulus(ctx) {
        var lhs = this.visit(ctx.expression(0));
        var rhs = this.visit(ctx.expression(1));
        if (lhs.isNumber() && rhs.isNumber()) {
            return new TLVal(lhs.asDouble() % rhs.asDouble());
        }
        throw "表达式错误"+ctx;
    }

    add(ctx) {
        var lhs = this.visit(ctx.expression(0));
        var rhs = this.visit(ctx.expression(1));

        if (lhs == null || rhs == null) {
            throw "表达式错误"+ctx;
        }

        // number + number
        if (lhs.isNumber() && rhs.isNumber()) {
            return new TLVal(lhs.asDouble() + rhs.asDouble());
        }

        // list + any
        if (lhs.isList()) {
            var list = lhs.asList();
            list=[...list,...rhs];
            return new TLVal(list);
        }

        // string + any
        if (lhs.isString()) {
            return new TLVal(lhs.asString() + "" + rhs.toString());
        }

        // any + string
        if (rhs.isString()) {
            return new TLVal(lhs.toString() + "" + rhs.asString());
        }

        return new TLVal(lhs.toString() + rhs.toString());
    }

    subtract(ctx) {
        var lhs = this.visit(ctx.expression(0));
        var rhs = this.visit(ctx.expression(1));
        if (lhs.isNumber() && rhs.isNumber()) {
            return new TLVal(lhs.asDouble() - rhs.asDouble());
        }
        if (lhs.isList()) {
            var list = lhs.asList();
            //TODO 处理删除表达式
            list.remove(rhs);
            return new TLVal(list);
        }
        throw "表达式错误"+ctx;
    }

    gtEq(ctx) {
        var lhs = this.visit(ctx.expression(0));
        var rhs = this.visit(ctx.expression(1));
        if (lhs.isNumber() && rhs.isNumber()) {
            return new TLVal(lhs.asDouble() >= rhs.asDouble());
        }
        if (lhs.isString() && rhs.isString()) {
            return new TLVal(lhs.asString().compareTo(rhs.asString()) >= 0);
        }
        throw "表达式错误"+ctx;
    }

    ltEq(ctx) {
        var lhs = this.visit(ctx.expression(0));
        var rhs = this.visit(ctx.expression(1));
        if (lhs.isNumber() && rhs.isNumber()) {
            return new TLVal(lhs.asDouble() <= rhs.asDouble());
        }
        if (lhs.isString() && rhs.isString()) {
            return new TLVal(lhs.asString().compareTo(rhs.asString()) <= 0);
        }
        throw "表达式错误"+ctx;
    }

    gt(ctx) {
        var lhs = this.visit(ctx.expression(0));
        var rhs = this.visit(ctx.expression(1));
        if (lhs.isNumber() && rhs.isNumber()) {
            return new TLVal(lhs.asDouble() > rhs.asDouble());
        }
        if (lhs.isString() && rhs.isString()) {
            return new TLVal(lhs.asString().compareTo(rhs.asString()) > 0);
        }
        throw "表达式错误"+ctx;
    }

    lt(ctx) {
        var lhs = this.visit(ctx.expression(0));
        var rhs = this.visit(ctx.expression(1));
        if (lhs.isNumber() && rhs.isNumber()) {
            return new TLVal(lhs.asDouble() < rhs.asDouble());
        }
        if (lhs.isString() && rhs.isString()) {
            return new TLVal(lhs.asString().compareTo(rhs.asString()) < 0);
        }
        throw "表达式错误"+ctx;
    }

    eq(ctx) {
        var lhs = this.visit(ctx.expression(0));
        var rhs = this.visit(ctx.expression(1));
        if (lhs == null) {
            throw "表达式错误"+ctx;
        }
        return new TLVal(lhs.equals(rhs));
    }

    nEq(ctx) {
        var lhs = this.visit(ctx.expression(0));
        var rhs = this.visit(ctx.expression(1));
        return new TLVal(!lhs.equals(rhs));
    }



    visitAndExpression(ctx) {
        var lhs = this.visit(ctx.expression(0));
        var rhs = this.visit(ctx.expression(1));

        if (!lhs.isBoolean() || !rhs.isBoolean()) {
            throw "表达式错误"+ctx;
        }
        return new TLVal(lhs.asBoolean() && rhs.asBoolean());
    }

    // expression '||' expression               #orExpression
    visitOrExpression(ctx) {
        console.log("或者表达式")
        var lhs = this.visit(ctx.expression(0));
        var rhs = this.visit(ctx.expression(1));

        if (!lhs.isBoolean() || !rhs.isBoolean()) {
            throw "表达式错误"+ctx;
        }
        return new TLVal(lhs.asBoolean() || rhs.asBoolean());
    }

    // expression '?' expression ':' expression #ternaryExpression
    visitTernaryExpression(ctx) {
        var condition = this.visit(ctx.expression(0));
        if (condition.asBoolean()) {
            return this.visit(ctx.expression(1));
        } else {
            return this.visit(ctx.expression(2));
        }
    }

    // expression In expression                 #inExpression
    visitInExpression(ctx) {
        var lhs = this.visit(ctx.expression(0));
        var rhs = this.visit(ctx.expression(1));

        if (rhs.isList()) {
            for (var val in rhs.asList()) {
                if (val.equals(lhs)) {
                    return new TLVal(true);
                }
            }
            return new TLVal(false);
        }
        throw "表达式错误"+ctx;
    }

    // Number                                   #numberExpression
    visitNumberExpression(ctx) {
        return new TLVal(Double.valueOf(ctx.getText()));
    }

    // Bool                                     #boolExpression
    visitBoolExpression(ctx) {
        return new TLVal(Boolean.valueOf(ctx.getText()));
    }

    // Null                                     #nullExpression
    visitNullExpression(ctx) {
        return TLVal.NULL;
    }

    resolveIndexes(val, indexes) {
        for (ec in indexes) {
            var idx = this.visit(ec);
            if (!idx.isNumber() || (!val.isList() && !val.isString())) {
                throw "表达式错误"+ctx;
            }
            i = idx.asDouble().intValue();
            if (val.isString()) {
                val = new TLVal(val.asString().substring(i, i + 1));
            } else {
                val = val.asList().get(i);
            }
        }
        return val;
    }

    setAtIndex(ctx, indexes, val, newVal) {
        if (!val.isList()) {
            throw "表达式错误"+ctx;
        }
        for (i = 0; i < indexes.length - 1; i++) {
            var idx = this.visit(indexes.get(i));
            if (!idx.isNumber()) {
                throw "表达式错误"+ctx;
            }
            val = val.asList().get(idx.asDouble().intValue());
        }
        var idx = this.visit(indexes.get(indexes.length - 1));
        if (!idx.isNumber()) {
            throw "表达式错误"+ctx;
        }
        val.asList().set(idx.asDouble().intValue(), newVal);
    }

    // functionCall indexes?                    #functionCallExpression
    visitFunctionCallExpression(ctx) {
        var val = this.visit(ctx.functionCall());
        if (ctx.indexes() != null) {
            var exps = ctx.indexes().expression();
            val = resolveIndexes(val, exps);
        }
        return val;
    }

    // list indexes?                            #listExpression
    visitListExpression(ctx) {
        var val = this.visit(ctx.list());
        if (ctx.indexes() != null) {
            var exps = ctx.indexes().expression();
            val = resolveIndexes(val, exps);
        }
        return val;
    }

    // Identifier indexes?                      #identifierExpression
    visitIdentifierExpression(ctx) {
        var id = ctx.Identifier().getText();
        var val = this.scope.resolve(id);

        if (ctx.indexes() != null) {
            var exps = ctx.indexes().expression();
            val = resolveIndexes(val, exps);
        }
        return val;
    }

    // String indexes?                          #stringExpression
    visitStringExpression(ctx) {
        var text = ctx.getText();
        text = text.substring(1, text.length() - 1).replaceAll("\\\\(.)", "$1");
        var val = new TLVal(text);
        if (ctx.indexes() != null) {
            var exps = ctx.indexes().expression();
            val = resolveIndexes(val, exps);
        }
        return val;
    }

    // '(' expression ')' indexes?              #expressionExpression
    visitExpressionExpression(ctx){
        var val = this.visit(ctx.expression());
        if (ctx.indexes() != null) {
            var exps = ctx.indexes().expression();
            val = resolveIndexes(val, exps);
        }
        return val;
    }

    // Input '(' String? ')'                    #inputExpression
    // visitInputExpression(ctx) {
    //     var inputString = ctx.String();
    //     try {
    //         if (inputString != null) {
    //             String text = inputString.getText();
    //             text = text.substring(1, text.length() - 1).replaceAll("\\\\(.)", "$1");
    //             return new TLVal(new String(Files.readAllBytes(Paths.get(text))));
    //         } else {
    //             BufferedReader buffer = new BufferedReader(new InputStreamReader(System.in));
    //             return new TLVal(buffer.readLine());
    //         }
    //     } catch (IOException e) {
    //         throw new RuntimeException(e);
    //     }
    // }


    // assignment
    // : Identifier indexes? '=' expression
    // ;
    visitAssignment(ctx) {
        var newVal = this.visit(ctx.expression());
        if (ctx.indexes() != null) {
            var val = scope.resolve(ctx.Identifier().getText());
            var exps = ctx.indexes().expression();
            setAtIndex(ctx, exps, val, newVal);
        } else {
            var id = ctx.Identifier().getText();
            this.scope.assign(id, newVal);
        }
        return TLVal.VOID;
    }

    visitBuildInIdentifierFunctionCall(ctx) {
        var params = ctx.exprList() != null ? ctx.exprList().expression() : [];
        var id = ctx.BuildIdentifier().getText();
        var function1;
        if ((function1 = buildFunction.get(id)) != null) {
            var args = [];
            for ( param in params) {
                args.add(this.visit(param));
            }
            return function1.invoke(args);
        }
        throw "表达式错误"+ctx;
    }

    // Identifier '(' exprList? ')' #identifierFunctionCall
    visitIdentifierFunctionCall(ctx) {
        var params = ctx.exprList() != null ? ctx.exprList().expression() : [];
        var id = ctx.Identifier().getText() + params.size();
        var function1;

        if ((function1 = functions.get(id)) != null) {
            var args = [];
            for (Tparam in params) {
                args.add(this.visit(param));
            }
            return function1.invoke(args, functions, buildFunction);
        } else {
            throw "表达式错误"+ctx;
        }

    }

    // Println '(' expression? ')'  #printlnFunctionCall
    visitPrintlnFunctionCall(ctx) {
        if (ctx.expression() != null) {
            console.log(this.visit(ctx.expression()));
        } else {
            console.log();
        }
        return TLVal.VOID;
    }

    // Print '(' expression ')'     #printFunctionCall
    visitPrintFunctionCall(ctx) {
        console.log(this.visit(ctx.expression()));
        return TLVal.VOID;
    }

    // Assert '(' expression ')'    #assertFunctionCall
    visitAssertFunctionCall(ctx) {
        var value = this.visit(ctx.expression());

        if (!value.isBoolean()) {
            throw "表达式错误"+ctx;
        }

        if (!value.asBoolean()) {
            throw "Assert failed:" + ctx.expression().getText() +":" + ctx.start.getLine()+")";
        }

        return TLVal.VOID;
    }

    // Size '(' expression ')'      #sizeFunctionCall
    visitSizeFunctionCall(ctx) {
        var value = this.visit(ctx.expression());

        if (value.isString()) {
            return new TLVal(value.asString().length());
        }

        if (value.isList()) {
            return new TLVal(value.asList().size());
        }

        throw "表达式错误"+ctx;
    }

    // ifStatement
    //  : ifStat elseIfStat* elseStat? End
    //  ;
    //
    // ifStat
    //  : If expression Do block
    //  ;
    //
    // elseIfStat
    //  : Else If expression Do block
    //  ;
    //
    // elseStat
    //  : Else Do block
    //  ;
    visitIfStatement(ctx) {

        // if ...
        if (this.visit(ctx.ifStat().expression()).asBoolean()) {
            return this.visit(ctx.ifStat().block());
        }

        // else if ...
        for (i = 0; i < ctx.elseIfStat().length; i++) {
            if (this.visit(ctx.elseIfStat(i).expression()).asBoolean()) {
                return this.visit(ctx.elseIfStat(i).block());
            }
        }

        // else ...
        if (ctx.elseStat() != null) {
            return this.visit(ctx.elseStat().block());
        }

        return TLVal.VOID;
    }

    // block
    // : (statement | functionDecl)* (Return expression)?
    // ;
    visitBlock(ctx) {

        var scope = new Scope(this.scope, false); // create new local scope

        ctx.functionDecl().forEach(fdx=>{
            this.visit(fdx);
        })
      
        ctx.statement().forEach(sx=>{
            this.visit(sx);
        })

        var ex=new WhisperLanguageParser.ExpressionContext();
        if ((ex = ctx.expression()) != null) {
            returnValue.value = this.visit(ex);
            scope = scope.parent();
            throw returnValue;
        }
        this.scope = this.scope.parent;
        return TLVal.VOID;
    }

    // forStatement
    // : For Identifier '=' expression To expression OBrace block CBrace
    // ;
    visitForStatement( ctx) {
        var start = this.visit(ctx.expression(0)).asDouble().intValue();
        var stop = this.visit(ctx.expression(1)).asDouble().intValue();
        for (i = start; i <= stop; i++) {
            scope.assign(ctx.Identifier().getText(), new TLVal(i));
            var returnValue = this.visit(ctx.block());
            if (returnValue != TLVal.VOID) {
                return returnValue;
            }
        }
        return TLVal.VOID;
    }

    // whileStatement
    // : While expression OBrace block CBrace
    // ;
    visitWhileStatement(ctx) {
        while (this.visit(ctx.expression()).asBoolean()) {
            varreturnValue = this.visit(ctx.block());
            if (returnValue != TLVal.VOID) {
                return returnValue;
            }
        }
        return TLVal.VOID;
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
            console.info(this.visit(ctx.expression()).v)
        }
        return TLVal.VOID;
    }

    visitAssertFunctionCall(ctx){
        var v = this.visit(ctx.expression());
        if (!v.isBoolean()) {
            throw "不是boolean表达式";
        }
        if (!v.asBoolean()) {
            throw "无法转换为bool表达式:" + ctx.expression().getText() + " ("+""+":" + ctx.start.line+")";
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
        console.log("访问bool表达式")
        return new TLVal(ctx.getText().toLocaleLowerCase()=="true");
    }
    visitNumberExpression(ctx){
        return new TLVal(parseFloat(ctx.getText()));
    }
   

}