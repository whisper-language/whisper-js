import antlr4 from 'antlr4';


import EvalVisitor from '../src/evalvisitor';
import WhisperLanguageLexer from '../src/gen/WhisperLanguageLexer';
import WhisperLanguageParser from '../src/gen/WhisperLanguageParser';
import Scope from '../src/scope';

test('whisper-language test', () => {
    const fs = require('fs')
    try {
        const input = fs.readFileSync('case/test.whl', 'utf8')
        const chars = new antlr4.InputStream(input);
        const lexer = new WhisperLanguageLexer(chars);
        const tokens  = new antlr4.CommonTokenStream(lexer);
        const parser = new WhisperLanguageParser(tokens);
        parser.buildParseTrees = true;
        const tree = parser.parse();
        const visitor=new EvalVisitor(new Scope(undefined,false),{},{});
        visitor.visit(tree);
    } catch (err) {
        console.error(err)
    }

});