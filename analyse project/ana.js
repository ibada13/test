let m = document.getElementById("m")
let r = document.getElementById("r")
let sm = document.getElementById("sm")
function td(){
        let d = [] ;
        x = m.value-1;
        let gg = '';
if(m.value<0 ){
 sm.innerHTML =  ("try again")
}
else if(m.value == 1){
    gg+=`
    <tr>
    <td>#1 </td>
    <td>the root of 1 is 1 </td>
    </tr>
    `  
    sm.innerHTML = gg;
}
else if (m.value > 0){


for(i=0;i<r.value;i++){
    x = 1/2*(x+(m.value/x))
    d[i]= x
}
console.log(i)
for(j=0;j<d.length;j++){
    {
    gg+=`
    <tr>
    <td class = "gr">#${j+1}</td>
    <td class ="test">the root of ${m.value} is near to ${d[j]}</td>
    </tr>
    `
}

    
}
sm.innerHTML = gg;

}

else if(m.value == 0){

sm.innerHTML = "";
}
}