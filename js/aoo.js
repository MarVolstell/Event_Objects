      for(i = 0; i<16; i ++){
        let innerDiv = document.createElement("div")
        document.querySelector(".container").appendChild(innerDiv)
    }



function imSoCooked () {
    let one = Math.floor(Math.random() * 255)
    let two = Math.floor(Math.random() * 255)
    let three = Math.floor(Math.random() * 255)
    console.log(one)
    console.log(two)
    console.log(three)
    return `rgb(${one}, ${two}, ${three})`
}
for(let idk of document.querySelectorAll('.container div')){
    idk.addEventListener('click', (e)=>{
        e.target.style.backgroundColor = imSoCooked()
    })
}