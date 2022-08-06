let flutter_hexagon = document.querySelector("flutter_hexagon")
let java_hexagon = document.getElementById("java_hexagon")
let firebase_hexagon = document.getElementById("firebase_hexagon")
let cs_hexagon = document.getElementById("cs_hexagon")
let css_hexagon = document.getElementById("css_hexagon")
let html_hexagon = document.getElementById("html_hexagon")
let js_hexagon = document.getElementById("js_hexagon")
let nodejs_hexagon = document.getElementById("nodejs_hexagon")
let bootstrap_hexagon = document.getElementById("bootstrap_hexagon")
let reactjs_hexagon = document.getElementById("reactjs_hexagon")
let mongodb_hexagon = document.getElementById("mongodb_hexagon")
let mysql_hexagon = document.getElementById("mysql_hexagon")
let hive_addons = document.getElementById("hive_addons")

let skillhive_detailed;
let detailed_skill_icon;
let skillhive_detailed_title;

console.log("skill container loaded");


let is_detailed_skills_initiated = false;
console.log(is_detailed_skills_initiated);
function initiate(){
    if(is_detailed_skills_initiated==false){
        let choose_skill = document.getElementById("choose-skill");
        hive_addons.removeChild(choose_skill);
        let detail_view = document.createElement("div");
        detail_view.id = "skillhive-detailed"
        detail_view.innerHTML = '';
        hive_addons.appendChild(detail_view);
        is_detailed_skills_initiated=true;
    }
    skillhive_detailed = document.getElementById('skillhive-detailed');
    detailed_skill_icon = document.getElementById('detailed-skill-icon');
    skillhive_detailed_title = document.getElementById("skill-title");
}


flutter_hexagon.addEventListener("click",function(){
    initiate();
    skillhive_detailed_title.innerHTML = "Flutter"
    detailed_skill_icon.src = "flutter.svg"
})

java_hexagon.addEventListener("click",function(){
    initiate();
    skillhive_detailed_title.innerHTML = "Java"
    detailed_skill_icon.src = "java.png"
})

firebase_hexagon.addEventListener("click",function(){
    initiate();
    skillhive_detailed_title.innerHTML = "Firebase"
    detailed_skill_icon.src = "firebase.png"
})

cs_hexagon.addEventListener("click",function(){
    initiate();
    skillhive_detailed_title.innerHTML = "C#"
    detailed_skill_icon.src = "cs.png"
})

css_hexagon.addEventListener("click",function(){
    initiate();
    skillhive_detailed_title.innerHTML = "CSS"
    detailed_skill_icon.src = "css.png"
})

html_hexagon.addEventListener("click",function(){
    initiate();
    skillhive_detailed_title.innerHTML = "HTML"
    detailed_skill_icon.src = "html.png"
})

js_hexagon.addEventListener("click",function(){
    initiate();
    skillhive_detailed_title.innerHTML = "JavaScript"
    detailed_skill_icon.src = "js.png"
})

nodejs_hexagon.addEventListener("click",function(){
    initiate();
    skillhive_detailed_title.innerHTML = "Node.js"
    detailed_skill_icon.src = "nodejs.png"
})

bootstrap_hexagon.addEventListener("click",function(){
    initiate();
    skillhive_detailed_title.innerHTML = "Bootstrap"
    detailed_skill_icon.src = "bootstrap.png"
})

reactjs_hexagon.addEventListener("click",function(){
    initiate();
    skillhive_detailed_title.innerHTML = "React Js"
    detailed_skill_icon.src = "reactjs.png"
})

mongodb_hexagon.addEventListener("click",function(){
    initiate();
    skillhive_detailed_title.innerHTML = "MongoDB"
    detailed_skill_icon.src = "mongodb.png"
})

mysql_hexagon.addEventListener("click",function(){
    initiate();
    skillhive_detailed_title.innerHTML = "MySQL"
    detailed_skill_icon.src = "mysql.png"
})