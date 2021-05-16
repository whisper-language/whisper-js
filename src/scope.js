export default class Scope {
    parent;
    vars;
    isFunc;
    Scope(parent,isFunc){
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
    resolve(name,isFunc){

        
    }
    reAssign(name,val){
        if(this.vars[name]==undefined){
            this.vars[name]=val;
        }else if(this.parent!=undefined ){
            this.parent.reAssign(name,val);
        }
    }
}