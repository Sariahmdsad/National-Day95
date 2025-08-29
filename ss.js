let b3=document.getElementById("b3")
let b4=document.getElementById("b4")
let b5=document.getElementById("b5")
//---------
let p1=document.getElementById("p1")
let p2=document.getElementById("p2")
let p3=document.getElementById("p3")
let p4=document.getElementById("p4")
let T=document.getElementById("T")
//-----------
let P15=document.getElementById("P15")
let P26=document.getElementById("P26")
let P37=document.getElementById("P37")
let P48=document.getElementById("P48")
let T4=document.getElementById("T4")
let s=0
let s2=0
let s3=0
let s4=0
let s5=0
let s6=0
let P11=document.getElementById("P11")
let P22=document.getElementById("P22")
let P33=document.getElementById("P33")
let P44=document.getElementById("P44")
let T3=document.getElementById("T3")
//------------
let b=document.getElementById("b1")
let ti=document.getElementById("b2")
//---------
let P1=document.getElementById("P1")
let P2=document.getElementById("P2")
let P3=document.getElementById("P3")
let P4=document.getElementById("P4")
let T2=document.getElementById("T2")
function titleA(){
ti.innerText="خطأ الجواب  بئر الخير:1937"
ti.style.color=""
    ti.style.background=""
}
//السوئل رقم 1
function F() {
    s++;
    if (s==1){
         titleA()
         b.style.textDecoration="line-through"
          b3.style.textDecoration="line-through"
           b4.style.textDecoration="line-through"
            b5.style.textDecoration="line-through"

    }
}
function F2() {
    s++;
    if(s==1){
         ti.innerText="صح"
         b.style.textDecoration="line-through"
          b3.style.textDecoration="line-through"
           b4.style.textDecoration="line-through"
            b5.style.textDecoration="line-through"

    }
    
     

    
}
//السوئل رقم2
function F4(){
    s2++;
    if (s2==1) {
        console.log("sss")
    T.innerText="صح"
     p1.style.textDecoration="line-through"
    p2.style.textDecoration="line-through"
    p3.style.textDecoration="line-through"
    p4.style.textDecoration="line-through"
    }
    

}
function F3(){
    s2++;
    if (s2==1) {
        console.log("sss")
    T.innerText=" خطأ الجواب الدوله السعوديه الثالثة"
     p1.style.textDecoration="line-through"
    p2.style.textDecoration="line-through"
    p3.style.textDecoration="line-through"
    p4.style.textDecoration="line-through"
    }
    

}
function F6(){
    s3++;
    if (s3==1) {
        console.log("sss")
    T2.innerText="صح"
    P1.style.textDecoration="line-through"
    P2.style.textDecoration="line-through"
    P3.style.textDecoration="line-through"
    P4.style.textDecoration="line-through"
    }
    

}
function F5(){
    s3++;
    if (s3==1) {
        console.log("sss")
    T2.innerText="خطا الجواب القمة"
    P1.style.textDecoration="line-through"
    P2.style.textDecoration="line-through"
    P3.style.textDecoration="line-through"
    P4.style.textDecoration="line-through"
    }

    

}
function F8(){
    s4++;
    if (s4==1) {
        console.log("sss")
    T3.innerText="صح"
    P11.style.textDecoration="line-through"
    P22.style.textDecoration="line-through"
    P33.style.textDecoration="line-through"
    P44.style.textDecoration="line-through"
    }
    

}
function F7(){
    s4++;
    if (s4==1) {
        console.log("sss")
    T3.innerText="خطا الجواب دار"
    P11.style.textDecoration="line-through"
    P22.style.textDecoration="line-through"
    P33.style.textDecoration="line-through"
    P44.style.textDecoration="line-through"
    }
}
function F10() {
    s5++;
    if (s5==1) {
        console.log("sss")
    T4.innerText="صح"
    P15.style.textDecoration="line-through"
    P26.style.textDecoration="line-through"
    P37.style.textDecoration="line-through"
    P48.style.textDecoration="line-through"
    }
    
} 
    


function F9(){
    s5++;
    if (s5==1) {
        console.log("sss")
    T4.innerText="خطأ الجواب عبد العزيز ال سعود"
    P15.style.textDecoration="line-through"
    P26.style.textDecoration="line-through"
    P37.style.textDecoration="line-through"
    P48.style.textDecoration="line-through"
    }
}