const main_grid = document.getElementById('main-grid')
let scoreElm = document.getElementById('score')
let score = 0
// let createCard
let arr = ['🍊','🍋','🍉','🍓']
let active1 = null
let active2 = null
// let card = document.querySelectorAll('.card')


//creating the cards
function createCradElm(){
    for(let i=1;i<=4;i++){
        arr.forEach(elm =>{
            let createCard = document.createElement('div')
            createCard.classList.add('card')
            main_grid.appendChild(createCard)

            if(elm == '🍊'){
                createCard.dataset.value=('🍊')
            }
            else if(elm == '🍋'){
                createCard.dataset.value=('🍋')
            }
            else if(elm == '🍉'){
                createCard.dataset.value=('🍉')
            }
            else{
                createCard.dataset.value=('🍓')
            }
        })
    }
}

//closing the cards if they are not matched
function closeCard(){
    setTimeout(()=>{
        active1.classList.remove('active')
        active2.classList.remove('active')
        active1.innerText=''
        active2.innerText=''
        active1 = null
        active2 = null
    },1000)
}

//removing the cards when matched
function removeCard(){
    setTimeout(()=>{
    active1.style.opacity = '0'
    active2.style.opacity = '0'
    active1.innerText=''
    active2.innerText=''
    active1 = null
    active2 = null
    score++
    scoreElm.innerHTML=`${score}`
    },1000)
}

// shuffleCard()
createCradElm()
let card = document.querySelectorAll('.card')
shuffleCard()

console.log(main_grid)

function shuffleCard(){
    card.forEach(elm => {
        let randomNumber = Math.floor(Math.random()*card.length)
        let temp = card[elm]
        card[elm] = card[randomNumber]
        card[randomNumber] = temp
    })
    
    console.log(card)
}


//adding the eventListener to the cards
card.forEach(elm => {
    elm.addEventListener('click',(e)=>{
        e.target.classList.add('active')
        if(e.target.getAttribute('data-value') == '🍊'){
            setTimeout(()=>e.target.innerText='🍊',500)
            // e.target.innerText='🍊'
        }
        else if(e.target.getAttribute('data-value') =='🍋'){
            setTimeout(()=>e.target.innerText='🍋',500)
        }
        else if(e.target.getAttribute('data-value') =='🍉'){
            setTimeout(()=>e.target.innerText='🍉',500)
        }
        else{
            setTimeout(()=>e.target.innerText='🍓',500)
        }


        if(active1 === null){
            active1 = e.target
        }
        else if(active2 === null){
            active2 = e.target
        }

        if(active1!== null && active2!== null){
            if(active1 == active2){
                closeCard()
            }
            else if(active1.getAttribute('data-value') == active2.getAttribute('data-value')){
                removeCard()
            }
            else{
                closeCard()
            }
        }
        
    })
})



