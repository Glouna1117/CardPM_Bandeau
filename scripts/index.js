var isopened = 0;

function test() {
    if (isopened<1) {
        document.getElementById("titre").innerHTML = "";
        document.getElementById("titrebas").innerHTML = "<p>Ajouter une carte NFC</p>";
        isopened++
    } else {
        document.getElementById("titre").innerHTML = "<p>Ajouter une carte NFC</p>";
        document.getElementById("titrebas").innerHTML = "";
        isopened--
    }
}