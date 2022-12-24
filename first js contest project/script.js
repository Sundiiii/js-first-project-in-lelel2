let arr=[
    {id: 1, name:"john", age:"18",profession:"developer"},
    {id: 2, name:"jack", age:"20",profession:"developer"},
    {id: 3, name:"karen", age:"19",profession:"admin"},
]


let dropdown =document.getElementById("dropdown");
let result =document.getElementById("result");
let btn=document.getElementById("filterbtn");


function filterbyproffession(){
    let dropdownvalue=dropdown.value;
    console.log(dropdownvalue);
    arr.forEach((elem)=>{
        if(elem.profession===dropdownvalue){
            let div=document.createElement("div");
            div.innerText=
            elem.id+"name:"+elem.name+"age:"+elem.age+"profession:"+elem.profession+"
            result.append(div);
        }
    })
}
btn.addEventListener("click",filterbyproffession);