/* Gestion du survol de l'image du Cavalier*/
let knight_img=document.getElementById("knight")
let mail=document.getElementById("mailButton")
let linkedin=document.getElementById("linkedin")
let github=document.getElementById("github")

knight_img.onclick = () => {
    mail.style.display="block"; 
    linkedin.style.display="block";
    github.style.display="block";     
}

/*clic sur les éléments dans la zone contact*/
linkedin.onclick =()=>{window.location.href="https://www.linkedin.com/in/sebastien-delaunay-5093151a3/"}
github.onclick =()=>{window.location.href="https://github.com/DelaunayS"}
mail.onclick =()=>{window.alert("sebastiendelaunay44@gmail.com")}