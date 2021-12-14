const y=[
    "Lyallpur khalsa college of engineering, jalandhar",
    "Guru nanak dev university, jalandhar",
    "DAV university,jalandhar",
];
var topics=y.length;
function show(value){
    document.getElementById("datalist").innerHTML="";
    list=value.length;
    for(let i=0;i<topics;i++){
        if(((y[i].toLowerCase()).indexOf(value.toLowerCase()))>-1){
            var n=document.createElement("option");
            var v=document.createTextNode(y[i]);
            n.appendChild(v);
            document.getElementById("datalist").appendChild(n);
        }
    }
}
function getsearch(){

 if(document.getElementById('sample1').value="Lyallpur khalsa college of engineering, jalandhar"){
    location.assign('lyallpurclg.html');
 }
 else if(document.getElementById('sample1').value="Guru nanak dev university, jalandhar"){
    location.assign('gnduclg.html');
 }
 else if(document.getElementById('sample1').value="DAV university,jalandhar"){
    location.assign('davclg.html');
 }
    
 
}