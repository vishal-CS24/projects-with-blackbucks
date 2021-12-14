const score=document.getElementById('item1')
const pri=document.getElementById('changeprice')
let a=pri.innerHTML
let b=parseInt(a)
    function increase() {
    let x=score.innerHTML
    let y=parseInt(x)
    if(y>=10){
        alert("No more than this!")
    }else{
    y=y+1;
    score.innerHTML=y
    }
    if(score.innerHTML==2){
        b=b*2;
        pri.innerHTML=b
    
    }
    if(score.innerHTML==3){
        b=b+900;
        pri.innerHTML=b
    
    }
}

function decrease() {
    let x=score.innerHTML
    let y=parseInt(x)
    if(y==0){
        alert("No less than this!")
    }else{
    y=y-1;
    score.innerHTML=y
    }
}
const score1=document.getElementById('item2')
    function increase1() {
    let x=score1.innerHTML
    let y=parseInt(x)
    if(y>=10){
        alert("No more than this!")
    }else{
    y=y+1;
    score1.innerHTML=y
    }
}

function decrease1() {
    let x=score1.innerHTML
    let y=parseInt(x)
    if(y==0){
        alert("No less than this!")
    }else{
    y=y-1;
    score1.innerHTML=y
    }
}
function checkout(){
    location.assign('delivery.html')
}