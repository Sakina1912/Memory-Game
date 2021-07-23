const main_grid = document.getElementById('main-grid')
let scoreElm = document.getElementById('score')
let score = 0
let active1 = null
let active2 = null
let arr1 = []

function createArr(){
    for(i=0;i<=3;i++){
        arr1.push('🍊')
        arr1.push('🍋')
        arr1.push('🍉')
        arr1.push('🍓')
    }
    return arr1
}

function shuffleCard(){
    arr1.sort(() => Math.random() - 0.5);
    console.log(arr1);
}


//creating the cards
function createCradElm(){
        arr1.forEach(elm =>{
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
    active1.style.cursor = 'context-menu'
    active2.style.cursor = 'context-menu'
    active1.innerText=''
    active2.innerText=''
    active1 = null
    active2 = null
    score++
    scoreElm.innerHTML=`${score}`
    },750)
}

createArr()
shuffleCard()
createCradElm()
let card = document.querySelectorAll('.card')
// shuffleCard()

// console.log(main_grid)



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



