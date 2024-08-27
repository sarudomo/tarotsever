document.addEventListener("DOMContentLoaded", ()=>{
    const card = Array.from(document.getElementsByClassName("card"))
    const img = document.querySelectorAll(".card img")

  

    const random  = (max,min) => Math.trunc(Math.random() * (max-min) + min);

    let cardkey = [];
    let reverse = [];
    for(i=0; i<8; i++){
        if(cardkey.indexOf(random(1,79)) === -1)
        {cardkey.push(random(1,79))}
     else {i--;}
    }

    console.log(cardkey)

    
    for(i=0; i<8; i++){
        reverse.push(Math.round(Math.random()))
    }

    let all;
    card.forEach((i,j) =>{
        i.addEventListener("click" , () => {
            all = `images/${cardkey[j]}-${reverse[j]}.jpg`
            i.querySelector("img").setAttribute("src" , all )
        })
        
    },{once:true});


})//end of script