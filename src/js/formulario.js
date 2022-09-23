const form = document.getElementById("formCadastro");
const initForm = (qualForm) => {
    const formRequirido = document.getElementById(qualForm);
    const inputs = formRequirido.querySelectorAll("input");
    if(inputs.length > 0) {
        inputs.forEach((input) => {
            console.log(input.value);
        });
    }
}

export default initForm;
