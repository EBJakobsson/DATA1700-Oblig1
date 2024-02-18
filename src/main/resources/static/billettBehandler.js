function checkValid() {
    const feilmeldingArray = document.getElementsByClassName("feilmelding");
    for (let melding of feilmeldingArray)
        melding.innerHTML = "";

    const antallStr = document.getElementById("antall").value;
    const antall = Number(antallStr);

    let valid = true;
    if (document.getElementById("dropMenu").value === "") {
        valid = false;
        document.getElementById("feilmeldingFilm").innerHTML = "Legg inn en film.";
    }
    if (antall <= 0) {
        valid = false;
        document.getElementById("feilmeldingAntall").innerHTML = "Skriv et antall over 0.";
    }
    if (document.getElementById("fornavn").value === "") {
        valid = false;
        document.getElementById("feilmeldingFor").innerHTML = "Skriv fornavn inn.";
    }
    else if (!/^[a-zA-Z]+$/.test(document.getElementById("fornavn").value)) {
        valid = false;
        document.getElementById("feilmeldingFor").innerHTML = "Skriv et gyldig fornavn."
    }
    if (document.getElementById("etternavn").value === "") {
        valid = false;
        document.getElementById("feilmeldingEtter").innerHTML = "Skriv etternavn inn.";
    }
    else if (!/^[a-zA-Z]+$/.test(document.getElementById("etternavn").value)) {
        valid = false;
        document.getElementById("feilmeldingEtter").innerHTML = "Skriv et gyldig etternavn."
    }
    if (document.getElementById("tlfnr").value === "") {
        valid = false;
        document.getElementById("feilmeldingTlf").innerHTML = "Skriv telefonnummeret inn.";
    }
    else if (!/^[0-9]{7,12}$/.test(document.getElementById("tlfnr").value)) {
        valid = false;
        document.getElementById("feilmeldingTlf").innerHTML = "Skriv et gyldig telefonnummer."
    }
    if (document.getElementById("epost").value === "") {
        valid = false;
        document.getElementById("feilmeldingEpost").innerHTML = "Skriv e-posten din inn.";
    }
    else if (!/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/.test(document.getElementById("epost").value)) {
        valid = false;
        document.getElementById("feilmeldingEpost").innerHTML = "Skriv en gyldig e-postadresse."
    }
    if (valid === true) {
        registrerBillett();
    }
}

let ut = "<table class='tb'><tr>" +
    "<th>Film</th>" +
    "<th>Antall</th>" +
    "<th>Fornavn</th>" +
    "<th>Etternavn</th>" +
    "<th>Telefonnummer</th>" +
    "<th>E-post</th>" +
    "</tr>";

//for å legge til tabellen for registeret på åpning uten jQuery
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("billettRegister").innerHTML += ut;
})

let utarray = []
function registrerBillett() {
    let output = ""
    const billett = {
        film : document.getElementById("dropMenu").value,
        antall : document.getElementById("antall").value,
        fornavn : document.getElementById("fornavn").value,
        etternavn : document.getElementById("etternavn").value,
        telefonnr : document.getElementById("tlfnr").value,
        epost : document.getElementById("epost").value
    }
    utarray.push(billett);

    for (let billett of utarray) {
        output += "<tr>" +
            "<td>" + billett.film + "</td>" +
            "<td>" + billett.antall + "</td>" +
            "<td>" + billett.fornavn + "</td>" +
            "<td>" + billett.etternavn + "</td>" +
            "<td>" + billett.telefonnr + "</td>" +
            "<td>" + billett.epost + "</td>" +
            "</tr>"
    }
    document.getElementById("billettRegister").innerHTML = ut + output;

    const inputBokser = document.getElementsByClassName("innVerdi");
    for (const i of inputBokser) {
        i.value = "";
    }
}

function slettRegister() {
    utarray = [];
    document.getElementById("billettRegister").innerHTML = ut;
}