"use strict";

let userInput=document.getElementById("date");
userInput.max=new Date().toISOString().split("T")[0];
let result=document.getElementById("result")

function calculateAge(){
    let birthDate=new Date(userInput.value);
    //30 11 2008
    let d1=birthDate.getDate();  // 30
    let m1=birthDate.getMonth();  //11
    let y1=birthDate.getFullYear();  //2008

    let today=new Date();

    let d2=today.getDate();   //22
    let m2=today.getMonth();  // 10
    let y2=today.getFullYear();  //2023

    let d3,m3,y3;

    y3=y2-y1;  //15

    if(m2>=m1){
        m3=m2-m1;  //5
    }else{
        y3--;  //14
        m3=1+m2-m1;  //-1
    }

    if(d2>=d1){
        d3=d2-d1;   //2
    }else{
        m3--;  //-2
        d3=getDaysinMonth(y1,m1)+d2-d1;  //
    }

    if(m3<0){
        m3=11;
        y3--;
    }
    result.innerHTML=`You are <span> ${y3} </span> years,<span> ${m3} </span> months and <span> ${d3} </span> days old`;
    // console.log(y3,m3,d3);
}

function getDaysinMonth(year,month){
    return new Date(year,month,0).getDate();  //ayda olan gunlerin sayidir
}

