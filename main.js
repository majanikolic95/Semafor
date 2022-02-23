function semafor(){
var boje= document.getElementsByClassName("boje");
boje [0].style.background="red";
boje [1].style.background="gray";
boje [2].style.background="gray";

function changetoyellow(){
    boje [0].style.background="gray";
    boje [1].style.background="yellow";
    boje [2].style.background="gray";
}

function changetogreen(){
    boje [0].style.background="gray";
    boje [1].style.background="gray";
    boje [2].style.background="green";
    
}

var x= setTimeout(changetoyellow,4000);
var y= setTimeout(changetogreen, 8000);
var start= setInterval(semafor, 12000);
}
semafor();

function pesak(){
    

var prelaz= document.getElementsByClassName("prelaz");
prelaz [0].style.background="red";
prelaz [1].style.background="gray";

function chagetogreen (){
    prelaz[0].style.background="grey";
    prelaz[1].style.background="green";
}
var z=setTimeout(chagetogreen, 4000);
var kreni=setInterval(pesak,10000);
}
pesak();


