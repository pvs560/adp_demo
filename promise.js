// function test(){
//     console.log("test");
// }
// function dosomething(count){
// let p1 = new Promise((resolve,reject)=>{
// let msg ="hello";
// count--;
// //test();
// resolve(count);
// });

// p1.then((count)=>{
//     console.log("counter::",count);
//     if(count)
//     dosomething(count);
//     else
//     return;
// })
// }
// dosomething(5);
function matrix(r,c,data){
   let prime=0,composite=0;
    for(let i=0;i<r;i++){
        var rowdata = data[i].split(" ");
        for(let j=0;j<c;j++){
        let result = isPrime(Number(rowdata[j]));
        if(result){
            prime++;
        }
        else {
            composite++;
        }
        }
    }
    return prime+" "+composite;
}

    function isPrime(strlength) {
        for (var i = 2; i < strlength; i++)
            if (strlength % i === 0) return false;
        return strlength !== 1 && strlength !== 0;
    }

var str = "3\n1 1\n2\n1 1\n4\n3 1\n2\n4\n2";
var sam = str.split("\n");

console.log(sam);
var tc = Number(sam[0]);
var nextIndex =1;

for(var i=0; i< tc;i++){
  var rc = sam[nextIndex].split(" ");
  var r = Number(rc[0]),c=Number(rc[1]);
  nextIndex++;
  var data = sam.slice(nextIndex, nextIndex+r);
  nextIndex = nextIndex+r;
  let finalresult = matrix(r,c,data);
  console.log("saaa::",r,c,data,finalresult);
}