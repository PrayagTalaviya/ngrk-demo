
interface Entity {
    id: any
}

export class storeUtil {
    //{1:{id:1,name:'prayag'},2:{id:2,name:xyz}}
    
    static normalize(entityArray:Entity[]) {
        
        return  entityArray.reduce((p,c) => {
            return {...p,...{[c.id]:c}}
        },{})
       
    }


    //[{obj1},{obj2}]
    static anNormalize(entity:any){
      
        if(!entity){
            return[] 
        }
        else{
            return Object.keys(entity).map(data => entity[data])
        }
    }

    static filterDuplicateIds(id:number[]){
        return id.filter((value,index,array) => {
            return index == array.indexOf(value)
        })
    }

    static removeKey(entity:any,id:any){
        const newObject = {...entity};
        delete newObject[id]
        return newObject;
    }

}