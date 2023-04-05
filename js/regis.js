const showHiddenPass = (loginPass, loginEye) =>{
    const input = document.getElementById(loginPass),
        iconEye = document.getElementById(loginEye)

    iconEye.addEventListener('click', () =>{
        if(input.type === 'password') {
            input.type = 'text'

            iconEye.classList.add('ri-eye-line')
            iconEye.classList.remove('ri-eye-off-line')
        } else {
            input.type = 'password'

            iconEye.classList.remove('ri-eye-line')
            iconEye.classList.add('ri-eye-off-line')
        }
    })
}


showHiddenPass('register-pass','register-eye')
showHiddenPass('register-confirm-pass','register-confirm-eye')

// document.querySelectorAll(".login__input").forEach((element,value,parent) => {
//     element.addEventListener("focus",function(){
//         console.log("adada")
//         console.log(this.parentNode.querySelectorAll(".login__label")[0])

//     })
// });

document.getElementById('email_input').addEventListener("input", function(){
    console.log("no vo day roi ne")
})

// document.querySelectorAll(".login__input")[0].addEventListener("focus",function(){
//     console.log("hjh")
// })