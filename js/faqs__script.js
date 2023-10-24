const unfold__buttons = document.getElementsByClassName("unfold__icon")
const question__boxs = document.getElementsByClassName("question__box")
const icons = document.getElementsByClassName("icon")
for (let unfold__button = 0; unfold__button < unfold__buttons.length; unfold__button++) {
    unfold__buttons[unfold__button].addEventListener('click',()=>{
        for (let index = 0; index < unfold__buttons.length; index++) {
            if (unfold__button != index){
                question__boxs[index].classList.remove('active')
                icons[index].classList.remove('close')
                icons[index].classList.add('more')
            }
        }
        question__boxs[unfold__button].classList.toggle('active')
        icons[unfold__button].classList.toggle('more')
        icons[unfold__button].classList.toggle('close')
    });
}