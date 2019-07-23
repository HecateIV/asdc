//SCRIPT PROVISOIRE PERMETTANT L'AJOUT CONDITIONEL DE SCRIPT CSS DANS LA PAGE PERSONNALISÉE
// Get HTML head element 
var head = document.getElementsByTagName('HEAD')[0];
var cssToAdd = ['https://dl.dropbox.com/s/lafize63wzazauw/custom-asdecarreaux.css?dl=0'];
cssToAdd.forEach(element => {
    // Create new link Element 
    var link = document.createElement('link');
    // set the attributes for link element
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = element;
    // Append link element to HTML head
    head.appendChild(link);
});