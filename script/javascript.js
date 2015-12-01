/**
 * Created by Henk Van Der Klis on 18-11-2015.
 */
alert("U gaat beginnen met het helpdeks formulier!");
vraagnaam();
function vraagnaam() {
    naam= prompt("Wat is uw naam?");
    if (naam.length === 0){
        alert("U heeft geen naam ingevoert");
        vraagnaam();
    }
    else {
        document.write("<br />");
        document.write("Klant informatie");
        document.write("<pre id=content>");
        document.write("De naam van de klant is: ");
        document.write(naam);
        document.write("<br />");
        datuminvullen();
    }
}
function datuminvullen() {
    datum= prompt("Vul de datum in (dd-mm-jjjj)");
    if (datum <= 10) {
        alert("U bent vergeten de datum in te vullen of heeft het niet correct gedaan.");
        datuminvullen();
    }
    else {
        document.write("De datum is:  ");
        document.write(datum);
        document.write("<br />");
        modemsoort();
    }
}
function modemsoort(){
    soort= prompt("Vul het modemtype in.");
    if (soort.length === 0){
        alert("U bent vergeten het modemtype in te vullen.");
        modemsoort();
    }
    else {
        document.write("Het modum type is:  ");
        document.write(soort);
        document.write("</pre>");
        internetklacht();
    }
}

function klacht(){
    var klacht = confirm("Kunt u naar nu.nl browsen?");
    if (klacht === true) {
        document.write("<br />");
        document.write("<br />");
        document.write("Klant kan naar nu.nl.  ");
        document.write("<br />");
        herladen();
    }
    else {
        document.write("<br />");
        document.write("Klant kan niet naar nu.nl.  ");
        document.write("</pre>");
        internetbellen();
    }
}
function herladen(){
    var herladen = confirm("Herlaad de pagina snel als u op f5 drukt?");
    if (herladen === true){
        document.write("De pagina reageert snel na het herladen.");
        document.write("<br />");
        document.write("U kunt browsen naar nu.nl en uw pagina laad snel.");
        document.write("<br />");
        document.write("U heeft geen problemen met het internet.");
        document.write("<br />");
        document.write("* Browsen naar www.nu.nl lukt.");
        document.write("<br />");
        document.write("* De pagina laad snel.");
        document.write("</pre>");
        internetbellen();
    }
    else {
        document.write("fail");
        document.write("</pre>");
        internetbellen();
    }
}
function internetbellen(){
    var bellen = confirm("Heeft u een probleem met het internet en bellen?");
    if (bellen === true){
        document.write("</pre>");
        document.write("Internet en bellen");
        document.write("<pre id=content>");
        document.write("De klant heeft een probleem met het bellen.");
        kiestoon();
    }
    else{
        document.write("</pre>");
        document.write("Internet en bellen");
        document.write("<pre id=content>");
        document.write("De klant heeft geen probleem met het bellen.");
        allesin1();
    }
}
function kiestoon(){
    var kiestoon = confirm("Hoort u een kiestoon?  ");
    if (kiestoon === true){
        document.write("<br />");
        document.write("De klant hoort een kiestoon.");
        document.write("<br />");
        mobielbellen();
    }
    else{
        document.write("<br />");
        document.write("De klant hoort geen kiestoon.");
        document.write("<br />");
        mobielbellen();
    }
}

function internetklacht(){
    var internetklacht = confirm("Heeft u een probleem met het internet.");
    if (internetklacht === false){
        document.write("</pre>");
        document.write("Internet");
        document.write("<pre id=content>");
        document.write("De klant heeft geen probleem met het internet.");
        document.write("<br />");
        document.write("</pre>");
        internetbellen();
    }
    else {
        document.write("</pre>");
        document.write("Internet");
        document.write("<pre id=content>");
        document.write("De klant heeft een probleem met het internet.");
        klacht();

    }
}
function mobielbellen(){
    var mobielbellen = confirm("Kunt u uzelf bellen op een mobiel nummer?");
    if (mobielbellen === true){
        document.write("De klant kan van vast naar mobiel bellen.");
        document.write("<br />");
        mobielbellen2();
    }
    else{
        document.write("De klant kan niet van vast naar mobiel bellen.");
        document.write("<br />");
        mobielbellen2();
    }
}
function mobielbellen2(){
    var mobielbellen2 = confirm("Kunt u uzelf bellen op een mobiel nummer?");
    if (mobielbellen2 === true){
        document.write("De klant kan van mobiel naar vast bellen.");
        document.write("<br />");
        document.write("U heeft een kiestoon, u kunt bellen en gebeld worden.");
        document.write("<br />");
        document.write(" U heeft geen problemen met bellen en internet.");
        document.write("<br />");
        document.write("*  Hoort een kiestoon.");
        document.write("<br />");
        document.write("*  Kan van vast naar mobiel bellen.");
        document.write("<br />");
        document.write("*  Kan van mobiel naar vast bellen.");
        document.write("</pre>");
        allesin1();
    }
    else{
        document.write("De klant kan niet van mobiel naar vast bellen.");
        document.write("<br />");
        document.write("<br />");
        document.write("U heeft een kiestoon, u kunt bellen en gebeld worden. U heeft geen problemen met bellen en internet.");
        document.write("<br />");
        document.write("*  Hoort een kiestoon.");
        document.write("<br />");
        document.write("*  Kan van vast naar mobiel bellen.");
        document.write("<br />");
        document.write("*  Kan van mobiel naar vast bellen.");
        document.write("</pre>");
        allesin1();
    }
}
function allesin1(){
    var  allesin1 = confirm("Heeft u een klacht over Internet, Bellen en Televisie?");
    if (allesin1 === true){
        document.write("</pre>");
        document.write("Internet, Bellen en Televisie");
        document.write("<pre id=content>");
        document.write("De klant heeft een probleem met Internet, Bellen en Televisie.");
        document.write("<br />");
        document.write("<br />");
        tvaantal2();
    }
    else{
        document.write("</pre>");
        document.write("Internet, Bellen en Televisie");
        document.write("<pre id=content>");
        document.write("De klant heeft geen probleem met Internet, Bellen en Televisie.");
        document.write("</pre>");
        finish();
    }
}
function tvaantal2(){
    tvaantal = prompt("Aantal televisie toestellen?");
    if (tvaantal <= 1) {
        alert("U heeft niks ingevult");
        tvaantal2();
    }
    else{
        document.write("Aantal Televisie's ");
        document.write(tvaantal);
        document.write("<br />");
        splitter();
    }
}
function splitter(){
    var splitter = confirm("Heeft u de splitter goed aangesloten");
    if (splitter === true){
        document.write("De splitter is goed aangesloten.");
        document.write("<br />");
        setupbox();
    }
    else{
        alert("U moet de splitter goed aansluiten!");
        document.write("De splitter is niet goed aangesloten");
        document.write("<br />");
        setupbox();
    }
}
function setupbox(){
    var setupbox = confirm("Heeft u de setupbox goed aangesloten?");
    if (setupbox === true){
        document.write("De setupbox is goed aangesloten.");
        document.write("<br />");
        zender();
    }
    else{
        alert("U moet de setupbox goed aansluiten!");
        document.write("Setupbox is niet goed aangesloten");
        document.write("<br />");
        zender();
    }
}
function zender(){
    var zender = confirm("Worden er zender gevonden?");
    if (zender === true){
        document.write("Er worden zenders gevonden.");
        document.write("<br />");
        document.write("<br />");
        document.write("U heeft geen Internet, Bellen en Televisie problemen.");
        document.write("<br />");
        document.write("* Klant heeft ");
        document.write( tvaantal);
        document.write(" televisietoestellen.");
        document.write("<br />");
        document.write("* De splitter is goed aangesloten.");
        document.write("<br />");
        document.write("* De setupbox is goed aangesloten.");
        document.write("<br />");
        document.write("* De zenders worden  gevonden.");
        document.write("</pre>");
        document.write("U heeft geen klachten gemeld op"+ datum);
        document.write("<br />");
        document.write("uw modem" +" "+soort + " werkt goed");
        document.write("<br />");
        document.write("</pre>");
        finish();
    }
    else{
        document.write("Er worden geen zenders gevonden.");
        document.write("<br />");
        document.write("<br />");
        document.write("U heeft Internet, Bellen en Televisie problemen.");
        document.write("<br />");
        document.write("* Klant heeft ");
        document.write(tvaantal);
        document.write(" televisietoestellen.");
        document.write("<br />");
        document.write("* De splitter is goed aangesloten.");
        document.write("<br />");
        document.write("* De setupbox is goed aangesloten.");
        document.write("<br />");
        document.write("* De zenders worden niet gevonden.");
        document.write("</pre>");
        document.write("U heeft klachten gemeld op " + " " + datum);
        document.write("<br />");
        document.write("</pre>");
        finish();
    }
}
function finish(){
    document.write("<P><a href = '#'>Meer informatie over internet.</a>");
    document.write("<br />");
    document.write("<a href = '#'>Meer informatie over internet & bellen.</a>");
    document.write("<br />");
    document.write("<a href = '#'>Meer informatie over alles in 1.</a></P>");
    document.write("<br />");
    alert("Dit is het einde van de vragenlijst");
    document.write("<br />");
    document.write("Einde Vragenlijst");
    document.write("<br />");
    document.write("<br />");
}