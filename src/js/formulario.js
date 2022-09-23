const form = document.getElementById("formCadastro");
const initForm = (qualForm) => {
    const formRequerido = document.getElementById(qualForm);
    const inputs = formRequerido.querySelectorAll("input");
    if(inputs.length > 0) {
        inputs.forEach((input) => {
            console.log(input.value);
        });
    }
}

const init = (qualForm) => {
    const formRequerido = document.getElementById(qualForm);
    const submit = formRequerido.querySelector("button[type=submit]");
    submit.addEventListener("click", (e) => {
        initForm(formRequerido);
    })
}

export default init;
