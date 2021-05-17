import antlr4 from 'antlr4';

import TLParser from "../src/gen/TLParser"
import TLLexer from "../src/gen/TLLexer"
import EvalVisitor from '../src/evalvisitor';
import Scope from '../src/scope';

test('whisper-language test', () => {
    const fs = require('fs')
    try {
        const input = fs.readFileSync('case/boolExpr.whl', 'utf8')
        const chars = new antlr4.InputStream(input);
        const lexer = new TLLexer(chars);
        const tokens  = new antlr4.CommonTokenStream(lexer);
        const parser = new TLParser(tokens);
        parser.buildParseTrees = true;
        const tree = parser.parse();
        const visitor=new EvalVisitor(new Scope(undefined,false),{},{});
        visitor.visit(tree);
    } catch (err) {
        console.error(err)
    }

});