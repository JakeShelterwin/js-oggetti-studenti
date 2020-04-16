// DESCRIZIONE:
// - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
// -Stampare a schermo attraverso il for in tutte le proprietà;
// - Creare un array di oggetti di studenti.
// -Ciclare su tutti gli studenti e stampare per ognuno nome e cognome;
// - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

$(document).ready(function(){


  // dichiarazione e inizializzazione variabili che utilizzerò
  var inputNome, inputCognome, inputEta;

  //GESTIONE Handlebars
  //seleziono lo script in html
  var fonte = $(".gestioneStudenti").html();
  //grazie a compile dico al codice di andarsi a cercare {{}} così che posso
  //sostituirli con l'elemento che voglio
  var modelloStudente = Handlebars.compile(fonte);

  var studente = {
    "nomeStudente": "Simone",
    "cognomeStudente": "DeSimonis",
    "etaStudente": 27
  };
  var studenti = [
  {
    "nomeStudente": "Luca",
    "cognomeStudente": "Marini",
    "etaStudente": 20
  },
  {
    "nomeStudente": "Filippo",
    "cognomeStudente": "Giangiacomi",
    "etaStudente": 22
  },
  {
    "nomeStudente": "Flavio",
    "cognomeStudente": "Rimaldo",
    "etaStudente": 24
  }
];

  console.log(studenti);

  //stampo a schermo il contenuto dell'oggetto studente
  for (var key in studente) {
    console.log(studente[key]);
  }

  //appendo in html usando handlebar i valori di ciascun oggetto dell'array studenti
  for (var i = 0; i < studenti.length; i++) {
    console.log(studenti[i].nomeStudente +" "+ studenti[i].cognomeStudente);
    var aggiungeStudente = modelloStudente(studenti[i]);
    $(".grigliaStudenti").append(aggiungeStudente);
  }

  //quando clicco sul bottone prendo i valori dell'utente e aggiungo uno studente all'array
  $("#genera").click(
    function() {
      inputNome=$("#nomeInput").val();
      inputCognome=$("#cognomeInput").val();
      inputEta=parseInt($("#etaInput").val());

      //se tutti i valori sono validi li aggiungo all'array e in grafica con handelbar
      if ( inputNome!=="" && inputCognome!=="" && inputEta!==""){
        studenti.push({
          "nomeStudente": inputNome,
          "cognomeStudente": inputCognome,
          "etaStudente": inputEta
        });

        //aggiungo i valori ottenuti da input alla griglia degli studenti
        var j = studenti.length-1; //tolgo 1 così ottengo l'ultimo indice
        //voglio esserne sicuro
        console.log(j);
        //stampo l'ultimo oggetto aggiunto all'array
        console.log(studenti[j]);
        //aggiungo in html con handlebar il nuovo studente
        var aggiungeStudente = modelloStudente(studenti[j]);
        $(".grigliaStudenti").append(aggiungeStudente);
      }
      console.log(studenti);
    }
  );


});
