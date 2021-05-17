export default class TLVal {
    static NULL=new TLVal("null").constructor1();
    static VOID=new TLVal("void").constructor1();
    v;
    constructor1(){
        this.v={};
        return this;
    }
    constructor(v){
        if(v==null || v==undefined){
            throw "值初始化错误";
        }
        this.v=v;
        console.log("判断类型");
        if(!(this.isBoolean() || this.isList() || this.isNumber() || this.isString())) {
            throw "错误的数据类型"+v;
        }
    }
    //类型比较
    compareTo(that){

    }
    //
    equals(that){
        if(this==VOID || that==VOID){
            throw "void 无法比较";
        }
        if(this==that){
            return true;
        }else{
            return false;
        }
    }

    //类型转换
    asBoolean(){
        return !!this.v;
    }
    asInt(){
        return parseInt(this.v);
    }
    asLong(){
        return parseInt(this.v);
    }
    asDouble(){
        return parseFloat(this.v);
    }
    asList(){
        throw "未处理转换到列表";
    }
    asString(){
        return toString();
    }

    //类型判断
    isBoolean(){
        return true;
    }
    isList(){
        return true;
    }
    isNumber(){
        return true;
    }
    isString(){
        return true;
    }
    isNull(){
        this.v==TLVal.NULL;
    }
    isVoid(){
        this.v==TLVal.VOID;
    }

    toString() {
        return this.isNull() ? "NULL" : this.isVoid() ? "VOID" : this.v+"";
    }
}