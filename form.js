

function resum(){
alert("Do You Want To Select A  File");
var x=document.getElementById("resume").type="file";
}

function menu(){
document.getElementById('menuside').style.display="block";
document.getElementById('menuside').style.left='0%';
document.getElementById('menuside').style.animation="side 0.3s linear 0s 1 reverse";


}

function back(){
document.getElementById('menuside').style.left='-70%';
document.getElementById('menuside').style.animation="side1  0.3s linear 0s 1 reverse";

}

function color(){
var x=document.getElementById('color').value;
document.getElementById('menuside').style.backgroundColor=x;
document.getElementById('bchover').style.display='none'

}

function formshtml(){
document.getElementById('menuside').style.left='-110%';
document.getElementById('menuside').style.animation='side1 0.5s linear 0s 1 reverse';
}

function home(){
document.getElementById('menuside').style.left='-70%';
document.getElementById('menuside').style.animation='side1 0.3s linear 0s 1 reverse';
}

function imagehover(){
document.getElementById('bchover').style.display='flex'
document.getElementById('bchover').style.animation='height 0.3s linear 0s 1 reverse';
}

function closebc(){
document.getElementById('bchover').style.animation='height1 0.3s linear 0s 1 reverse';
document.getElementById('bchover').style.display='none';
}


/*function fun(){
document.getElementById("reset").style.boxShadow="0px 0px 0px black";
document.getElementById("reset").style.transform="translateY(10px)";

}*/