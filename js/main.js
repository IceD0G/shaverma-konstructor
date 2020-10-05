let nameMenu = document.querySelectorAll('.container-main-content-menu-components h3'),
    hidenMenu = document.querySelectorAll('.container-main-content-menu-components'),
    lavashMenu = document.querySelectorAll('.container-main-content-menu-lavash p'),
    saucesMenu = document.querySelectorAll('.container-main-content-menu-sauces p'),
    nameMenuIngridients = document.querySelectorAll('.container-main-content-menu-ingredients h4'),
    ingredientsMenuMeat = document.querySelectorAll('.container-main-content-menu-ingredients .meat p'),
    ingredientsMenuVegetabls = document.querySelectorAll('.container-main-content-menu-ingredients .vegetabls p'),
    arrow = document.querySelectorAll('.arrow')

//Показ меню и окрас загаловка
for (let i = 0; i < hidenMenu.length; i++) {
    nameMenu[i].addEventListener('click', () => {
        hidenMenu[i].children[1].classList.toggle('show')
        nameMenu[i].classList.toggle('active')
        arrow[i].classList.toggle('arrow-rewerb')
    })    
}
nameMenuIngridients[0].addEventListener('click', () => {
    document.querySelector('.container-main-content-menu-ingredients .meat').classList.toggle('show')
    nameMenuIngridients[0].classList.toggle('active')
    arrow[3].classList.toggle('arrow-rewerb')
})  
nameMenuIngridients[1].addEventListener('click', () => {
    document.querySelector('.container-main-content-menu-ingredients .vegetabls').classList.toggle('show')
    nameMenuIngridients[1].classList.toggle('active')
    arrow[4].classList.toggle('arrow-rewerb')
})  
//Показ при выборе лаваша

lavashMenu[0].addEventListener('click', () => {
    document.querySelector('.lavash-choose img').setAttribute('src', 'src/Lavashs/lavas.png')
})
lavashMenu[1].addEventListener('click', () => {
    document.querySelector('.lavash-choose img').setAttribute('src', 'src/Lavashs/lavas_sirn.png')
})

//Убрать лаваш
document.querySelector('.del-lavash').addEventListener('click', () =>{
    document.querySelector('.lavash-choose img').removeAttribute('src')
})
//Показ при выборе соуса
for (let i = 0; i < saucesMenu.length; i++) {
    saucesMenu[0].addEventListener('click', () => {
        document.querySelector('.sauces-choose img').setAttribute('src', 'src/Sauces/chesnoch.png')
    })
    saucesMenu[1].addEventListener('click', () => {
        document.querySelector('.sauces-choose img').setAttribute('src', 'src/Sauces/sirnii.png')
    })
    saucesMenu[2].addEventListener('click', () => {
        document.querySelector('.sauces-choose img').setAttribute('src', 'src/Sauces/tomato.png')
    })
}
//Убрать соус
document.querySelector('.del-sauces').addEventListener('click', () => {
    document.querySelector('.sauces-choose img').removeAttribute('src')
})
//Показ при выборе Мяса
for (let i = 0; i < ingredientsMenuMeat.length; i++) {
    ingredientsMenuMeat[0].addEventListener('click', () => {
        document.querySelector('.ingridients-choose-meat img').setAttribute('src', 'src/Ingridients/Meat/chiken.png')
    })
    ingredientsMenuMeat[1].addEventListener('click', () => {
        document.querySelector('.ingridients-choose-meat img').setAttribute('src', 'src/Ingridients/Meat/beef.png')
    })
    ingredientsMenuMeat[2].addEventListener('click', () => {
        document.querySelector('.ingridients-choose-meat img').setAttribute('src', 'src/Ingridients/Meat/pork.png')
    })
    ingredientsMenuMeat[3].addEventListener('click', () => {
        document.querySelector('.ingridients-choose-meat img').setAttribute('src', 'src/Ingridients/Meat/falafel.png')
    })
}
//Убрать лаваш
document.querySelector('.del-meat').addEventListener('click', () => {
    document.querySelector('.ingridients-choose-meat img').removeAttribute('src')
})
//показ овощей 
let veg1 = document.querySelector('.ingridients-choose-vegetabls .veg1')
let veg2 = document.querySelector('.ingridients-choose-vegetabls .veg2')
let veg3 = document.querySelector('.ingridients-choose-vegetabls .veg3')
let veg4 = document.querySelector('.ingridients-choose-vegetabls .veg4')
ingredientsMenuVegetabls[0].addEventListener('click', () => {
    veg1.classList.toggle('cucumbers')
})
ingredientsMenuVegetabls[1].addEventListener('click', () => {
    veg2.classList.toggle('tomatos')
})
ingredientsMenuVegetabls[2].addEventListener('click', () => {
    veg3.classList.toggle('onion')
})
ingredientsMenuVegetabls[3].addEventListener('click', () => {
    veg4.classList.toggle('carrot')
})