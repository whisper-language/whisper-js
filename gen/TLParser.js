// Generated from ./TL.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import TLListener from './TLListener.js';
import TLVisitor from './TLVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u00033\u010b\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0003\u0002\u0003\u0002\u0005",
    "\u0002\'\n\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0007",
    "\u0003-\n\u0003\f\u0003\u000e\u00030\u000b\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0005\u00036\n\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0005\u0004A\n\u0004\u0003\u0005\u0003\u0005\u0005\u0005",
    "E\n\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0005\u0006M\n\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0005\u0006S\n\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0005\u0006Y\n\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0005\u0006k\n\u0006\u0003\u0007\u0003\u0007\u0007\u0007",
    "o\n\u0007\f\u0007\u000e\u0007r\u000b\u0007\u0003\u0007\u0005\u0007u",
    "\n\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000b",
    "\u008d\n\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0007\u000e\u00a7\n\u000e\f\u000e\u000e",
    "\u000e\u00aa\u000b\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0007\u000f",
    "\u00af\n\u000f\f\u000f\u000e\u000f\u00b2\u000b\u000f\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u00be\n\u0010\u0003\u0010",
    "\u0003\u0010\u0005\u0010\u00c2\n\u0010\u0003\u0010\u0003\u0010\u0005",
    "\u0010\u00c6\n\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u00ca\n\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u00d0\n",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u00d5\n\u0010",
    "\u0003\u0010\u0005\u0010\u00d8\n\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0007\u0010\u00f8\n\u0010",
    "\f\u0010\u000e\u0010\u00fb\u000b\u0010\u0003\u0011\u0003\u0011\u0005",
    "\u0011\u00ff\n\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0006\u0012\u0107\n\u0012\r\u0012\u000e\u0012",
    "\u0108\u0003\u0012\u0002\u0003\u001e\u0013\u0002\u0004\u0006\b\n\f\u000e",
    "\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"\u0002\u0006\u0003",
    "\u0002\u001f!\u0003\u0002\u001d\u001e\u0004\u0002\u0017\u0018\u001b",
    "\u001c\u0003\u0002\u0015\u0016\u0002\u012a\u0002&\u0003\u0002\u0002",
    "\u0002\u0004.\u0003\u0002\u0002\u0002\u0006@\u0003\u0002\u0002\u0002",
    "\bB\u0003\u0002\u0002\u0002\nj\u0003\u0002\u0002\u0002\fl\u0003\u0002",
    "\u0002\u0002\u000ev\u0003\u0002\u0002\u0002\u0010|\u0003\u0002\u0002",
    "\u0002\u0012\u0083\u0003\u0002\u0002\u0002\u0014\u0088\u0003\u0002\u0002",
    "\u0002\u0016\u0093\u0003\u0002\u0002\u0002\u0018\u009d\u0003\u0002\u0002",
    "\u0002\u001a\u00a3\u0003\u0002\u0002\u0002\u001c\u00ab\u0003\u0002\u0002",
    "\u0002\u001e\u00d7\u0003\u0002\u0002\u0002 \u00fc\u0003\u0002\u0002",
    "\u0002\"\u0106\u0003\u0002\u0002\u0002$\'\u0005\u0004\u0003\u0002%\'",
    "\u0005\u0006\u0004\u0002&$\u0003\u0002\u0002\u0002&%\u0003\u0002\u0002",
    "\u0002\'(\u0003\u0002\u0002\u0002()\u0007\u0002\u0002\u0003)\u0003\u0003",
    "\u0002\u0002\u0002*-\u0005\u0006\u0004\u0002+-\u0005\u0014\u000b\u0002",
    ",*\u0003\u0002\u0002\u0002,+\u0003\u0002\u0002\u0002-0\u0003\u0002\u0002",
    "\u0002.,\u0003\u0002\u0002\u0002./\u0003\u0002\u0002\u0002/5\u0003\u0002",
    "\u0002\u00020.\u0003\u0002\u0002\u000212\u0007\u000b\u0002\u000223\u0005",
    "\u001e\u0010\u000234\u0007(\u0002\u000246\u0003\u0002\u0002\u000251",
    "\u0003\u0002\u0002\u000256\u0003\u0002\u0002\u00026\u0005\u0003\u0002",
    "\u0002\u000278\u0005\b\u0005\u000289\u0007(\u0002\u00029A\u0003\u0002",
    "\u0002\u0002:;\u0005\n\u0006\u0002;<\u0007(\u0002\u0002<A\u0003\u0002",
    "\u0002\u0002=A\u0005\f\u0007\u0002>A\u0005\u0016\f\u0002?A\u0005\u0018",
    "\r\u0002@7\u0003\u0002\u0002\u0002@:\u0003\u0002\u0002\u0002@=\u0003",
    "\u0002\u0002\u0002@>\u0003\u0002\u0002\u0002@?\u0003\u0002\u0002\u0002",
    "A\u0007\u0003\u0002\u0002\u0002BD\u00070\u0002\u0002CE\u0005\"\u0012",
    "\u0002DC\u0003\u0002\u0002\u0002DE\u0003\u0002\u0002\u0002EF\u0003\u0002",
    "\u0002\u0002FG\u0007)\u0002\u0002GH\u0005\u001e\u0010\u0002H\t\u0003",
    "\u0002\u0002\u0002IJ\u0007/\u0002\u0002JL\u0007&\u0002\u0002KM\u0005",
    "\u001c\u000f\u0002LK\u0003\u0002\u0002\u0002LM\u0003\u0002\u0002\u0002",
    "MN\u0003\u0002\u0002\u0002Nk\u0007\'\u0002\u0002OP\u00070\u0002\u0002",
    "PR\u0007&\u0002\u0002QS\u0005\u001c\u000f\u0002RQ\u0003\u0002\u0002",
    "\u0002RS\u0003\u0002\u0002\u0002ST\u0003\u0002\u0002\u0002Tk\u0007\'",
    "\u0002\u0002UV\u0007\u0003\u0002\u0002VX\u0007&\u0002\u0002WY\u0005",
    "\u001e\u0010\u0002XW\u0003\u0002\u0002\u0002XY\u0003\u0002\u0002\u0002",
    "YZ\u0003\u0002\u0002\u0002Zk\u0007\'\u0002\u0002[\\\u0007\u0004\u0002",
    "\u0002\\]\u0007&\u0002\u0002]^\u0005\u001e\u0010\u0002^_\u0007\'\u0002",
    "\u0002_k\u0003\u0002\u0002\u0002`a\u0007\u0006\u0002\u0002ab\u0007&",
    "\u0002\u0002bc\u0005\u001e\u0010\u0002cd\u0007\'\u0002\u0002dk\u0003",
    "\u0002\u0002\u0002ef\u0007\u0007\u0002\u0002fg\u0007&\u0002\u0002gh",
    "\u0005\u001e\u0010\u0002hi\u0007\'\u0002\u0002ik\u0003\u0002\u0002\u0002",
    "jI\u0003\u0002\u0002\u0002jO\u0003\u0002\u0002\u0002jU\u0003\u0002\u0002",
    "\u0002j[\u0003\u0002\u0002\u0002j`\u0003\u0002\u0002\u0002je\u0003\u0002",
    "\u0002\u0002k\u000b\u0003\u0002\u0002\u0002lp\u0005\u000e\b\u0002mo",
    "\u0005\u0010\t\u0002nm\u0003\u0002\u0002\u0002or\u0003\u0002\u0002\u0002",
    "pn\u0003\u0002\u0002\u0002pq\u0003\u0002\u0002\u0002qt\u0003\u0002\u0002",
    "\u0002rp\u0003\u0002\u0002\u0002su\u0005\u0012\n\u0002ts\u0003\u0002",
    "\u0002\u0002tu\u0003\u0002\u0002\u0002u\r\u0003\u0002\u0002\u0002vw",
    "\u0007\t\u0002\u0002wx\u0005\u001e\u0010\u0002xy\u0007\"\u0002\u0002",
    "yz\u0005\u0004\u0003\u0002z{\u0007#\u0002\u0002{\u000f\u0003\u0002\u0002",
    "\u0002|}\u0007\n\u0002\u0002}~\u0007\t\u0002\u0002~\u007f\u0005\u001e",
    "\u0010\u0002\u007f\u0080\u0007\"\u0002\u0002\u0080\u0081\u0005\u0004",
    "\u0003\u0002\u0081\u0082\u0007#\u0002\u0002\u0082\u0011\u0003\u0002",
    "\u0002\u0002\u0083\u0084\u0007\n\u0002\u0002\u0084\u0085\u0007\"\u0002",
    "\u0002\u0085\u0086\u0005\u0004\u0003\u0002\u0086\u0087\u0007#\u0002",
    "\u0002\u0087\u0013\u0003\u0002\u0002\u0002\u0088\u0089\u0007\b\u0002",
    "\u0002\u0089\u008a\u00070\u0002\u0002\u008a\u008c\u0007&\u0002\u0002",
    "\u008b\u008d\u0005\u001a\u000e\u0002\u008c\u008b\u0003\u0002\u0002\u0002",
    "\u008c\u008d\u0003\u0002\u0002\u0002\u008d\u008e\u0003\u0002\u0002\u0002",
    "\u008e\u008f\u0007\'\u0002\u0002\u008f\u0090\u0007\"\u0002\u0002\u0090",
    "\u0091\u0005\u0004\u0003\u0002\u0091\u0092\u0007#\u0002\u0002\u0092",
    "\u0015\u0003\u0002\u0002\u0002\u0093\u0094\u0007\f\u0002\u0002\u0094",
    "\u0095\u00070\u0002\u0002\u0095\u0096\u0007)\u0002\u0002\u0096\u0097",
    "\u0005\u001e\u0010\u0002\u0097\u0098\u0007\u000e\u0002\u0002\u0098\u0099",
    "\u0005\u001e\u0010\u0002\u0099\u009a\u0007\"\u0002\u0002\u009a\u009b",
    "\u0005\u0004\u0003\u0002\u009b\u009c\u0007#\u0002\u0002\u009c\u0017",
    "\u0003\u0002\u0002\u0002\u009d\u009e\u0007\r\u0002\u0002\u009e\u009f",
    "\u0005\u001e\u0010\u0002\u009f\u00a0\u0007\"\u0002\u0002\u00a0\u00a1",
    "\u0005\u0004\u0003\u0002\u00a1\u00a2\u0007#\u0002\u0002\u00a2\u0019",
    "\u0003\u0002\u0002\u0002\u00a3\u00a8\u00070\u0002\u0002\u00a4\u00a5",
    "\u0007*\u0002\u0002\u00a5\u00a7\u00070\u0002\u0002\u00a6\u00a4\u0003",
    "\u0002\u0002\u0002\u00a7\u00aa\u0003\u0002\u0002\u0002\u00a8\u00a6\u0003",
    "\u0002\u0002\u0002\u00a8\u00a9\u0003\u0002\u0002\u0002\u00a9\u001b\u0003",
    "\u0002\u0002\u0002\u00aa\u00a8\u0003\u0002\u0002\u0002\u00ab\u00b0\u0005",
    "\u001e\u0010\u0002\u00ac\u00ad\u0007*\u0002\u0002\u00ad\u00af\u0005",
    "\u001e\u0010\u0002\u00ae\u00ac\u0003\u0002\u0002\u0002\u00af\u00b2\u0003",
    "\u0002\u0002\u0002\u00b0\u00ae\u0003\u0002\u0002\u0002\u00b0\u00b1\u0003",
    "\u0002\u0002\u0002\u00b1\u001d\u0003\u0002\u0002\u0002\u00b2\u00b0\u0003",
    "\u0002\u0002\u0002\u00b3\u00b4\b\u0010\u0001\u0002\u00b4\u00b5\u0007",
    "\u001e\u0002\u0002\u00b5\u00d8\u0005\u001e\u0010\u0016\u00b6\u00b7\u0007",
    "\u001a\u0002\u0002\u00b7\u00d8\u0005\u001e\u0010\u0015\u00b8\u00d8\u0007",
    ".\u0002\u0002\u00b9\u00d8\u0007-\u0002\u0002\u00ba\u00d8\u0007\u0012",
    "\u0002\u0002\u00bb\u00bd\u0005\n\u0006\u0002\u00bc\u00be\u0005\"\u0012",
    "\u0002\u00bd\u00bc\u0003\u0002\u0002\u0002\u00bd\u00be\u0003\u0002\u0002",
    "\u0002\u00be\u00d8\u0003\u0002\u0002\u0002\u00bf\u00c1\u0005 \u0011",
    "\u0002\u00c0\u00c2\u0005\"\u0012\u0002\u00c1\u00c0\u0003\u0002\u0002",
    "\u0002\u00c1\u00c2\u0003\u0002\u0002\u0002\u00c2\u00d8\u0003\u0002\u0002",
    "\u0002\u00c3\u00c5\u00070\u0002\u0002\u00c4\u00c6\u0005\"\u0012\u0002",
    "\u00c5\u00c4\u0003\u0002\u0002\u0002\u00c5\u00c6\u0003\u0002\u0002\u0002",
    "\u00c6\u00d8\u0003\u0002\u0002\u0002\u00c7\u00c9\u00071\u0002\u0002",
    "\u00c8\u00ca\u0005\"\u0012\u0002\u00c9\u00c8\u0003\u0002\u0002\u0002",
    "\u00c9\u00ca\u0003\u0002\u0002\u0002\u00ca\u00d8\u0003\u0002\u0002\u0002",
    "\u00cb\u00cc\u0007&\u0002\u0002\u00cc\u00cd\u0005\u001e\u0010\u0002",
    "\u00cd\u00cf\u0007\'\u0002\u0002\u00ce\u00d0\u0005\"\u0012\u0002\u00cf",
    "\u00ce\u0003\u0002\u0002\u0002\u00cf\u00d0\u0003\u0002\u0002\u0002\u00d0",
    "\u00d8\u0003\u0002\u0002\u0002\u00d1\u00d2\u0007\u0005\u0002\u0002\u00d2",
    "\u00d4\u0007&\u0002\u0002\u00d3\u00d5\u00071\u0002\u0002\u00d4\u00d3",
    "\u0003\u0002\u0002\u0002\u00d4\u00d5\u0003\u0002\u0002\u0002\u00d5\u00d6",
    "\u0003\u0002\u0002\u0002\u00d6\u00d8\u0007\'\u0002\u0002\u00d7\u00b3",
    "\u0003\u0002\u0002\u0002\u00d7\u00b6\u0003\u0002\u0002\u0002\u00d7\u00b8",
    "\u0003\u0002\u0002\u0002\u00d7\u00b9\u0003\u0002\u0002\u0002\u00d7\u00ba",
    "\u0003\u0002\u0002\u0002\u00d7\u00bb\u0003\u0002\u0002\u0002\u00d7\u00bf",
    "\u0003\u0002\u0002\u0002\u00d7\u00c3\u0003\u0002\u0002\u0002\u00d7\u00c7",
    "\u0003\u0002\u0002\u0002\u00d7\u00cb\u0003\u0002\u0002\u0002\u00d7\u00d1",
    "\u0003\u0002\u0002\u0002\u00d8\u00f9\u0003\u0002\u0002\u0002\u00d9\u00da",
    "\f\u0014\u0002\u0002\u00da\u00db\u0007\u0019\u0002\u0002\u00db\u00f8",
    "\u0005\u001e\u0010\u0014\u00dc\u00dd\f\u0013\u0002\u0002\u00dd\u00de",
    "\t\u0002\u0002\u0002\u00de\u00f8\u0005\u001e\u0010\u0014\u00df\u00e0",
    "\f\u0012\u0002\u0002\u00e0\u00e1\t\u0003\u0002\u0002\u00e1\u00f8\u0005",
    "\u001e\u0010\u0013\u00e2\u00e3\f\u0011\u0002\u0002\u00e3\u00e4\t\u0004",
    "\u0002\u0002\u00e4\u00f8\u0005\u001e\u0010\u0012\u00e5\u00e6\f\u0010",
    "\u0002\u0002\u00e6\u00e7\t\u0005\u0002\u0002\u00e7\u00f8\u0005\u001e",
    "\u0010\u0011\u00e8\u00e9\f\u000f\u0002\u0002\u00e9\u00ea\u0007\u0014",
    "\u0002\u0002\u00ea\u00f8\u0005\u001e\u0010\u0010\u00eb\u00ec\f\u000e",
    "\u0002\u0002\u00ec\u00ed\u0007\u0013\u0002\u0002\u00ed\u00f8\u0005\u001e",
    "\u0010\u000f\u00ee\u00ef\f\r\u0002\u0002\u00ef\u00f0\u0007+\u0002\u0002",
    "\u00f0\u00f1\u0005\u001e\u0010\u0002\u00f1\u00f2\u0007,\u0002\u0002",
    "\u00f2\u00f3\u0005\u001e\u0010\u000e\u00f3\u00f8\u0003\u0002\u0002\u0002",
    "\u00f4\u00f5\f\f\u0002\u0002\u00f5\u00f6\u0007\u0011\u0002\u0002\u00f6",
    "\u00f8\u0005\u001e\u0010\r\u00f7\u00d9\u0003\u0002\u0002\u0002\u00f7",
    "\u00dc\u0003\u0002\u0002\u0002\u00f7\u00df\u0003\u0002\u0002\u0002\u00f7",
    "\u00e2\u0003\u0002\u0002\u0002\u00f7\u00e5\u0003\u0002\u0002\u0002\u00f7",
    "\u00e8\u0003\u0002\u0002\u0002\u00f7\u00eb\u0003\u0002\u0002\u0002\u00f7",
    "\u00ee\u0003\u0002\u0002\u0002\u00f7\u00f4\u0003\u0002\u0002\u0002\u00f8",
    "\u00fb\u0003\u0002\u0002\u0002\u00f9\u00f7\u0003\u0002\u0002\u0002\u00f9",
    "\u00fa\u0003\u0002\u0002\u0002\u00fa\u001f\u0003\u0002\u0002\u0002\u00fb",
    "\u00f9\u0003\u0002\u0002\u0002\u00fc\u00fe\u0007$\u0002\u0002\u00fd",
    "\u00ff\u0005\u001c\u000f\u0002\u00fe\u00fd\u0003\u0002\u0002\u0002\u00fe",
    "\u00ff\u0003\u0002\u0002\u0002\u00ff\u0100\u0003\u0002\u0002\u0002\u0100",
    "\u0101\u0007%\u0002\u0002\u0101!\u0003\u0002\u0002\u0002\u0102\u0103",
    "\u0007$\u0002\u0002\u0103\u0104\u0005\u001e\u0010\u0002\u0104\u0105",
    "\u0007%\u0002\u0002\u0105\u0107\u0003\u0002\u0002\u0002\u0106\u0102",
    "\u0003\u0002\u0002\u0002\u0107\u0108\u0003\u0002\u0002\u0002\u0108\u0106",
    "\u0003\u0002\u0002\u0002\u0108\u0109\u0003\u0002\u0002\u0002\u0109#",
    "\u0003\u0002\u0002\u0002\u001c&,.5@DLRXjpt\u008c\u00a8\u00b0\u00bd\u00c1",
    "\u00c5\u00c9\u00cf\u00d4\u00d7\u00f7\u00f9\u00fe\u0108"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class TLParser extends antlr4.Parser {

    static grammarFileName = "TL.g4";
    static literalNames = [ null, "'println'", "'print'", "'input'", "'assert'", 
                            "'size'", "'func'", "'if'", "'else'", "'return'", 
                            "'for'", "'while'", "'to'", "'do'", "'end'", 
                            "'in'", "'null'", "'||'", "'&&'", "'=='", "'!='", 
                            "'>='", "'<='", "'^'", "'!'", "'>'", "'<'", 
                            "'+'", "'-'", "'*'", "'/'", "'%'", "'{'", "'}'", 
                            "'['", "']'", "'('", "')'", "';'", "'='", "','", 
                            "'?'", "':'" ];
    static symbolicNames = [ null, "Println", "Print", "Input", "Assert", 
                             "Size", "Def", "If", "Else", "Return", "For", 
                             "While", "To", "Do", "End", "In", "Null", "Or", 
                             "And", "Equals", "NEquals", "GTEquals", "LTEquals", 
                             "Pow", "Excl", "GT", "LT", "Add", "Subtract", 
                             "Multiply", "Divide", "Modulus", "OBrace", 
                             "CBrace", "OBracket", "CBracket", "OParen", 
                             "CParen", "SColon", "Assign", "Comma", "QMark", 
                             "Colon", "Bool", "Number", "BuildIdentifier", 
                             "Identifier", "String", "Comment", "Space" ];
    static ruleNames = [ "parse", "block", "statement", "assignment", "functionCall", 
                         "ifStatement", "ifStat", "elseIfStat", "elseStat", 
                         "functionDecl", "forStatement", "whileStatement", 
                         "idList", "exprList", "expression", "list", "indexes" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = TLParser.ruleNames;
        this.literalNames = TLParser.literalNames;
        this.symbolicNames = TLParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 14:
    	    		return this.expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 18);
    		case 1:
    			return this.precpred(this._ctx, 17);
    		case 2:
    			return this.precpred(this._ctx, 16);
    		case 3:
    			return this.precpred(this._ctx, 15);
    		case 4:
    			return this.precpred(this._ctx, 14);
    		case 5:
    			return this.precpred(this._ctx, 13);
    		case 6:
    			return this.precpred(this._ctx, 12);
    		case 7:
    			return this.precpred(this._ctx, 11);
    		case 8:
    			return this.precpred(this._ctx, 10);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	parse() {
	    let localctx = new ParseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, TLParser.RULE_parse);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 34;
	            this.block();
	            break;

	        case 2:
	            this.state = 35;
	            this.statement();
	            break;

	        }
	        this.state = 38;
	        this.match(TLParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, TLParser.RULE_block);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << TLParser.Println) | (1 << TLParser.Print) | (1 << TLParser.Assert) | (1 << TLParser.Size) | (1 << TLParser.Def) | (1 << TLParser.If) | (1 << TLParser.For) | (1 << TLParser.While))) !== 0) || _la===TLParser.BuildIdentifier || _la===TLParser.Identifier) {
	            this.state = 42;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case TLParser.Println:
	            case TLParser.Print:
	            case TLParser.Assert:
	            case TLParser.Size:
	            case TLParser.If:
	            case TLParser.For:
	            case TLParser.While:
	            case TLParser.BuildIdentifier:
	            case TLParser.Identifier:
	                this.state = 40;
	                this.statement();
	                break;
	            case TLParser.Def:
	                this.state = 41;
	                this.functionDecl();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 46;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 51;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===TLParser.Return) {
	            this.state = 47;
	            this.match(TLParser.Return);
	            this.state = 48;
	            this.expression(0);
	            this.state = 49;
	            this.match(TLParser.SColon);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, TLParser.RULE_statement);
	    try {
	        this.state = 62;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 53;
	            this.assignment();
	            this.state = 54;
	            this.match(TLParser.SColon);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 56;
	            this.functionCall();
	            this.state = 57;
	            this.match(TLParser.SColon);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 59;
	            this.ifStatement();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 60;
	            this.forStatement();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 61;
	            this.whileStatement();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignment() {
	    let localctx = new AssignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, TLParser.RULE_assignment);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        this.match(TLParser.Identifier);
	        this.state = 66;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===TLParser.OBracket) {
	            this.state = 65;
	            this.indexes();
	        }

	        this.state = 68;
	        this.match(TLParser.Assign);
	        this.state = 69;
	        this.expression(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionCall() {
	    let localctx = new FunctionCallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, TLParser.RULE_functionCall);
	    var _la = 0; // Token type
	    try {
	        this.state = 104;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case TLParser.BuildIdentifier:
	            localctx = new BuildInIdentifierFunctionCallContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 71;
	            this.match(TLParser.BuildIdentifier);
	            this.state = 72;
	            this.match(TLParser.OParen);
	            this.state = 74;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << TLParser.Println) | (1 << TLParser.Print) | (1 << TLParser.Input) | (1 << TLParser.Assert) | (1 << TLParser.Size) | (1 << TLParser.Null) | (1 << TLParser.Excl) | (1 << TLParser.Subtract))) !== 0) || ((((_la - 34)) & ~0x1f) == 0 && ((1 << (_la - 34)) & ((1 << (TLParser.OBracket - 34)) | (1 << (TLParser.OParen - 34)) | (1 << (TLParser.Bool - 34)) | (1 << (TLParser.Number - 34)) | (1 << (TLParser.BuildIdentifier - 34)) | (1 << (TLParser.Identifier - 34)) | (1 << (TLParser.String - 34)))) !== 0)) {
	                this.state = 73;
	                this.exprList();
	            }

	            this.state = 76;
	            this.match(TLParser.CParen);
	            break;
	        case TLParser.Identifier:
	            localctx = new IdentifierFunctionCallContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 77;
	            this.match(TLParser.Identifier);
	            this.state = 78;
	            this.match(TLParser.OParen);
	            this.state = 80;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << TLParser.Println) | (1 << TLParser.Print) | (1 << TLParser.Input) | (1 << TLParser.Assert) | (1 << TLParser.Size) | (1 << TLParser.Null) | (1 << TLParser.Excl) | (1 << TLParser.Subtract))) !== 0) || ((((_la - 34)) & ~0x1f) == 0 && ((1 << (_la - 34)) & ((1 << (TLParser.OBracket - 34)) | (1 << (TLParser.OParen - 34)) | (1 << (TLParser.Bool - 34)) | (1 << (TLParser.Number - 34)) | (1 << (TLParser.BuildIdentifier - 34)) | (1 << (TLParser.Identifier - 34)) | (1 << (TLParser.String - 34)))) !== 0)) {
	                this.state = 79;
	                this.exprList();
	            }

	            this.state = 82;
	            this.match(TLParser.CParen);
	            break;
	        case TLParser.Println:
	            localctx = new PrintlnFunctionCallContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 83;
	            this.match(TLParser.Println);
	            this.state = 84;
	            this.match(TLParser.OParen);
	            this.state = 86;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << TLParser.Println) | (1 << TLParser.Print) | (1 << TLParser.Input) | (1 << TLParser.Assert) | (1 << TLParser.Size) | (1 << TLParser.Null) | (1 << TLParser.Excl) | (1 << TLParser.Subtract))) !== 0) || ((((_la - 34)) & ~0x1f) == 0 && ((1 << (_la - 34)) & ((1 << (TLParser.OBracket - 34)) | (1 << (TLParser.OParen - 34)) | (1 << (TLParser.Bool - 34)) | (1 << (TLParser.Number - 34)) | (1 << (TLParser.BuildIdentifier - 34)) | (1 << (TLParser.Identifier - 34)) | (1 << (TLParser.String - 34)))) !== 0)) {
	                this.state = 85;
	                this.expression(0);
	            }

	            this.state = 88;
	            this.match(TLParser.CParen);
	            break;
	        case TLParser.Print:
	            localctx = new PrintFunctionCallContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 89;
	            this.match(TLParser.Print);
	            this.state = 90;
	            this.match(TLParser.OParen);
	            this.state = 91;
	            this.expression(0);
	            this.state = 92;
	            this.match(TLParser.CParen);
	            break;
	        case TLParser.Assert:
	            localctx = new AssertFunctionCallContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 94;
	            this.match(TLParser.Assert);
	            this.state = 95;
	            this.match(TLParser.OParen);
	            this.state = 96;
	            this.expression(0);
	            this.state = 97;
	            this.match(TLParser.CParen);
	            break;
	        case TLParser.Size:
	            localctx = new SizeFunctionCallContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 99;
	            this.match(TLParser.Size);
	            this.state = 100;
	            this.match(TLParser.OParen);
	            this.state = 101;
	            this.expression(0);
	            this.state = 102;
	            this.match(TLParser.CParen);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ifStatement() {
	    let localctx = new IfStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, TLParser.RULE_ifStatement);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 106;
	        this.ifStat();
	        this.state = 110;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 107;
	                this.elseIfStat(); 
	            }
	            this.state = 112;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
	        }

	        this.state = 114;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===TLParser.Else) {
	            this.state = 113;
	            this.elseStat();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ifStat() {
	    let localctx = new IfStatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, TLParser.RULE_ifStat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 116;
	        this.match(TLParser.If);
	        this.state = 117;
	        this.expression(0);
	        this.state = 118;
	        this.match(TLParser.OBrace);
	        this.state = 119;
	        this.block();
	        this.state = 120;
	        this.match(TLParser.CBrace);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	elseIfStat() {
	    let localctx = new ElseIfStatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, TLParser.RULE_elseIfStat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 122;
	        this.match(TLParser.Else);
	        this.state = 123;
	        this.match(TLParser.If);
	        this.state = 124;
	        this.expression(0);
	        this.state = 125;
	        this.match(TLParser.OBrace);
	        this.state = 126;
	        this.block();
	        this.state = 127;
	        this.match(TLParser.CBrace);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	elseStat() {
	    let localctx = new ElseStatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, TLParser.RULE_elseStat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 129;
	        this.match(TLParser.Else);
	        this.state = 130;
	        this.match(TLParser.OBrace);
	        this.state = 131;
	        this.block();
	        this.state = 132;
	        this.match(TLParser.CBrace);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionDecl() {
	    let localctx = new FunctionDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, TLParser.RULE_functionDecl);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 134;
	        this.match(TLParser.Def);
	        this.state = 135;
	        this.match(TLParser.Identifier);
	        this.state = 136;
	        this.match(TLParser.OParen);
	        this.state = 138;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===TLParser.Identifier) {
	            this.state = 137;
	            this.idList();
	        }

	        this.state = 140;
	        this.match(TLParser.CParen);
	        this.state = 141;
	        this.match(TLParser.OBrace);
	        this.state = 142;
	        this.block();
	        this.state = 143;
	        this.match(TLParser.CBrace);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	forStatement() {
	    let localctx = new ForStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, TLParser.RULE_forStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 145;
	        this.match(TLParser.For);
	        this.state = 146;
	        this.match(TLParser.Identifier);
	        this.state = 147;
	        this.match(TLParser.Assign);
	        this.state = 148;
	        this.expression(0);
	        this.state = 149;
	        this.match(TLParser.To);
	        this.state = 150;
	        this.expression(0);
	        this.state = 151;
	        this.match(TLParser.OBrace);
	        this.state = 152;
	        this.block();
	        this.state = 153;
	        this.match(TLParser.CBrace);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	whileStatement() {
	    let localctx = new WhileStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, TLParser.RULE_whileStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 155;
	        this.match(TLParser.While);
	        this.state = 156;
	        this.expression(0);
	        this.state = 157;
	        this.match(TLParser.OBrace);
	        this.state = 158;
	        this.block();
	        this.state = 159;
	        this.match(TLParser.CBrace);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	idList() {
	    let localctx = new IdListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, TLParser.RULE_idList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 161;
	        this.match(TLParser.Identifier);
	        this.state = 166;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===TLParser.Comma) {
	            this.state = 162;
	            this.match(TLParser.Comma);
	            this.state = 163;
	            this.match(TLParser.Identifier);
	            this.state = 168;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	exprList() {
	    let localctx = new ExprListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, TLParser.RULE_exprList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 169;
	        this.expression(0);
	        this.state = 174;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===TLParser.Comma) {
	            this.state = 170;
	            this.match(TLParser.Comma);
	            this.state = 171;
	            this.expression(0);
	            this.state = 176;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 28;
	    this.enterRecursionRule(localctx, 28, TLParser.RULE_expression, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 213;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new UnaryMinusExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 178;
	            this.match(TLParser.Subtract);
	            this.state = 179;
	            this.expression(20);
	            break;

	        case 2:
	            localctx = new NotExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 180;
	            this.match(TLParser.Excl);
	            this.state = 181;
	            this.expression(19);
	            break;

	        case 3:
	            localctx = new NumberExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 182;
	            this.match(TLParser.Number);
	            break;

	        case 4:
	            localctx = new BoolExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 183;
	            this.match(TLParser.Bool);
	            break;

	        case 5:
	            localctx = new NullExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 184;
	            this.match(TLParser.Null);
	            break;

	        case 6:
	            localctx = new FunctionCallExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 185;
	            this.functionCall();
	            this.state = 187;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	            if(la_===1) {
	                this.state = 186;
	                this.indexes();

	            }
	            break;

	        case 7:
	            localctx = new ListExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 189;
	            this.list();
	            this.state = 191;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	            if(la_===1) {
	                this.state = 190;
	                this.indexes();

	            }
	            break;

	        case 8:
	            localctx = new IdentifierExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 193;
	            this.match(TLParser.Identifier);
	            this.state = 195;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	            if(la_===1) {
	                this.state = 194;
	                this.indexes();

	            }
	            break;

	        case 9:
	            localctx = new StringExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 197;
	            this.match(TLParser.String);
	            this.state = 199;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	            if(la_===1) {
	                this.state = 198;
	                this.indexes();

	            }
	            break;

	        case 10:
	            localctx = new ExpressionExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 201;
	            this.match(TLParser.OParen);
	            this.state = 202;
	            this.expression(0);
	            this.state = 203;
	            this.match(TLParser.CParen);
	            this.state = 205;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	            if(la_===1) {
	                this.state = 204;
	                this.indexes();

	            }
	            break;

	        case 11:
	            localctx = new InputExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 207;
	            this.match(TLParser.Input);
	            this.state = 208;
	            this.match(TLParser.OParen);
	            this.state = 210;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===TLParser.String) {
	                this.state = 209;
	                this.match(TLParser.String);
	            }

	            this.state = 212;
	            this.match(TLParser.CParen);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 247;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,23,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 245;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new PowerExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, TLParser.RULE_expression);
	                    this.state = 215;
	                    if (!( this.precpred(this._ctx, 18))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 18)");
	                    }
	                    this.state = 216;
	                    this.match(TLParser.Pow);
	                    this.state = 217;
	                    this.expression(18);
	                    break;

	                case 2:
	                    localctx = new MultExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, TLParser.RULE_expression);
	                    this.state = 218;
	                    if (!( this.precpred(this._ctx, 17))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 17)");
	                    }
	                    this.state = 219;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << TLParser.Multiply) | (1 << TLParser.Divide) | (1 << TLParser.Modulus))) !== 0))) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 220;
	                    this.expression(18);
	                    break;

	                case 3:
	                    localctx = new AddExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, TLParser.RULE_expression);
	                    this.state = 221;
	                    if (!( this.precpred(this._ctx, 16))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
	                    }
	                    this.state = 222;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===TLParser.Add || _la===TLParser.Subtract)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 223;
	                    this.expression(17);
	                    break;

	                case 4:
	                    localctx = new CompExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, TLParser.RULE_expression);
	                    this.state = 224;
	                    if (!( this.precpred(this._ctx, 15))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
	                    }
	                    this.state = 225;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << TLParser.GTEquals) | (1 << TLParser.LTEquals) | (1 << TLParser.GT) | (1 << TLParser.LT))) !== 0))) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 226;
	                    this.expression(16);
	                    break;

	                case 5:
	                    localctx = new EqExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, TLParser.RULE_expression);
	                    this.state = 227;
	                    if (!( this.precpred(this._ctx, 14))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
	                    }
	                    this.state = 228;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===TLParser.Equals || _la===TLParser.NEquals)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 229;
	                    this.expression(15);
	                    break;

	                case 6:
	                    localctx = new AndExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, TLParser.RULE_expression);
	                    this.state = 230;
	                    if (!( this.precpred(this._ctx, 13))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
	                    }
	                    this.state = 231;
	                    this.match(TLParser.And);
	                    this.state = 232;
	                    this.expression(14);
	                    break;

	                case 7:
	                    localctx = new OrExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, TLParser.RULE_expression);
	                    this.state = 233;
	                    if (!( this.precpred(this._ctx, 12))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
	                    }
	                    this.state = 234;
	                    this.match(TLParser.Or);
	                    this.state = 235;
	                    this.expression(13);
	                    break;

	                case 8:
	                    localctx = new TernaryExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, TLParser.RULE_expression);
	                    this.state = 236;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 237;
	                    this.match(TLParser.QMark);
	                    this.state = 238;
	                    this.expression(0);
	                    this.state = 239;
	                    this.match(TLParser.Colon);
	                    this.state = 240;
	                    this.expression(12);
	                    break;

	                case 9:
	                    localctx = new InExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, TLParser.RULE_expression);
	                    this.state = 242;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 243;
	                    this.match(TLParser.In);
	                    this.state = 244;
	                    this.expression(11);
	                    break;

	                } 
	            }
	            this.state = 249;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,23,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	list() {
	    let localctx = new ListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, TLParser.RULE_list);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 250;
	        this.match(TLParser.OBracket);
	        this.state = 252;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << TLParser.Println) | (1 << TLParser.Print) | (1 << TLParser.Input) | (1 << TLParser.Assert) | (1 << TLParser.Size) | (1 << TLParser.Null) | (1 << TLParser.Excl) | (1 << TLParser.Subtract))) !== 0) || ((((_la - 34)) & ~0x1f) == 0 && ((1 << (_la - 34)) & ((1 << (TLParser.OBracket - 34)) | (1 << (TLParser.OParen - 34)) | (1 << (TLParser.Bool - 34)) | (1 << (TLParser.Number - 34)) | (1 << (TLParser.BuildIdentifier - 34)) | (1 << (TLParser.Identifier - 34)) | (1 << (TLParser.String - 34)))) !== 0)) {
	            this.state = 251;
	            this.exprList();
	        }

	        this.state = 254;
	        this.match(TLParser.CBracket);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	indexes() {
	    let localctx = new IndexesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, TLParser.RULE_indexes);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 260; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 256;
	        		this.match(TLParser.OBracket);
	        		this.state = 257;
	        		this.expression(0);
	        		this.state = 258;
	        		this.match(TLParser.CBracket);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 262; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,25, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

TLParser.EOF = antlr4.Token.EOF;
TLParser.Println = 1;
TLParser.Print = 2;
TLParser.Input = 3;
TLParser.Assert = 4;
TLParser.Size = 5;
TLParser.Def = 6;
TLParser.If = 7;
TLParser.Else = 8;
TLParser.Return = 9;
TLParser.For = 10;
TLParser.While = 11;
TLParser.To = 12;
TLParser.Do = 13;
TLParser.End = 14;
TLParser.In = 15;
TLParser.Null = 16;
TLParser.Or = 17;
TLParser.And = 18;
TLParser.Equals = 19;
TLParser.NEquals = 20;
TLParser.GTEquals = 21;
TLParser.LTEquals = 22;
TLParser.Pow = 23;
TLParser.Excl = 24;
TLParser.GT = 25;
TLParser.LT = 26;
TLParser.Add = 27;
TLParser.Subtract = 28;
TLParser.Multiply = 29;
TLParser.Divide = 30;
TLParser.Modulus = 31;
TLParser.OBrace = 32;
TLParser.CBrace = 33;
TLParser.OBracket = 34;
TLParser.CBracket = 35;
TLParser.OParen = 36;
TLParser.CParen = 37;
TLParser.SColon = 38;
TLParser.Assign = 39;
TLParser.Comma = 40;
TLParser.QMark = 41;
TLParser.Colon = 42;
TLParser.Bool = 43;
TLParser.Number = 44;
TLParser.BuildIdentifier = 45;
TLParser.Identifier = 46;
TLParser.String = 47;
TLParser.Comment = 48;
TLParser.Space = 49;

TLParser.RULE_parse = 0;
TLParser.RULE_block = 1;
TLParser.RULE_statement = 2;
TLParser.RULE_assignment = 3;
TLParser.RULE_functionCall = 4;
TLParser.RULE_ifStatement = 5;
TLParser.RULE_ifStat = 6;
TLParser.RULE_elseIfStat = 7;
TLParser.RULE_elseStat = 8;
TLParser.RULE_functionDecl = 9;
TLParser.RULE_forStatement = 10;
TLParser.RULE_whileStatement = 11;
TLParser.RULE_idList = 12;
TLParser.RULE_exprList = 13;
TLParser.RULE_expression = 14;
TLParser.RULE_list = 15;
TLParser.RULE_indexes = 16;

class ParseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TLParser.RULE_parse;
    }

	EOF() {
	    return this.getToken(TLParser.EOF, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.enterParse(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.exitParse(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TLVisitor ) {
	        return visitor.visitParse(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TLParser.RULE_block;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	functionDecl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FunctionDeclContext);
	    } else {
	        return this.getTypedRuleContext(FunctionDeclContext,i);
	    }
	};

	Return() {
	    return this.getToken(TLParser.Return, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	SColon() {
	    return this.getToken(TLParser.SColon, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.exitBlock(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TLVisitor ) {
	        return visitor.visitBlock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TLParser.RULE_statement;
    }

	assignment() {
	    return this.getTypedRuleContext(AssignmentContext,0);
	};

	SColon() {
	    return this.getToken(TLParser.SColon, 0);
	};

	functionCall() {
	    return this.getTypedRuleContext(FunctionCallContext,0);
	};

	ifStatement() {
	    return this.getTypedRuleContext(IfStatementContext,0);
	};

	forStatement() {
	    return this.getTypedRuleContext(ForStatementContext,0);
	};

	whileStatement() {
	    return this.getTypedRuleContext(WhileStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.exitStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TLVisitor ) {
	        return visitor.visitStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssignmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TLParser.RULE_assignment;
    }

	Identifier() {
	    return this.getToken(TLParser.Identifier, 0);
	};

	Assign() {
	    return this.getToken(TLParser.Assign, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	indexes() {
	    return this.getTypedRuleContext(IndexesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.enterAssignment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.exitAssignment(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TLVisitor ) {
	        return visitor.visitAssignment(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionCallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TLParser.RULE_functionCall;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class AssertFunctionCallContext extends FunctionCallContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Assert() {
	    return this.getToken(TLParser.Assert, 0);
	};

	OParen() {
	    return this.getToken(TLParser.OParen, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	CParen() {
	    return this.getToken(TLParser.CParen, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.enterAssertFunctionCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.exitAssertFunctionCall(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TLVisitor ) {
	        return visitor.visitAssertFunctionCall(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TLParser.AssertFunctionCallContext = AssertFunctionCallContext;

class SizeFunctionCallContext extends FunctionCallContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Size() {
	    return this.getToken(TLParser.Size, 0);
	};

	OParen() {
	    return this.getToken(TLParser.OParen, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	CParen() {
	    return this.getToken(TLParser.CParen, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.enterSizeFunctionCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.exitSizeFunctionCall(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TLVisitor ) {
	        return visitor.visitSizeFunctionCall(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TLParser.SizeFunctionCallContext = SizeFunctionCallContext;

class PrintlnFunctionCallContext extends FunctionCallContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Println() {
	    return this.getToken(TLParser.Println, 0);
	};

	OParen() {
	    return this.getToken(TLParser.OParen, 0);
	};

	CParen() {
	    return this.getToken(TLParser.CParen, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.enterPrintlnFunctionCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.exitPrintlnFunctionCall(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TLVisitor ) {
	        return visitor.visitPrintlnFunctionCall(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TLParser.PrintlnFunctionCallContext = PrintlnFunctionCallContext;

class BuildInIdentifierFunctionCallContext extends FunctionCallContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	BuildIdentifier() {
	    return this.getToken(TLParser.BuildIdentifier, 0);
	};

	OParen() {
	    return this.getToken(TLParser.OParen, 0);
	};

	CParen() {
	    return this.getToken(TLParser.CParen, 0);
	};

	exprList() {
	    return this.getTypedRuleContext(ExprListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.enterBuildInIdentifierFunctionCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.exitBuildInIdentifierFunctionCall(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TLVisitor ) {
	        return visitor.visitBuildInIdentifierFunctionCall(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TLParser.BuildInIdentifierFunctionCallContext = BuildInIdentifierFunctionCallContext;

class IdentifierFunctionCallContext extends FunctionCallContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Identifier() {
	    return this.getToken(TLParser.Identifier, 0);
	};

	OParen() {
	    return this.getToken(TLParser.OParen, 0);
	};

	CParen() {
	    return this.getToken(TLParser.CParen, 0);
	};

	exprList() {
	    return this.getTypedRuleContext(ExprListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.enterIdentifierFunctionCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.exitIdentifierFunctionCall(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TLVisitor ) {
	        return visitor.visitIdentifierFunctionCall(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TLParser.IdentifierFunctionCallContext = IdentifierFunctionCallContext;

class PrintFunctionCallContext extends FunctionCallContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Print() {
	    return this.getToken(TLParser.Print, 0);
	};

	OParen() {
	    return this.getToken(TLParser.OParen, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	CParen() {
	    return this.getToken(TLParser.CParen, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.enterPrintFunctionCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.exitPrintFunctionCall(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TLVisitor ) {
	        return visitor.visitPrintFunctionCall(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TLParser.PrintFunctionCallContext = PrintFunctionCallContext;

class IfStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TLParser.RULE_ifStatement;
    }

	ifStat() {
	    return this.getTypedRuleContext(IfStatContext,0);
	};

	elseIfStat = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ElseIfStatContext);
	    } else {
	        return this.getTypedRuleContext(ElseIfStatContext,i);
	    }
	};

	elseStat() {
	    return this.getTypedRuleContext(ElseStatContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.enterIfStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.exitIfStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TLVisitor ) {
	        return visitor.visitIfStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IfStatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TLParser.RULE_ifStat;
    }

	If() {
	    return this.getToken(TLParser.If, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	OBrace() {
	    return this.getToken(TLParser.OBrace, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	CBrace() {
	    return this.getToken(TLParser.CBrace, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.enterIfStat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.exitIfStat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TLVisitor ) {
	        return visitor.visitIfStat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ElseIfStatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TLParser.RULE_elseIfStat;
    }

	Else() {
	    return this.getToken(TLParser.Else, 0);
	};

	If() {
	    return this.getToken(TLParser.If, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	OBrace() {
	    return this.getToken(TLParser.OBrace, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	CBrace() {
	    return this.getToken(TLParser.CBrace, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.enterElseIfStat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.exitElseIfStat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TLVisitor ) {
	        return visitor.visitElseIfStat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ElseStatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TLParser.RULE_elseStat;
    }

	Else() {
	    return this.getToken(TLParser.Else, 0);
	};

	OBrace() {
	    return this.getToken(TLParser.OBrace, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	CBrace() {
	    return this.getToken(TLParser.CBrace, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.enterElseStat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.exitElseStat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TLVisitor ) {
	        return visitor.visitElseStat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionDeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TLParser.RULE_functionDecl;
    }

	Def() {
	    return this.getToken(TLParser.Def, 0);
	};

	Identifier() {
	    return this.getToken(TLParser.Identifier, 0);
	};

	OParen() {
	    return this.getToken(TLParser.OParen, 0);
	};

	CParen() {
	    return this.getToken(TLParser.CParen, 0);
	};

	OBrace() {
	    return this.getToken(TLParser.OBrace, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	CBrace() {
	    return this.getToken(TLParser.CBrace, 0);
	};

	idList() {
	    return this.getTypedRuleContext(IdListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.enterFunctionDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.exitFunctionDecl(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TLVisitor ) {
	        return visitor.visitFunctionDecl(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ForStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TLParser.RULE_forStatement;
    }

	For() {
	    return this.getToken(TLParser.For, 0);
	};

	Identifier() {
	    return this.getToken(TLParser.Identifier, 0);
	};

	Assign() {
	    return this.getToken(TLParser.Assign, 0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	To() {
	    return this.getToken(TLParser.To, 0);
	};

	OBrace() {
	    return this.getToken(TLParser.OBrace, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	CBrace() {
	    return this.getToken(TLParser.CBrace, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.enterForStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.exitForStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TLVisitor ) {
	        return visitor.visitForStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WhileStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TLParser.RULE_whileStatement;
    }

	While() {
	    return this.getToken(TLParser.While, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	OBrace() {
	    return this.getToken(TLParser.OBrace, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	CBrace() {
	    return this.getToken(TLParser.CBrace, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.enterWhileStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.exitWhileStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TLVisitor ) {
	        return visitor.visitWhileStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IdListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TLParser.RULE_idList;
    }

	Identifier = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TLParser.Identifier);
	    } else {
	        return this.getToken(TLParser.Identifier, i);
	    }
	};


	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TLParser.Comma);
	    } else {
	        return this.getToken(TLParser.Comma, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.enterIdList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.exitIdList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TLVisitor ) {
	        return visitor.visitIdList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExprListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TLParser.RULE_exprList;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TLParser.Comma);
	    } else {
	        return this.getToken(TLParser.Comma, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.enterExprList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.exitExprList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TLVisitor ) {
	        return visitor.visitExprList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TLParser.RULE_expression;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class BoolExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Bool() {
	    return this.getToken(TLParser.Bool, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.enterBoolExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.exitBoolExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TLVisitor ) {
	        return visitor.visitBoolExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TLParser.BoolExpressionContext = BoolExpressionContext;

class NumberExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Number() {
	    return this.getToken(TLParser.Number, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.enterNumberExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.exitNumberExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TLVisitor ) {
	        return visitor.visitNumberExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TLParser.NumberExpressionContext = NumberExpressionContext;

class IdentifierExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Identifier() {
	    return this.getToken(TLParser.Identifier, 0);
	};

	indexes() {
	    return this.getTypedRuleContext(IndexesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.enterIdentifierExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.exitIdentifierExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TLVisitor ) {
	        return visitor.visitIdentifierExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TLParser.IdentifierExpressionContext = IdentifierExpressionContext;

class NotExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Excl() {
	    return this.getToken(TLParser.Excl, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.enterNotExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.exitNotExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TLVisitor ) {
	        return visitor.visitNotExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TLParser.NotExpressionContext = NotExpressionContext;

class OrExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	Or() {
	    return this.getToken(TLParser.Or, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.enterOrExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.exitOrExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TLVisitor ) {
	        return visitor.visitOrExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TLParser.OrExpressionContext = OrExpressionContext;

class UnaryMinusExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Subtract() {
	    return this.getToken(TLParser.Subtract, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.enterUnaryMinusExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.exitUnaryMinusExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TLVisitor ) {
	        return visitor.visitUnaryMinusExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TLParser.UnaryMinusExpressionContext = UnaryMinusExpressionContext;

class PowerExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	Pow() {
	    return this.getToken(TLParser.Pow, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.enterPowerExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.exitPowerExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TLVisitor ) {
	        return visitor.visitPowerExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TLParser.PowerExpressionContext = PowerExpressionContext;

class EqExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null; // Token;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	Equals() {
	    return this.getToken(TLParser.Equals, 0);
	};

	NEquals() {
	    return this.getToken(TLParser.NEquals, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.enterEqExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.exitEqExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TLVisitor ) {
	        return visitor.visitEqExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TLParser.EqExpressionContext = EqExpressionContext;

class AndExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	And() {
	    return this.getToken(TLParser.And, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.enterAndExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.exitAndExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TLVisitor ) {
	        return visitor.visitAndExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TLParser.AndExpressionContext = AndExpressionContext;

class InExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	In() {
	    return this.getToken(TLParser.In, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.enterInExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.exitInExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TLVisitor ) {
	        return visitor.visitInExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TLParser.InExpressionContext = InExpressionContext;

class StringExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	String() {
	    return this.getToken(TLParser.String, 0);
	};

	indexes() {
	    return this.getTypedRuleContext(IndexesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.enterStringExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.exitStringExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TLVisitor ) {
	        return visitor.visitStringExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TLParser.StringExpressionContext = StringExpressionContext;

class ExpressionExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	OParen() {
	    return this.getToken(TLParser.OParen, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	CParen() {
	    return this.getToken(TLParser.CParen, 0);
	};

	indexes() {
	    return this.getTypedRuleContext(IndexesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.enterExpressionExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.exitExpressionExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TLVisitor ) {
	        return visitor.visitExpressionExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TLParser.ExpressionExpressionContext = ExpressionExpressionContext;

class AddExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null; // Token;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	Add() {
	    return this.getToken(TLParser.Add, 0);
	};

	Subtract() {
	    return this.getToken(TLParser.Subtract, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.enterAddExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.exitAddExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TLVisitor ) {
	        return visitor.visitAddExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TLParser.AddExpressionContext = AddExpressionContext;

class CompExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null; // Token;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	GTEquals() {
	    return this.getToken(TLParser.GTEquals, 0);
	};

	LTEquals() {
	    return this.getToken(TLParser.LTEquals, 0);
	};

	GT() {
	    return this.getToken(TLParser.GT, 0);
	};

	LT() {
	    return this.getToken(TLParser.LT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.enterCompExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.exitCompExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TLVisitor ) {
	        return visitor.visitCompExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TLParser.CompExpressionContext = CompExpressionContext;

class NullExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Null() {
	    return this.getToken(TLParser.Null, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.enterNullExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.exitNullExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TLVisitor ) {
	        return visitor.visitNullExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TLParser.NullExpressionContext = NullExpressionContext;

class FunctionCallExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	functionCall() {
	    return this.getTypedRuleContext(FunctionCallContext,0);
	};

	indexes() {
	    return this.getTypedRuleContext(IndexesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.enterFunctionCallExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.exitFunctionCallExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TLVisitor ) {
	        return visitor.visitFunctionCallExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TLParser.FunctionCallExpressionContext = FunctionCallExpressionContext;

class MultExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null; // Token;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	Multiply() {
	    return this.getToken(TLParser.Multiply, 0);
	};

	Divide() {
	    return this.getToken(TLParser.Divide, 0);
	};

	Modulus() {
	    return this.getToken(TLParser.Modulus, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.enterMultExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.exitMultExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TLVisitor ) {
	        return visitor.visitMultExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TLParser.MultExpressionContext = MultExpressionContext;

class ListExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	list() {
	    return this.getTypedRuleContext(ListContext,0);
	};

	indexes() {
	    return this.getTypedRuleContext(IndexesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.enterListExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.exitListExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TLVisitor ) {
	        return visitor.visitListExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TLParser.ListExpressionContext = ListExpressionContext;

class TernaryExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	QMark() {
	    return this.getToken(TLParser.QMark, 0);
	};

	Colon() {
	    return this.getToken(TLParser.Colon, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.enterTernaryExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.exitTernaryExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TLVisitor ) {
	        return visitor.visitTernaryExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TLParser.TernaryExpressionContext = TernaryExpressionContext;

class InputExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Input() {
	    return this.getToken(TLParser.Input, 0);
	};

	OParen() {
	    return this.getToken(TLParser.OParen, 0);
	};

	CParen() {
	    return this.getToken(TLParser.CParen, 0);
	};

	String() {
	    return this.getToken(TLParser.String, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.enterInputExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.exitInputExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TLVisitor ) {
	        return visitor.visitInputExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TLParser.InputExpressionContext = InputExpressionContext;

class ListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TLParser.RULE_list;
    }

	OBracket() {
	    return this.getToken(TLParser.OBracket, 0);
	};

	CBracket() {
	    return this.getToken(TLParser.CBracket, 0);
	};

	exprList() {
	    return this.getTypedRuleContext(ExprListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.enterList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.exitList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TLVisitor ) {
	        return visitor.visitList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IndexesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TLParser.RULE_indexes;
    }

	OBracket = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TLParser.OBracket);
	    } else {
	        return this.getToken(TLParser.OBracket, i);
	    }
	};


	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	CBracket = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TLParser.CBracket);
	    } else {
	        return this.getToken(TLParser.CBracket, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.enterIndexes(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TLListener ) {
	        listener.exitIndexes(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TLVisitor ) {
	        return visitor.visitIndexes(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




TLParser.ParseContext = ParseContext; 
TLParser.BlockContext = BlockContext; 
TLParser.StatementContext = StatementContext; 
TLParser.AssignmentContext = AssignmentContext; 
TLParser.FunctionCallContext = FunctionCallContext; 
TLParser.IfStatementContext = IfStatementContext; 
TLParser.IfStatContext = IfStatContext; 
TLParser.ElseIfStatContext = ElseIfStatContext; 
TLParser.ElseStatContext = ElseStatContext; 
TLParser.FunctionDeclContext = FunctionDeclContext; 
TLParser.ForStatementContext = ForStatementContext; 
TLParser.WhileStatementContext = WhileStatementContext; 
TLParser.IdListContext = IdListContext; 
TLParser.ExprListContext = ExprListContext; 
TLParser.ExpressionContext = ExpressionContext; 
TLParser.ListContext = ListContext; 
TLParser.IndexesContext = IndexesContext; 
