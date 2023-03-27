const cep = document.querySelector("#cep")

cep.addEventListener("blur", (e) => {
    let search = cep.value.replace(".", "").replace("-", "")
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
        .then(response => {
            return response.json()
            console.log(response)
        })
        .then(data => {
            for (let prop in data) {
                if (document.querySelector(`#${prop}`)) {
                    document.querySelector(`#${prop}`).value = data[prop];
                    console.log(`${prop}: ${data[prop]}`);
                }

            }
        })
        .catch(error => console.error(error.message))
})
