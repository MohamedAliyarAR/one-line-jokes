let Gbtn =document.getElementById('gbtn');
let wa = document.getElementById("whatsapp");
let copy = document.getElementById("copy");
let printJoke = document.getElementById('disjoke');
let url = 'https://icanhazdadjoke.com';
var joke='loading!!!';  
printJoke.innerHTML=joke; //on loading it shows loading in joke division
Gbtn.addEventListener('click',fetchTheJoke); //event listener for rendering the joke 

async function fetchTheJoke(){
        //Accept header to receive the json data
    const jokes={
        headers:{
        'Accept':'Application/json',
    }
    }
const response = await fetch(url,jokes).then( response=>{
    return response.json() ;//returns the promise value
}).then(data=>{

      joke = data.joke; //contains the joke to render
    printJoke.innerHTML = joke; //rendered using DOM
}).catch(error=>{
    printJoke.innerHTML = "Try again";
})

}
fetchTheJoke(); // manually called for the first time 

copy.addEventListener('click',()=>{ //copy to clipboard event
  
    navigator.clipboard.writeText(joke);
    Swal.fire('Copied')
   
})

wa.addEventListener('click',()=>{ //share on whatsapp using whatsapp api 
    let url = `https://api.whatsapp.com/send/?text=${joke}`;
    open(url,'_blank')
    
})

