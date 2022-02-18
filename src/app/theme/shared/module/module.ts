
export interface user{
    id: any;
    name:string;
    email:string;
}

export interface post{
    id:number
    title:string
    comments: comment[]
}
 export interface comment{
     id:number,
     description:string
 }