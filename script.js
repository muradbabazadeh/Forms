"use strict";

function Person(ad,soyad,tevellud,email) {
    this.name=ad;
    this.surname=soyad;
    this.birthday=tevellud;
    this.email= email;
}
let personArray=[];
let name= document.querySelector("#inputName").value;
let surname =document.querySelector("#inputSurname").value;
let birthday= document.querySelector("#inputAge").value;
let age = 2019-birthday;
let mail = document.querySelector("#inputEmail").value;
function Push(){
    let person = new Person(name,surname,age,mail);
    let list = "<ul>";
    personArray.push(person);
    let id=0;
    for( let i=0;i<personArray.length;i++) {
        id++;
        list+="<li>"+id +"-"+name+"-"+surname+"-"+age+"-"+mail+"</li>";
    }
    list+="</ul>";
    document.querySelector("#personList").innerHTML=list;
}
function Validation(){
    if(name==""){
        alert("Ad daxil edin")
    };
    
}