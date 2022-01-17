let studenti = [
    {
        nome: "Ugo",
        cognome: "Ughi",
        età: 2
    },
    {
        nome: "Pierpaolo",
        cognome: "Tomarelli",
        età: 24
    },
    {
        nome: "Giuseppe",
        cognome: "Merendino",
        età: 148
    },
    {
        nome: "Daniele",
        cognome: "Luca",
        età: 19
    },
    ];
    
    for(let i = 0; i < studenti.length; i++){
        console.log(studenti[i].nome);
        console.log(studenti[i].cognome);
    }
    
    console.log("parte 2");
    
    let nomeStudente =  prompt("Inserire il nome dello studente: ");
    let cognomeStudente = prompt("Inserire il cognome dello studente: ");
    let etàStudente = prompt("Inserire l'età dello studente");
    
    studenti.push({
    nome: nomeStudente,
    cognome: cognomeStudente,
    età: etàStudente
    });
    
    for(let i = 0; i < studenti.length; i++){
        console.log(studenti[i].nome);
        console.log(studenti[i].cognome);
        console.log(studenti[i].età);
    }