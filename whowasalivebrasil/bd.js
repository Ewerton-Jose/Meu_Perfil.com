const firebaseConfig = {
    apiKey: "AIzaSyCvZOw_HA3RZ7qWQvEEmIu6r6NutE6YWZw",
    authDomain: "whowasalive.firebaseapp.com",
    projectId: "whowasalive",
    storageBucket: "whowasalive.appspot.com",
    messagingSenderId: "975748404973",
    appId: "1:975748404973:web:faf1bcaee30933a6775ee4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore (exemplo)
const db = firebase.firestore();

function acharConteudo() {
    var ano = parseInt(document.getElementById("ano").value);
    var escrever = document.getElementById("personsList");

    escrever.innerHTML = "";
    firebase.firestore().collection('pessoas').orderBy('nasc', 'desc')
    .get()
    .then(snapshot => {
        const pessoas = snapshot.docs.map(doc => doc.data());
        pessoas.forEach(pessoa => {

        if (pessoa.nasc <= ano && pessoa.morte >= ano){
            escrever.innerHTML += `
        
            <div class="pessoas">
            <img src="${pessoa.foto}" alt="${pessoa.nome}">
            <h1>${pessoa.nome}</h1>
            <p>${ano - pessoa.nasc} anos</p>
            </div>
            `;
        };
        

        });
      })
    }

function post_person(){

    const conteudo = {
        nome: document.getElementById("nome").value,
        nasc: parseInt(document.getElementById("nasc").value),
        morte: parseInt(document.getElementById("morte").value),
        foto: document.getElementById("foto").value
    }

    firebase.firestore().collection("pessoas").add(conteudo).then(
        () => {
            window.alert("Documento adicionado com sucesso");        })
        .catch(() => {
            alert("Erro ao cadastrar");
        })

}