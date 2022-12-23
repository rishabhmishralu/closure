console.log("hreloo");
// function x(){
// var a=7
// function y(){
//     console.log(a);
// }
// y()
// }
// x()




// function Counter() {
//     var counter = 0;
//     function IncreaseCounter() {
//         return counter += 1;
//     };
//   return IncreaseCounter;
// }
// var counter = Counter();
// console.log(counter()); 
// console.log(counter()); 
// console.log(counter()); 
// console.log(counter())


function area(){
    var length=10
    function width(){
        var w=2
        return length*w
    }
    return width;
}
var area=area()
console.log(area());