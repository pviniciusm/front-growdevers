const api = axios.create({
    baseURL: "https://api-growdevers-pviniciusm.herokuapp.com",
});

console.log("teste");

api.get("/")
    .then((result) => {
        let array = result.data.data;

        for (let growdever of array) {
            document.querySelector(
                "#lista"
            ).innerHTML += `<li>Nome!!!: ${growdever.nome} - Turma ${growdever.turma}</li>`;
        }
    })
    .catch((err) => {
        console.log("err");
    });
