let Gbtn =document.getElementById('gbtn');
let wa = document.getElementById("wa");
let copy = document.getElementById("copy");
let printJoke = document.getElementById('disjoke');
let url = 'https://icanhazdadjoke.com';

Gbtn.addEventListener('click',fetchTheJoke);
async function fetchTheJoke(){

    const jokes={
        headers:{
        'Accept':'Application/json',
    }
    }
const response =  fetch(url,jokes).then( response=>{
    return response.json() ;
}).then(data=>{
    // console.log(data.joke);
     var joke = data.joke;
    printJoke.innerHTML = joke;
}).catch(error=>{
    printJoke.innerHTML = "Try again";
})

  
}