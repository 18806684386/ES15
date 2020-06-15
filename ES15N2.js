let citys1={provine:'广东',citys:['广州','韶关','深圳']};
let citys2={provine:'湖南',citys:['长沙','容阳','衡阳']};
function printCity(citySEt){
    console.log(`${citySet.province}省入选城市:`);
    let c=citySet.citys.join(',');
    console.log(c);
}
export {citys1,citys2};
export default printCity;