
/* Affiche les lettres de la ligne lors du survol de l'image*/
function afficheLine(arg){  
    for (let i=0;i<arg.length;i++){
        arg[i].style.display="block"               
    }    
}

/* Efface les lettres de la ligne quand il n'y a pas de survol*/
function effaceLine(arg){  
    for (let i=0;i<arg.length;i++){
        arg[i].style.display="none"              
    }    
}

/* Gestion du survol de l'image du Roi*/
let king_img=document.getElementById("king")
var king_letters=document.querySelectorAll('.king_line')

king_img.onmouseover = () => {
    afficheLine(king_letters);
}

king_img.onclick = () => {
    afficheLine(king_letters);
}

king_img.onmouseout = () => {
    effaceLine(king_letters);
}

/* Gestion du survol de l'image de la Tour*/
let rook_img=document.getElementById("rook")
let rook_letters=document.querySelectorAll(".rook_line")

rook_img.onmouseover = () => {
    afficheLine(rook_letters);
}

rook_img.onmouseout = () => {
    effaceLine(rook_letters);
}

/* Gestion du survol de l'image de la Dame*/
let queen_img=document.getElementById("queen")
var queen_letters=document.getElementsByClassName("queen_line")

queen_img.onmouseover = () => {
    afficheLine(queen_letters);
}

queen_img.onmouseout = () => {
    effaceLine(queen_letters);
}

/* Gestion du survol de l'image du Fou*/
let bishop_img=document.getElementById("bishop")
var bishop_letters=document.getElementsByClassName("bishop_line")

bishop_img.onmouseover = () => {
    afficheLine(bishop_letters);
}

bishop_img.onclick = () => {
    afficheLine(bishop_letters);
}

bishop_img.onmouseout = () => {
    effaceLine(bishop_letters);
}

/* Gestion du survol de l'image du Pion*/
let pawn_img=document.getElementById("pawn")
var pawn_letters=document.getElementsByClassName("pawn_line")

pawn_img.onmouseover = () => {
    afficheLine(pawn_letters);
}

pawn_img.onmouseout = () => {
    effaceLine(pawn_letters);
}

/* Gestion du survol de l'image du Cavalier*/
let knight_img=document.getElementById("knight")
var knight_letters=document.getElementsByClassName("knight_line")
let mail=document.getElementById("mailButton")
let linkedin=document.getElementById("linkedin")
let github=document.getElementById("github")

knight_img.onmouseover = () => {
    afficheLine(knight_letters);
}

knight_img.onclick = () => {
    afficheLine(knight_letters);
    mail.style.display="block"; 
    linkedin.style.display="block";
    github.style.display="block";     
}

knight_img.onmouseout = () => {
    effaceLine(knight_letters);
}

/*clic sur les éléments dans la zone contact*/
linkedin.onclick =()=>{window.location.href="https://www.linkedin.com/in/sebastien-delaunay-5093151a3/"}
github.onclick =()=>{window.location.href="https://github.com/DelaunayS"}
mail.onclick =()=>{window.alert("sebastiendelaunay44@gmail.com")}

/*gestion image perso*/
let secretSquare=document.getElementById("smiley")
secretSquare.onclick = () => {
    windows.alert(href="MarbreEffet.jpg")
}