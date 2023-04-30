const showHiddenPass = (loginPass, loginEye) => {
    const input = document.getElementById(loginPass),
        iconEye = document.getElementById(loginEye)

    iconEye.addEventListener('click', () => {
        if (input.type === 'password') {
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


const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
    const label = input.nextElementSibling;

    input.addEventListener("focus", () => {
        label.style.top = "0px";
        label.style.bottom = "10px";
        label.style.left = "20px";
        label.style.fontSize = "16px";
        label.style.opacity = "1";
    });

    input.addEventListener("blur", () => {
        if (input.value === "") {
            label.style.top = "18px";
            label.style.bottom = "initial";
            label.style.left = "20px";
            label.style.fontSize = "initial";
            label.style.opacity = "initial";
        }
    });
});