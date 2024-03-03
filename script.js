function setup() {
    let footer = document.querySelector('footer');
    const year = new Date().getFullYear();
    footer.innerHTML = `<p>&copy; ${year} - Álvaro</p>`;
}

function submit() {
    const name = getValue("name");
    const email = getValue("email");
    const birthDate = formatDate(getValue("birthdate"));
    const sex = getSelectedOption("sex");

    let displayBox = document.querySelector("#display-box");

    let data = (displayBox.children[1]);
    data.innerHTML = `<strong>Nome</strong>: ${name}<br>
                      <strong>E-mail</strong>: ${email}<br>
                      <strong>Data de nascimento</strong>: ${birthDate}<br>
                      <strong>Sexo</strong>: ${sex}`;

    displayBox.style.display = "flex";


}

function getValue(elementId) {
    const element = document.querySelector(`#${elementId}`);
    const value = element.value ? element.value : "Valor não informado";

    return value;
}

function getSelectedOption(name) {
    let options = document.querySelectorAll(`input[name=${name}]`);

    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) return options[i].value;
    }

    return "Valor não informado";

}

function formatDate(date) {

    if (date === "Valor não informado") return date;

    [year, month, day] = date.split('-');

    return `${day}/${month}/${year}`;

}


setup();