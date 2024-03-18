// let x="ich liebe salsabel";
// let y=20;
// document.write(`My name is ${x} and My age is ${y}`)
// console.log(`My name is ${x} and My age is ${y}`)
// console.log(parseInt(" 4 ziad"))
// console.log(-"-5")
// console.log(x.startsWith("liebe",4))
// console.log(x.endsWith("salsabel",9))
// console.log(x.indexOf("l",5))
// console.log(x.lastIndexOf("l",16))
// console.log(x.includes("m",12))
// console.log(x.substr(0,6))

// let x = ["Ziad" , "Ahmed" ,"Tawfik" ,"Moamen" ,"Mikel"]
// for( i=(x.length - 1) ; i >= 0 ; i--){
//     console.log(x[i])
// }

// let cars = ["BMW" ,1,2,3,"Honda" ,2,1,45, "Marcedes","Opel"]
// let model = ["2020" , "2021" , "2022"]

// for(let i = 0 ; i<cars.length ; i++){
//     if(typeof cars[i] == "string"){
//         console.log(cars[i])
//         for(let j =0 ; j<model.length;j++){
//             console.log(model[j])
//         }
//         console.log("--------------")
//     }
    
// }
// for(let i = 0 ; i < cars.length ; i++){
//     console.log( "Cars : " + cars[i])
//     for( let j = 0 ; j < model.length ; j++){
//         console.log("Model : " + model[j])
//     }
//     console.log("-------------")
// }
// function yourage(Age){
//     let age = 2024 - Age 
//     return age
// }
// let x = yourage(prompt("What is your year : "))
// function agebydaysandhours(){
//     let days = x * 365
//     let hours = days * 24 
//     return console.log(`Your Age By Hours : ${hours} `)
// }
// let ziadage = agebydaysandhours()
// console.log(ziadage)
// let a1 = {
//     name_1 : "ziad"
// }
// let a2 = {
//     name_2 : "salsabel"
// }
// let a3 = Object.assign(a1,a2)
// a3.name_1="tawfik"
// console.log(a3.name_1)

// let element = document.getElementById('second');
// edit = element.previousElementSibling.innerHTML = "Salsabel"
// element.previousElementSibling.style.cssText = `color:red; background-color:#444; padding:20px; `
// element.style.cssText = `
// padding:10px;
// background-color:#777;
// color:#fff;
// border-left: 5px solid red;`
// console.log(element.previousSibling)

// x=["Ziad" ,"Tawfik" , "Ahmed" , "Moamen"]
// y=["20" , "21" , "22" , "24"]
// let container = document.createElement("div")
// document.body.appendChild(container)
// container.style.textAlign = "center"
// function cards(names , ages){
//     let card = document.createElement("div");
//     let name = document.createElement("h2")
//     let age = document.createElement("p")
//     let imgs = document.createElement("img")


//     //  -------------------------------- 
    
// //     let title = document.createTextNode(names)
// //     name.appendChild(title)
// //     let yourage = document.createTextNode(ages)
// //     age.appendChild(yourage)
// //     imgs.src = "ziad.jpg"
    
// //     // -------------------
// //     card.style.backgroundColor = "#444"
// //     name.style.color = "#fff"
// //     card.style.padding = "20px"
// //     card.style.marginBottom = "10px"
// //     card.style.marginRight = "10px"
// //     container.style.display = "flex"
// //     container.style.flexWrap = "wrap"
// //     imgs.style.width = "200px"
// //     age.style.fontSize = "26px"
// //     age.style.color = "#fff"

// //     // ----------------
// //     card.appendChild(name)
// //     card.appendChild(age)
// //     card.appendChild(imgs)
// //     // ----------------
// //     container.appendChild(card)
// // }
// // for (let i = 0 ; i < 4 ;i++)
// // {cards(x[i] , y[i])}
// // console.log(container)

// // -----------------------------
// let btn = document.getElementById("btn")
// btn.style.padding = "10px 30px"
// btn.style.display = "block"
// btn.style.margin = "20px auto"
// btn.style.border = "none"
// btn.style.cursor = "pointer"
// btn.style.transition = "0.3s"
// btn.addEventListener("click" , function(){
//     btn.style.backgroundColor = "blue"
// })
// btn.addEventListener("click" , function(){
//     btn.style.color = "white"
// })
// btn.addEventListener("click" , function(){
//     btn.style.padding = "15px 45px"
// })

// ----------------------------------------------


// let btn1 = document.getElementById("btn-1")
// let btn2 = document.getElementById("btn-2")
// let btn3 = document.getElementById("btn-3")
// let content = document.getElementById("content")
// let pragrapgh = document.getElementById("pragrapgh")
// let container = document.getElementById("container")
// container.style.display = "flex"
// pragrapgh.style.width = "100%"
// pragrapgh.style.height = "100px"
// pragrapgh.style.backgroundColor = "gold"
// btn1.addEventListener("click" , function(){
//     container.style.flexDirection = "column-reverse"
// })
// btn2.addEventListener("click" , function(){
//     content.style.position = "absolute"
// })
// btn3.addEventListener("click" , function(){
//     container.style.flexDirection = "column"
// })

// -------------------------------------------------


// let container = document.getElementById("container")

// let first = document.getElementById("first")
// let second = document.getElementById("second")
// let third = document.getElementById("third")
// let fourth = document.getElementById("fourth")
// let fifth = document.getElementById("fifth")
// let six = document.getElementById("six")
// third.onclick = function(){
//     container.innerHTML= `<img src="img/avatar-03.png">`
// }
// first.onclick = function(){
//     container.innerHTML= `<img src="img/avatar-01.png">`
// }
// second.onclick = function(){
//     container.innerHTML= `<img src="img/avatar-02.png">`
// }
// fourth.onclick = function(){
//     container.innerHTML= `<img src="img/avatar-04.png">`
// }
// fifth.onclick = function(){
//     container.innerHTML= `<img src="img/avatar-05.png">`
// }
// six.onclick = function(){
//     container.innerHTML= `<img src="img/avatar-06.png">`
// }

// -------------------------------------------------------
let title = document.querySelector(".title")
let turn ="x"
let squares = []
let draws =[]


function end(num1,num2,num3){
    document.getElementById(`item${num1}`).style.backgroundColor ="black"
    document.getElementById(`item${num2}`).style.backgroundColor ="black"
    document.getElementById(`item${num3}`).style.backgroundColor ="black"
    title.innerHTML = `${squares[num1]} winner`
    setInterval(function(){title.innerHTML += "."},1000)
    setTimeout(function(){location.reload()},5000) 
}
function draw(){
    for (let j = 1 ;j < 10 ;j++){
        draws[j] = document.getElementById(`item${j}`).innerHTML

    }
    if(draws[1] !=""  && draws[2] !=""  && draws[3] !=""  && draws[4] !="" && draws[5] !="" && draws[6] !="" && draws[7] !="" && draws[8] !="" && draws[9] !=""  ){
        setTimeout(function(){location.reload()},5000) 
        title.innerHTML = "Draw"
        setInterval(function(){title.innerHTML += "."},1000)
    }
}


function winner(){
    for (let i = 1 ;i < 10 ;i++){
       squares[i] = document.getElementById(`item${i}`).innerHTML
    }
     if(squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != "" ){
        end(1,2,3)
    }
    else if(squares[4] == squares[5] && squares[5] == squares[6] && squares[4] != "" ){
        end(4,5,6)
    }
    else if(squares[7] == squares[8] && squares[8] == squares[9] && squares[7] != "" ){
        end(7,8,9)
    }
    else if(squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != "" ){
        end(1,4,7)
    }
    else if(squares[2] == squares[5] && squares[5] == squares[8] && squares[2] != "" ){
        end(2,5,8)
    }
    else if(squares[3] == squares[6] && squares[6] == squares[9] && squares[3] != "" ){
        end(3,6,9)
    }
    else if(squares[1] == squares[5] && squares[5] == squares[9] && squares[1] != "" ){
        end(1,5,9)
    }
    else if(squares[3] == squares[5] && squares[5] == squares[7] && squares[3] != "" ){
        end(3,5,7)
    }
    else{
        draw()
    }
}






function game(id){
    let element = document.getElementById(id)
    if ( turn === "x" && element.innerHTML == ""){
        element.innerHTML = "X"
        turn = "o"
        title.innerHTML ="O"
    }
    else if (turn === "o" && element.innerHTML == "" ){
        element.innerHTML = "O"
        turn = "x"
        title.innerHTML ="X"
    }
    winner()
}
