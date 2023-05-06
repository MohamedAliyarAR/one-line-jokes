let Gbtn =document.getElementById('gbtn');
let wa = document.getElementById("whatsapp");
let copy = document.getElementById("copy");
let printJoke = document.getElementById('disjoke');
let url = 'https://icanhazdadjoke.com';
var joke='loading!!!';
printJoke.innerHTML=joke;
Gbtn.addEventListener('click',fetchTheJoke);

async function fetchTheJoke(){

    const jokes={
        headers:{
        'Accept':'Application/json',
    }
    }
const response = await fetch(url,jokes).then( response=>{
    return response.json() ;
}).then(data=>{

      joke = data.joke;
    printJoke.innerHTML = joke;
}).catch(error=>{
    printJoke.innerHTML = "Try again";
})

}
fetchTheJoke();

copy.addEventListener('click',()=>{
    navigator.clipboard.writeText(joke);
    console.log(joke);
})

wa.addEventListener('click',()=>{
    let url = `https://api.whatsapp.com/send/?text=${joke}`;
    open(url,'_blank')
    
})

