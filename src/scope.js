export default class Scope {
    parent;
    vars;
    isFunc;
    constructor(parent,isFunc){
        this.parent=parent;
        this.isFunc=isFunc;
        this.vars=[];
    }
    assignParam(name,val){
        this.vars[name]=val;
    }
    assign(name,val){
        if(this.resolve(name,!this.isFunc)!=undefined){
            this.reAssign(name,val);
        }else{
            this.vars[name,val];
        }
    }
    resolve(name,checkParent){
        v=this.vars[name];
        if(v!=undefined){
            return v;
        }else if(checkParent && this.parent!=undefined){
            return this.parent.resolve(name,!this.parent.isFunc);
        }else {
            console.log("没有找到");
            return undefined;
        }
    }
    reAssign(name,val){
        if(this.vars[name]==undefined){
            this.vars[name]=val;
        }else if(this.parent!=undefined ){
            this.parent.reAssign(name,val);
        }
    }
    toString(){
        ret="";
        this.vars.forEach((v,i) => {
            ret+=""+i+" "+" v";
        });
    }
}