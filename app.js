// const equation = x;
// function eqn(){


// let d = (b**2)-(4*a*c);
// let eqn1 = (-b - math.sqrt(d))/(2*a);
// let eqn2 = (-b+cmath.sqrt(d))/(2*a);
// }
// const obj = {name:'Val',car:'Acura'}


// FOR GENERATING MIN AND MAXI RANDOM NUMBER FROM PROMPT
// var mini = Number(prompt("Enter minimum value"));
// var maxi = Number(prompt("Enter Maximum value"));
// alert(generateRand(mini,maxi))
// function generateRand(min,max){
//     return Math.floor(Math.random() * (max-min))+min
// }
//ASSIGNMENT
// a program that check the time of the day and greets you according and calls your name


// CALCULATOR USING SWITCH
// let firstNumber = Number(prompt('input first Number'));

// let operator = prompt('input operator');

// let secondNumber = Number(prompt('input second Number'))
// let result;
// switch(operator){
//     case"+":
//     result = firstNumber + secondNumber;
//     break;

//     case"/":
//     result = firstNumber / secondNumber;
//     break;

//     case"-":
//     result = firstNumber - secondNumber;
//     break;
//     case"*":
//     result = firstNumber * secondNumber;
//     break;
// }
// alert(result);

// let age= prompt("Please enter your age");
// if(age<18){alert('Sorry you are not eligible')
// }else if(age > 18 && age < 21){
//         alert("You can enter but do not drink")
// }else if (age >= 21 && age<= 45){
//     alert('You are eligible to enter and drink')
// }else{
//     alert('you are advice to drink wine')
// }
// for( let i = -10; i <=10; i++){
//     console.log(i)
//     // alert(i)
// }
ChannelMergerNode
// let d = (b**2)-(4*a*c);
// let eqn1 = (-b - math.sqrt(d))/(2*a);
// let eqn2 = (-b+cmath.sqrt(d))/(2*a);
// 
function sub(){

    const submit = document.getElementById("btn1");
    const demop = document.getElementById("demo");
    const demopp = document.getElementById("demo2");

    submit.addEventListener('click', () =>{
        const a = document.getElementById("text1").value;
        const b = document.getElementById("text2").value;
        const c = document.getElementById("text3").value;

        if(a !== ''){
        if(b !== ''){
        if(c !== ''){
demo.style.color = 'green'
demo.style.fontSize = '20px'
demo2.style.color = 'green'
demo2.style.fontSize = '20px'
let d = (b**2)-(4*a*c);
if(  d >= 0 ){

    
    let eqn1 = (-b-(Math.sqrt(d)))/(2*a);
    let eqn2 = (-b+(Math.sqrt(d)))/(2*a);

      demop.innerHTML ="X1 ="+ eqn1.toFixed(3);
      demopp.innerHTML = "X2 ="+ eqn2.toFixed(3); 
}else{
    demo.innerHTML = "Not a Positive Number"
}

            }else{
                demo.style.color = 'red'
                demo.innerHTML = 'common Input  3 is required nah!'
                setTimeout(() => { demo.innerHTML = '' },4000)
            }


            // setTimeout(() => { 
            //     demo.innerHTML = ''
            // },4000)

        }else{
            demo.style.color = 'red'
            demo.innerHTML = 'Input  2 is required!'
            setTimeout(() => { demo.innerHTML = '' },4000)
        }
        }else{
            demo.style.color = 'red'
            demo.innerHTML = 'Input  1 is required!'
            setTimeout(() => { demo.innerHTML = '' },4000)
        }
    });
    // demo.innerHTML = str;
}
