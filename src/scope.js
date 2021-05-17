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
            this.vars[name]=val;
        }
    }
    resolve(name,checkParent){
        var v=this.vars[name];

        // console.log("没有找到"+(checkParent && this.parent!=undefined));
        if(v!=undefined){
            return v;
        }else if(checkParent && this.parent!=undefined){
            return this.parent.resolve(name,!this.parent.isFunc);
        }else {
            
            // console.log("没有找到"+checkParent+ "" +this.parent);

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