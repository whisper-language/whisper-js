import antlr4 from 'antlr4';
import EvalVisitor from "./evalvisitor"

import TLParser from "./gen/TLParser"
import TLLexer from "./gen/TLLexer"

export default whisper = (code)=>{
    const input = "print('111');"
    const chars = new antlr4.InputStream(input);
    const lexer = new TLLexer(chars);
    const tokens  = new antlr4.CommonTokenStream(lexer);
    const parser = new TLParser(tokens);
    parser.buildParseTrees = true;
    const tree = parser.parse();
    
    const visitor=new EvalVisitor();
    visitor.visit(tree);
    console.log("结束");
}