let score=new map([['PHP',56],['PHP',57],])
function* calc(sc,option){
    if (option=='fail'){
        for (let [key,value]of sc){
            if (value<60)yield [key,value];
        }
    }
    else{
        for(let [key,value]of sc){
            if (value<60)yield [key,value];
        }
    }
}
export default calc;
export{score};
