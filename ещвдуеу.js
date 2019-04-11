
let a='aaaabbbcccss';
soll(a);
function soll(a){
    let count=0;
    let b;
    let d=0;
     let arr=[];
    b=a.length;
    for(let i=0;i<b;i++){
            count++;
       if(a[i]!==a[i+1]){
           d++;
           arr[d]=count;
           d++;
           arr[d]=a[i];
           count=0;
       }
    }
    console.log(arr);
}
